"use client"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { useState, useEffect, useRef } from "react"
import type { Vehicle } from "@/lib/data"

type VehicleFiltersProps = {
  initialVehicles: Vehicle[]
  onFilterChange: (filteredVehicles: Vehicle[]) => void
  onReset: () => void
}

export function VehicleFilters({ initialVehicles, onFilterChange, onReset }: VehicleFiltersProps) {
  // Extrakcia unikátnych značiek z aktuálnych dát vozidiel
  const uniqueBrands = Array.from(
    new Set(
      initialVehicles.map((vehicle) => {
        // Extrakcia značky z názvu (predpokladáme, že prvé slovo je značka)
        const brand = vehicle.title.split(" ")[0]
        return brand
      }),
    ),
  ).sort()

  // Extrakcia unikátnych kategórií (zjednodušené pre demo)
  const categories = ["Sedan", "SUV", "Kombi", "Hatchback", "MPV"]

  // Extrakcia unikátnych palív
  const fuels = Array.from(new Set(initialVehicles.map((v) => v.fuel))).sort()

  // Extrakcia unikátnych prevodoviek
  const transmissions = Array.from(
    new Set(
      initialVehicles.map((v) => (v.transmission && v.transmission.includes("automat") ? "Automatická" : "Manuálna")),
    ),
  ).sort()

  // Získanie min/max hodnôt pre rozsahy
  const minPrice = Math.min(...initialVehicles.map((v) => v.price.withVat))
  const maxPrice = Math.max(...initialVehicles.map((v) => v.price.withVat))
  const minYear = Math.min(...initialVehicles.filter((v) => v.year > 0).map((v) => v.year))
  const maxYear = Math.max(...initialVehicles.filter((v) => v.year > 0).map((v) => v.year))
  const minKm = Math.min(...initialVehicles.filter((v) => v.mileage > 0).map((v) => v.mileage))
  const maxKm = Math.max(...initialVehicles.filter((v) => v.mileage > 0).map((v) => v.mileage))

  // Inicializácia stavu pre všetky filtre
  const [selectedBrands, setSelectedBrands] = useState<string[]>([])
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedFuels, setSelectedFuels] = useState<string[]>([])
  const [selectedTransmissions, setSelectedTransmissions] = useState<string[]>([])
  const [priceRange, setPriceRange] = useState<[number, number]>([minPrice, maxPrice])
  const [yearRange, setYearRange] = useState<[number, number]>([minYear, maxYear])
  const [kmRange, setKmRange] = useState<[number, number]>([minKm, maxKm])

  // Použitie ref na sledovanie, či sa filtre zmenili
  const filtersChanged = useRef(false)

  // Pomocná funkcia na filtrovanie vozidiel
  const filterVehicles = () => {
    const filtered = initialVehicles.filter((vehicle) => {
      // Filter značky
      if (selectedBrands.length > 0) {
        const vehicleBrand = vehicle.title.split(" ")[0]
        if (!selectedBrands.includes(vehicleBrand)) {
          return false
        }
      }

      // Filter kategórie (zjednodušené)
      if (selectedCategories.length > 0) {
        let matches = false
        if (
          selectedCategories.includes("SUV") &&
          (vehicle.title.includes("Kuga") ||
            vehicle.title.includes("Ateca") ||
            vehicle.title.includes("3008") ||
            vehicle.title.includes("5008"))
        ) {
          matches = true
        }
        if (
          selectedCategories.includes("Kombi") &&
          (vehicle.title.includes("Combi") || vehicle.title.includes("SW") || vehicle.title.includes("Variant"))
        ) {
          matches = true
        }
        if (
          selectedCategories.includes("Sedan") &&
          (vehicle.title.includes("Sedan") || vehicle.title.includes("Limousine"))
        ) {
          matches = true
        }
        if (selectedCategories.includes("MPV") && vehicle.title.includes("Galaxy")) {
          matches = true
        }
        if (selectedCategories.includes("Hatchback") && vehicle.title.includes("C3")) {
          matches = true
        }
        if (!matches && selectedCategories.length > 0) {
          return false
        }
      }

      // Filter paliva
      if (selectedFuels.length > 0 && !selectedFuels.includes(vehicle.fuel)) {
        return false
      }

      // Filter prevodovky
      if (selectedTransmissions.length > 0) {
        const transmissionType =
          vehicle.transmission && vehicle.transmission.includes("automat") ? "Automatická" : "Manuálna"
        if (!selectedTransmissions.includes(transmissionType)) {
          return false
        }
      }

      // Filter cenového rozsahu
      if (vehicle.price.withVat < priceRange[0] || vehicle.price.withVat > priceRange[1]) {
        return false
      }

      // Filter rozsahu rokov
      if (vehicle.year > 0 && (vehicle.year < yearRange[0] || vehicle.year > yearRange[1])) {
        return false
      }

      // Filter rozsahu kilometrov
      if (vehicle.mileage > 0 && (vehicle.mileage < kmRange[0] || vehicle.mileage > kmRange[1])) {
        return false
      }

      return true
    })

    return filtered
  }

  // Aplikácia filtrov pri ich zmene
  useEffect(() => {
    // Preskočiť prvé renderovanie, aby sme zabránili nekonečnej slučke
    if (!filtersChanged.current) {
      return
    }

    const filtered = filterVehicles()
    onFilterChange(filtered)
  }, [selectedBrands, selectedCategories, selectedFuels, selectedTransmissions, priceRange, yearRange, kmRange])

  // Spracovanie zmeny značky
  const handleBrandChange = (brand: string, checked: boolean) => {
    if (!filtersChanged.current) {
      filtersChanged.current = true
    }

    if (checked) {
      setSelectedBrands((prev) => [...prev, brand])
    } else {
      setSelectedBrands((prev) => prev.filter((b) => b !== brand))
    }
  }

  // Spracovanie zmeny kategórie
  const handleCategoryChange = (category: string, checked: boolean) => {
    filtersChanged.current = true
    if (checked) {
      setSelectedCategories((prev) => [...prev, category])
    } else {
      setSelectedCategories((prev) => prev.filter((c) => c !== category))
    }
  }

  // Spracovanie zmeny paliva
  const handleFuelChange = (fuel: string, checked: boolean) => {
    filtersChanged.current = true
    if (checked) {
      setSelectedFuels((prev) => [...prev, fuel])
    } else {
      setSelectedFuels((prev) => prev.filter((f) => f !== fuel))
    }
  }

  // Spracovanie zmeny prevodovky
  const handleTransmissionChange = (transmission: string, checked: boolean) => {
    filtersChanged.current = true
    if (checked) {
      setSelectedTransmissions((prev) => [...prev, transmission])
    } else {
      setSelectedTransmissions((prev) => prev.filter((t) => t !== transmission))
    }
  }

  const handlePriceRangeChange = (value: number[]) => {
    filtersChanged.current = true
    setPriceRange(value as [number, number])
  }

  const handleYearRangeChange = (value: number[]) => {
    filtersChanged.current = true
    setYearRange(value as [number, number])
  }

  const handleKmRangeChange = (value: number[]) => {
    filtersChanged.current = true
    setKmRange(value as [number, number])
  }

  // Reset všetkých filtrov
  const handleReset = () => {
    filtersChanged.current = false
    setSelectedBrands([])
    setSelectedCategories([])
    setSelectedFuels([])
    setSelectedTransmissions([])
    setPriceRange([minPrice, maxPrice])
    setYearRange([minYear, maxYear])
    setKmRange([minKm, maxKm])
    onReset()
  }

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h3 className="font-medium">Značka</h3>
        <div className="mt-2 space-y-2">
          {uniqueBrands.map((brand, index) => (
            <div
              key={index}
              className="flex items-center space-x-2 animate-slide-in"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <Checkbox
                id={`brand-${brand.toLowerCase()}`}
                checked={selectedBrands.includes(brand)}
                onCheckedChange={(checked) => handleBrandChange(brand, checked === true)}
              />
              <Label htmlFor={`brand-${brand.toLowerCase()}`}>{brand}</Label>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h3 className="font-medium">Kategória</h3>
        <div className="mt-2 space-y-2">
          {categories.map((category, index) => (
            <div
              key={index}
              className="flex items-center space-x-2 animate-slide-in"
              style={{ animationDelay: `${index * 50 + 200}ms` }}
            >
              <Checkbox
                id={`category-${category.toLowerCase()}`}
                checked={selectedCategories.includes(category)}
                onCheckedChange={(checked) => handleCategoryChange(category, checked === true)}
              />
              <Label htmlFor={`category-${category.toLowerCase()}`}>{category}</Label>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h3 className="font-medium">Palivo</h3>
        <div className="mt-2 space-y-2">
          {fuels.map((fuel, index) => (
            <div
              key={index}
              className="flex items-center space-x-2 animate-slide-in"
              style={{ animationDelay: `${index * 50 + 400}ms` }}
            >
              <Checkbox
                id={`fuel-${fuel.toLowerCase()}`}
                checked={selectedFuels.includes(fuel)}
                onCheckedChange={(checked) => handleFuelChange(fuel, checked === true)}
              />
              <Label htmlFor={`fuel-${fuel.toLowerCase()}`}>{fuel}</Label>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h3 className="font-medium">Prevodovka</h3>
        <div className="mt-2 space-y-2">
          {transmissions.map((transmission, index) => (
            <div
              key={index}
              className="flex items-center space-x-2 animate-slide-in"
              style={{ animationDelay: `${index * 50 + 600}ms` }}
            >
              <Checkbox
                id={`transmission-${transmission.toLowerCase()}`}
                checked={selectedTransmissions.includes(transmission)}
                onCheckedChange={(checked) => handleTransmissionChange(transmission, checked === true)}
              />
              <Label htmlFor={`transmission-${transmission.toLowerCase()}`}>{transmission}</Label>
            </div>
          ))}
        </div>
      </div>
      <div className="animate-fade-in" style={{ animationDelay: "700ms" }}>
        <h3 className="font-medium">
          Cena: {priceRange[0].toLocaleString("sk")} € - {priceRange[1].toLocaleString("sk")} €
        </h3>
        <Slider
          defaultValue={[minPrice, maxPrice]}
          min={minPrice}
          max={maxPrice}
          step={500}
          value={priceRange}
          onValueChange={handlePriceRangeChange}
          className="mt-6"
        />
      </div>
      <div className="animate-fade-in" style={{ animationDelay: "800ms" }}>
        <h3 className="font-medium">
          Rok výroby: {yearRange[0]} - {yearRange[1]}
        </h3>
        <Slider
          defaultValue={[minYear, maxYear]}
          min={minYear}
          max={maxYear}
          step={1}
          value={yearRange}
          onValueChange={handleYearRangeChange}
          className="mt-6"
        />
      </div>
      <div className="animate-fade-in" style={{ animationDelay: "900ms" }}>
        <h3 className="font-medium">
          Najazdené: {kmRange[0].toLocaleString("sk")} km - {kmRange[1].toLocaleString("sk")} km
        </h3>
        <Slider
          defaultValue={[minKm, maxKm]}
          min={minKm}
          max={maxKm}
          step={5000}
          value={kmRange}
          onValueChange={handleKmRangeChange}
          className="mt-6"
        />
      </div>
      <Button
        variant="outline"
        className="w-full animate-fade-in"
        style={{ animationDelay: "1000ms" }}
        onClick={handleReset}
      >
        Zrušiť filtre
      </Button>
    </div>
  )
}
