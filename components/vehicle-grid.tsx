"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"
import { Calendar, Fuel, Gauge, RouteIcon as Road } from "lucide-react"
import { vehicles } from "@/lib/data"
import { useState, useEffect } from "react"
import type { VehicleFilters } from "./vehicle-filters"
import { LoadingSpinner } from "./loading-spinner"

type VehicleGridProps = {
  filters?: VehicleFilters
}

export function VehicleGrid({ filters }: VehicleGridProps) {
  const [filteredVehicles, setFilteredVehicles] = useState(vehicles)
  const [isLoading, setIsLoading] = useState(false)

  // Apply filters when they change
  useEffect(() => {
    if (!filters) {
      setFilteredVehicles(vehicles)
      return
    }

    setIsLoading(true)

    // Use a flag to track if the component is still mounted
    let isMounted = true

    // Simulate loading delay for better UX
    const timeoutId = setTimeout(() => {
      if (!isMounted) return

      const filtered = vehicles.filter((vehicle) => {
        // Brand filter
        if (filters.brands.length > 0) {
          const vehicleBrand = vehicle.title.split(" ")[0]
          if (!filters.brands.includes(vehicleBrand)) {
            return false
          }
        }

        // Category filter (simplified)
        if (filters.categories.length > 0) {
          let matches = false
          if (
            filters.categories.includes("SUV") &&
            (vehicle.title.includes("Kuga") ||
              vehicle.title.includes("Ateca") ||
              vehicle.title.includes("3008") ||
              vehicle.title.includes("5008"))
          ) {
            matches = true
          }
          if (
            filters.categories.includes("Kombi") &&
            (vehicle.title.includes("Combi") || vehicle.title.includes("SW") || vehicle.title.includes("Variant"))
          ) {
            matches = true
          }
          if (
            filters.categories.includes("Sedan") &&
            (vehicle.title.includes("Sedan") || vehicle.title.includes("Limousine"))
          ) {
            matches = true
          }
          if (filters.categories.includes("MPV") && vehicle.title.includes("Galaxy")) {
            matches = true
          }
          if (filters.categories.includes("Hatchback") && vehicle.title.includes("C3")) {
            matches = true
          }
          if (!matches && filters.categories.length > 0) {
            return false
          }
        }

        // Fuel filter
        if (filters.fuels.length > 0 && !filters.fuels.includes(vehicle.fuel)) {
          return false
        }

        // Transmission filter
        const transmissionType = vehicle.transmission.includes("automat") ? "Automatická" : "Manuálna"
        if (filters.transmissions.length > 0 && !filters.transmissions.includes(transmissionType)) {
          return false
        }

        // Price range filter
        if (vehicle.price.withVat < filters.priceRange[0] || vehicle.price.withVat > filters.priceRange[1]) {
          return false
        }

        // Year range filter
        if (vehicle.year < filters.yearRange[0] || vehicle.year > filters.yearRange[1]) {
          return false
        }

        // Mileage range filter
        if (vehicle.mileage < filters.kmRange[0] || vehicle.mileage > filters.kmRange[1]) {
          return false
        }

        return true
      })

      if (isMounted) {
        setFilteredVehicles(filtered)
        setIsLoading(false)
      }
    }, 500)

    // Cleanup function to prevent state updates after unmount
    return () => {
      isMounted = false
      clearTimeout(timeoutId)
    }
  }, [filters])

  if (isLoading) {
    return (
      <div className="flex justify-center py-12">
        <LoadingSpinner />
      </div>
    )
  }

  if (filteredVehicles.length === 0) {
    return (
      <div className="text-center py-12 animate-fade-in">
        <h3 className="text-xl font-medium mb-2">Žiadne vozidlá sa nenašli</h3>
        <p className="text-muted-foreground mb-6">Skúste upraviť filtre pre zobrazenie vozidiel.</p>
        <Button variant="outline" onClick={() => window.location.reload()}>
          Obnoviť všetky vozidlá
        </Button>
      </div>
    )
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {filteredVehicles.map((vehicle, index) => (
        <div
          key={vehicle.id}
          className="group overflow-hidden rounded-lg border bg-background shadow-sm transition-all hover:shadow-md animate-fade-up"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <div className="relative h-48 w-full overflow-hidden">
            {vehicle.isNew && <Badge className="absolute left-2 top-2 z-10">Novinka</Badge>}
            {vehicle.isAction && (
              <Badge className="absolute left-2 top-2 z-10" variant="secondary">
                Akcia
              </Badge>
            )}
            <Image
              src={vehicle.image || "/placeholder.svg"}
              alt={vehicle.title}
              width={600}
              height={400}
              className="object-cover w-full h-full transition-transform group-hover:scale-105"
            />
          </div>
          <div className="p-4">
            <h3 className="font-bold">{vehicle.title}</h3>
            {vehicle.subtitle && <p className="text-sm text-muted-foreground">{vehicle.subtitle}</p>}
            <div className="mt-2 grid grid-cols-2 gap-2">
              {vehicle.year > 0 && (
                <div className="flex items-center text-xs text-muted-foreground">
                  <Calendar className="mr-1 h-3 w-3 text-primary" />
                  {vehicle.year}
                </div>
              )}
              <div className="flex items-center text-xs text-muted-foreground">
                <Fuel className="mr-1 h-3 w-3 text-primary" />
                {vehicle.fuel}
              </div>
              {vehicle.mileage > 0 && (
                <div className="flex items-center text-xs text-muted-foreground">
                  <Road className="mr-1 h-3 w-3 text-primary" />
                  {vehicle.mileage.toLocaleString("sk")} km
                </div>
              )}
              {vehicle.transmission && (
                <div className="flex items-center text-xs text-muted-foreground">
                  <Gauge className="mr-1 h-3 w-3 text-primary" />
                  {vehicle.transmission}
                </div>
              )}
            </div>
            <div className="mt-4 flex items-baseline justify-between">
              <div>
                <span className="font-bold">{vehicle.price.withVat.toLocaleString("sk")} €</span>
                {vehicle.price.withoutVat && (
                  <div className="text-xs text-muted-foreground">
                    {vehicle.price.withoutVat.toLocaleString("sk")} € bez DPH
                  </div>
                )}
              </div>
              <Button asChild size="sm" variant="outline" className="animate-pulse-subtle">
                <Link href={`/vozidla/${vehicle.id}`}>Detail</Link>
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

