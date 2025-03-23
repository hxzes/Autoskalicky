import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Fuel, Calendar, RouteIcon as Road, Gauge } from "lucide-react"
import { vehicles } from "@/lib/data"

export function Cars() {
  // Group vehicles by fuel type
  const dieselVehicles = vehicles.filter((v) => v.fuel === "Diesel").slice(0, 4)
  const petrolVehicles = vehicles.filter((v) => v.fuel === "Benzín").slice(0, 4)
  const suvVehicles = vehicles
    .filter(
      (v) =>
        v.title.includes("Kuga") ||
        v.title.includes("T-Roc") ||
        v.title.includes("Ateca") ||
        v.title.includes("3008") ||
        v.title.includes("5008"),
    )
    .slice(0, 4)
  const combiVehicles = vehicles
    .filter(
      (v) =>
        v.title.includes("Combi") ||
        v.title.includes("Variant") ||
        v.title.includes("Break") ||
        v.title.includes("SW") ||
        v.title.includes("Tourer"),
    )
    .slice(0, 4)

  const renderVehicleCards = (vehicleList: typeof vehicles) => (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {vehicleList.map((vehicle) => (
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
              width={600}
              height={400}
              className="object-cover w-full h-full transition-transform group-hover:scale-105"
            />
          </div>
          <div className="p-4">
            <h3 className="font-bold">{vehicle.title}</h3>
            {vehicle.subtitle && <p className="text-sm text-muted-foreground">{vehicle.subtitle}</p>}
            <div className="mt-2 grid grid-cols-2 gap-2">
              <div className="flex items-center text-xs text-muted-foreground">
                <Calendar className="mr-1 h-3 w-3 text-primary" />
                {vehicle.year}
              </div>
              <div className="flex items-center text-xs text-muted-foreground">
                <Fuel className="mr-1 h-3 w-3 text-primary" />
                {vehicle.fuel}
              </div>
              <div className="flex items-center text-xs text-muted-foreground">
                <Road className="mr-1 h-3 w-3 text-primary" />
                {vehicle.mileage.toLocaleString("sk")} km
              </div>
              <div className="flex items-center text-xs text-muted-foreground">
                <Gauge className="mr-1 h-3 w-3 text-primary" />
                {vehicle.transmission}
              </div>
            </div>
            <div className="mt-4 flex items-baseline justify-between">
              <span className="font-bold">{vehicle.price.withVat.toLocaleString("sk")} €</span>
              <Button asChild size="sm" variant="outline">
                <Link href={`/vozidla/${vehicle.id}`}>Detail</Link>
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )

  return (
    <div className="mt-16 relative overflow-hidden rounded-xl bg-background border shadow-sm">
      <div className="py-12 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 gap-4">
            <h2 className="text-2xl font-bold md:text-3xl text-foreground">Naša ponuka vozidiel</h2>
            <Link href="/vozidla" className="text-primary hover:underline flex items-center">
              Zobraziť všetky
              <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </div>

          <div className="bg-background rounded-xl p-4 sm:p-6 border">
            <Tabs defaultValue="all">
              <div className="overflow-x-auto pb-2">
                <TabsList className="w-full justify-start">
                  <TabsTrigger value="all">Všetky</TabsTrigger>
                  <TabsTrigger value="suv">SUV</TabsTrigger>
                  <TabsTrigger value="diesel">Diesel</TabsTrigger>
                  <TabsTrigger value="benzin">Benzín</TabsTrigger>
                  <TabsTrigger value="combi">Kombi</TabsTrigger>
                </TabsList>
              </div>
              <TabsContent value="all" className="mt-6">
                {renderVehicleCards(vehicles.slice(0, 8))}
              </TabsContent>
              <TabsContent value="suv" className="mt-6">
                {renderVehicleCards(suvVehicles)}
              </TabsContent>
              <TabsContent value="diesel" className="mt-6">
                {renderVehicleCards(dieselVehicles)}
              </TabsContent>
              <TabsContent value="benzin" className="mt-6">
                {renderVehicleCards(petrolVehicles)}
              </TabsContent>
              <TabsContent value="combi" className="mt-6">
                {renderVehicleCards(combiVehicles)}
              </TabsContent>
            </Tabs>
          </div>

          <div className="mt-8 flex justify-center">
            <Button asChild>
              <Link href="/vozidla">Zobraziť všetky vozidlá</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

