"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"
import { Calendar, Fuel, Gauge, RouteIcon as Road } from "lucide-react"
import type { Vehicle } from "@/lib/data"
import { memo } from "react"

type VehicleGridProps = {
  vehicles: Vehicle[]
  currentPage: number
}

export const VehicleGrid = memo(function VehicleGrid({ vehicles, currentPage }: VehicleGridProps) {
  const vehiclesPerPage = 6

  // Výpočet indexov pre stránkovanie
  const startIndex = (currentPage - 1) * vehiclesPerPage
  const endIndex = startIndex + vehiclesPerPage

  // Získanie vozidiel pre aktuálnu stránku
  const displayedVehicles = vehicles.slice(startIndex, endIndex)

  if (vehicles.length === 0) {
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
      {displayedVehicles.map((vehicle, index) => (
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
})
