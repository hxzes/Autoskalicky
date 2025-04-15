"use client"

import { useState, useCallback } from "react"
import { VehicleFilters, type VehicleFilters as VehicleFiltersType } from "@/components/vehicle-filters"
import { VehicleGrid } from "@/components/vehicle-grid"
import { VehiclePagination } from "@/components/vehicle-pagination"
import { ScrollAnimation } from "@/components/scroll-animation"

type VehiclePageContentProps = {
  initialCategory?: string
  initialPage?: number
}

export function VehiclePageContent({ initialCategory, initialPage = 1 }: VehiclePageContentProps) {
  // Initialize filters based on initialCategory
  const initialFilters = initialCategory
    ? {
        brands: [],
        categories: getCategoriesFromParam(initialCategory),
        fuels: [],
        transmissions: [],
        priceRange: [0, 100000],
        yearRange: [2000, 2025],
        kmRange: [0, 300000],
      }
    : undefined

  const [filters, setFilters] = useState<VehicleFiltersType | undefined>(initialFilters)
  const [currentPage, setCurrentPage] = useState(initialPage)

  // Helper function to convert category param to filter categories
  function getCategoriesFromParam(category: string): string[] {
    const categoryMapping: Record<string, string[]> = {
      osobne: ["Sedan", "Hatchback"],
      suv: ["SUV"],
      kombi: ["Kombi"],
    }
    return categoryMapping[category] || []
  }

  // Handle page change
  const handlePageChange = useCallback((page: number) => {
    setCurrentPage(page)
    // Scroll to top
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [])

  // Handle filter changes
  const handleFiltersChange = useCallback((newFilters: VehicleFiltersType) => {
    setFilters(newFilters)
    setCurrentPage(1) // Reset to first page when filters change
  }, [])

  // Handle filter reset
  const handleResetFilters = useCallback(() => {
    setFilters(undefined)
    setCurrentPage(1) // Reset to first page when filters are reset
    // Instead of router.refresh(), we'll just reset the state
    window.history.pushState({}, "", window.location.pathname)
  }, [])

  return (
    <div className="container mx-auto px-4 py-8 md:py-12 lg:px-8">
      <div className="mt-8 grid gap-8 lg:grid-cols-4">
        <ScrollAnimation type="slide-in-left" delay={400} className="lg:col-span-1">
          <VehicleFilters onFiltersChange={handleFiltersChange} onReset={handleResetFilters} initialFilters={filters} />
        </ScrollAnimation>
        <div className="lg:col-span-3">
          <ScrollAnimation type="slide-in-right" delay={500}>
            <VehicleGrid filters={filters} currentPage={currentPage} />
          </ScrollAnimation>
          <ScrollAnimation type="fade-in" delay={800} className="mt-8">
            <VehiclePagination currentPage={currentPage} onPageChange={handlePageChange} />
          </ScrollAnimation>
        </div>
      </div>
    </div>
  )
}
