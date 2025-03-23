import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Fuel, Calendar, RouteIcon as Road, Gauge } from "lucide-react"
import { vehicles } from "@/lib/data"

export function FeaturedCar() {
  // Get the first 3 vehicles that are either new or on sale
  const featuredVehicles = vehicles
    .filter((vehicle) => vehicle.isNew || vehicle.isAction || vehicle.year >= 2020)
    .slice(0, 3)

  return (
    <div className="mt-16">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold md:text-3xl">Najnovšie vozidlá</h2>
        <Link href="/vozidla" className="text-primary hover:underline flex items-center">
          Zobraziť všetky
          <ChevronRight className="ml-1 h-4 w-4" />
        </Link>
      </div>
      <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {featuredVehicles.map((vehicle) => (
          <div
            key={vehicle.id}
            className="group overflow-hidden rounded-lg border bg-background shadow-sm transition-all hover:shadow-md"
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
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-bold">{vehicle.title}</h3>
              {vehicle.subtitle && <p className="text-muted-foreground">{vehicle.subtitle}</p>}
              <div className="mt-2 grid grid-cols-2 gap-2">
                {vehicle.year > 0 && (
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="mr-1 h-4 w-4 text-primary" />
                    {vehicle.year}
                  </div>
                )}
                <div className="flex items-center text-sm text-muted-foreground">
                  <Fuel className="mr-1 h-4 w-4 text-primary" />
                  {vehicle.fuel}
                </div>
                {vehicle.mileage > 0 && (
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Road className="mr-1 h-4 w-4 text-primary" />
                    {vehicle.mileage.toLocaleString("sk")} km
                  </div>
                )}
                {vehicle.transmission && (
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Gauge className="mr-1 h-4 w-4 text-primary" />
                    {vehicle.transmission}
                  </div>
                )}
              </div>
              <div className="mt-4 flex items-baseline justify-between">
                <div>
                  <span className="text-2xl font-bold">{vehicle.price.withVat.toLocaleString("sk")} €</span>
                  {vehicle.price.withoutVat && (
                    <span className="ml-1 text-xs text-muted-foreground">
                      {vehicle.price.withoutVat.toLocaleString("sk")} € bez DPH
                    </span>
                  )}
                </div>
                <Button asChild size="sm">
                  <Link href={`/vozidla/${vehicle.id}`}>Detail</Link>
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

