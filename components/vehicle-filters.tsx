"use client"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { useState } from "react"
import { vehicles } from "@/lib/data"

// Define filter state type
export type VehicleFilters = {
  brands: string[]
  categories: string[]
  fuels: string[]
  transmissions: string[]
  priceRange: [number, number]
  yearRange: [number, number]
  kmRange: [number, number]
}

// Define props type
type VehicleFiltersProps = {
  onFiltersChange: (filters: VehicleFilters) => void
  onReset: () => void
}

export function VehicleFilters({ onFiltersChange, onReset }: VehicleFiltersProps) {
  // Extract unique brands from the actual vehicle data
  const uniqueBrands = Array.from(
    new Set(
      vehicles.map((vehicle) => {
        // Extract brand from the title (assuming the first word is the brand)
        const brand = vehicle.title.split(" ")[0]
        return brand
      }),
    ),
  ).sort()

  // Extract unique categories (simplified for demo)
  const categories = ["Sedan", "SUV", "Kombi", "Hatchback", "MPV"]

  // Extract unique fuels
  const fuels = Array.from(new Set(vehicles.map((v) => v.fuel))).sort()

  // Extract unique transmissions
  const transmissions = Array.from(
    new Set(vehicles.map((v) => (v.transmission.includes("automat") ? "Automatická" : "Manuálna"))),
  ).sort()

  // Get min/max values for ranges
  const minPrice = Math.min(...vehicles.map((v) => v.price.withVat))
  const maxPrice = Math.max(...vehicles.map((v) => v.price.withVat))
  const minYear = Math.min(...vehicles.map((v) => v.year))
  const maxYear = Math.max(...vehicles.map((v) => v.year))
  const minKm = Math.min(...vehicles.map((v) => v.mileage))
  const maxKm = Math.max(...vehicles.map((v) => v.mileage))

  // Initialize state for all filters
  const [selectedBrands, setSelectedBrands] = useState<string[]>([])
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedFuels, setSelectedFuels] = useState<string[]>([])
  const [selectedTransmissions, setSelectedTransmissions] = useState<string[]>([])
  const [priceRange, setPriceRange] = useState<[number, number]>([minPrice, maxPrice])
  const [yearRange, setYearRange] = useState<[number, number]>([minYear, maxYear])
  const [kmRange, setKmRange] = useState<[number, number]>([minKm, maxKm])

  // Handle brand checkbox changes
  const handleBrandChange = (brand: string, checked: boolean) => {
    if (checked) {
      setSelectedBrands((prev) => [...prev, brand])
    } else {
      setSelectedBrands((prev) => prev.filter((b) => b !== brand))
    }
  }

  // Handle category checkbox changes
  const handleCategoryChange = (category: string, checked: boolean) => {
    if (checked) {
      setSelectedCategories((prev) => [...prev, category])
    } else {
      setSelectedCategories((prev) => prev.filter((c) => c !== category))
    }
  }

  // Handle fuel checkbox changes
  const handleFuelChange = (fuel: string, checked: boolean) => {
    if (checked) {
      setSelectedFuels((prev) => [...prev, fuel])
    } else {
      setSelectedFuels((prev) => prev.filter((f) => f !== fuel))
    }
  }

  // Handle transmission checkbox changes
  const handleTransmissionChange = (transmission: string, checked: boolean) => {
    if (checked) {
      setSelectedTransmissions((prev) => [...prev, transmission])
    } else {
      setSelectedTransmissions((prev) => prev.filter((t) => t !== transmission))
    }
  }

  // Reset all filters
  const handleReset = () => {
    setSelectedBrands([])
    setSelectedCategories([])
    setSelectedFuels([])
    setSelectedTransmissions([])
    setPriceRange([minPrice, maxPrice])
    setYearRange([minYear, maxYear])
    setKmRange([minKm, maxKm])
    onReset()
  }

  // Apply filters
  const handleApplyFilters = () => {
    const filters: VehicleFilters = {
      brands: selectedBrands,
      categories: selectedCategories,
      fuels: selectedFuels,
      transmissions: selectedTransmissions,
      priceRange,
      yearRange,
      kmRange,
    }

    onFiltersChange(filters)
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
          onValueChange={(value) => setPriceRange(value as [number, number])}
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
          onValueChange={(value) => setYearRange(value as [number, number])}
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
          onValueChange={(value) => setKmRange(value as [number, number])}
          className="mt-6"
        />
      </div>
      <Button className="w-full animate-fade-in" style={{ animationDelay: "1000ms" }} onClick={handleApplyFilters}>
        Použiť filtre
      </Button>
      <Button
        variant="outline"
        className="w-full animate-fade-in"
        style={{ animationDelay: "1100ms" }}
        onClick={handleReset}
      >
        Zrušiť filtre
      </Button>
    </div>
  )
}

