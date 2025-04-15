import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { Calendar, Fuel, Gauge, RouteIcon as Road } from "lucide-react"

export function SimilarCars() {
  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {Array.from({ length: 4 }).map((_, i) => (
        <div
          key={i}
          className="group overflow-hidden rounded-lg border bg-background shadow-sm transition-all hover:shadow-md"
        >
          <div className="relative h-40 w-full overflow-hidden">
            <Image
              src={`/placeholder.svg?height=400&width=600&text=Podobné vozidlo ${i + 1}`}
              alt={`Podobné vozidlo ${i + 1}`}
              fill
              className="object-cover transition-transform group-hover:scale-105"
            />
          </div>
          <div className="p-4">
            <h3 className="font-bold">{["BMW X5", "Mercedes-Benz GLE", "Audi Q7", "Volkswagen Touareg"][i % 4]}</h3>
            <p className="text-sm text-muted-foreground">
              {["xDrive40d", "350d 4MATIC", "3.0 TDI quattro", "3.0 TDI"][i % 4]}
            </p>
            <div className="mt-2 grid grid-cols-2 gap-2">
              <div className="flex items-center text-xs text-muted-foreground">
                <Calendar className="mr-1 h-3 w-3 text-primary" />
                {2018 + (i % 5)}
              </div>
              <div className="flex items-center text-xs text-muted-foreground">
                <Fuel className="mr-1 h-3 w-3 text-primary" />
                Diesel
              </div>
              <div className="flex items-center text-xs text-muted-foreground">
                <Road className="mr-1 h-3 w-3 text-primary" />
                {(30 + i * 8).toLocaleString("sk")} 000 km
              </div>
              <div className="flex items-center text-xs text-muted-foreground">
                <Gauge className="mr-1 h-3 w-3 text-primary" />
                Automatická
              </div>
            </div>
            <div className="mt-4 flex items-baseline justify-between">
              <span className="font-bold">{(50 + i * 7).toLocaleString("sk")} 900 €</span>
              <Button asChild size="sm" variant="outline">
                <Link href={`/vozidla/${i + 10}`}>Detail</Link>
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
