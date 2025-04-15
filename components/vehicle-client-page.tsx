"use client"

import { useState, useRef } from "react"
import { VehicleFilters } from "@/components/vehicle-filters"
import { VehicleGrid } from "@/components/vehicle-grid"
import { VehiclePagination } from "@/components/vehicle-pagination"
import { ScrollAnimation } from "@/components/scroll-animation"
import type { Vehicle } from "@/lib/data"

type VehicleClientPageProps = {
  initialVehicles: Vehicle[]
  initialPage: number
  initialCategory?: string
}

export function VehicleClientPage({ initialVehicles, initialPage, initialCategory }: VehicleClientPageProps) {
  // State pre filtrované vozidlá a aktuálnu stránku
  const [filteredVehicles, setFilteredVehicles] = useState<Vehicle[]>(initialVehicles)
  const [currentPage, setCurrentPage] = useState(initialPage)

  // Použitie ref na sledovanie, či sa stránka zmenila
  const pageChangeRef = useRef(false)

  // Spracovanie zmeny filtrov
  const handleFilterChange = (filteredResults: Vehicle[]) => {
    setFilteredVehicles(filteredResults)
    if (currentPage !== 1) {
      setCurrentPage(1) // Reset na prvú stránku pri zmene filtrov
    }
  }

  // Spracovanie zmeny stránky
  const handlePageChange = (page: number) => {
    if (page === currentPage) return

    setCurrentPage(page)

    // Scroll na vrch
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  // Spracovanie resetu filtrov
  const handleFilterReset = () => {
    // Reset na pôvodné vozidlá podľa kategórie
    setFilteredVehicles(initialVehicles)
    setCurrentPage(1)
  }

  return (
    <div className="container mx-auto px-4 py-8 md:py-12 lg:px-8">
      <div className="mt-8 grid gap-8 lg:grid-cols-4">
        <ScrollAnimation type="slide-in-left" delay={400} className="lg:col-span-1">
          <VehicleFilters
            initialVehicles={initialVehicles}
            onFilterChange={handleFilterChange}
            onReset={handleFilterReset}
          />
        </ScrollAnimation>
        <div className="lg:col-span-3">
          <ScrollAnimation type="slide-in-right" delay={500}>
            <VehicleGrid vehicles={filteredVehicles} currentPage={currentPage} />
          </ScrollAnimation>
          <ScrollAnimation type="fade-in" delay={800} className="mt-8">
            <VehiclePagination
              currentPage={currentPage}
              totalItems={filteredVehicles.length}
              onPageChange={handlePageChange}
            />
          </ScrollAnimation>
        </div>
      </div>
    </div>
  )
}
