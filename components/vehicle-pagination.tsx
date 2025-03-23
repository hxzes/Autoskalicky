import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { vehicles } from "@/lib/data"

export function VehiclePagination() {
  // Calculate the number of pages based on the total number of vehicles
  // Assuming 6 vehicles per page
  const vehiclesPerPage = 6
  const totalVehicles = vehicles.length
  const totalPages = Math.ceil(totalVehicles / vehiclesPerPage)

  return (
    <div className="flex items-center justify-center space-x-2">
      <Button variant="outline" size="icon">
        <ChevronLeft className="h-4 w-4" />
        <span className="sr-only">Predchádzajúca stránka</span>
      </Button>

      {Array.from({ length: totalPages }).map((_, index) => (
        <Button
          key={index}
          variant="outline"
          className={`h-8 w-8 p-0 ${index === 0 ? "bg-primary text-primary-foreground hover:bg-primary/90" : ""}`}
        >
          {index + 1}
        </Button>
      ))}

      <Button variant="outline" size="icon">
        <ChevronRight className="h-4 w-4" />
        <span className="sr-only">Nasledujúca stránka</span>
      </Button>
    </div>
  )
}

