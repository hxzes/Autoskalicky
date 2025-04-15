"use client"

import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

type VehiclePaginationProps = {
  currentPage: number
  totalItems: number
  onPageChange: (page: number) => void
}

export function VehiclePagination({ currentPage, totalItems, onPageChange }: VehiclePaginationProps) {
  const itemsPerPage = 6
  const totalPages = Math.ceil(totalItems / itemsPerPage)

  // Ak je len jedna stránka alebo žiadne položky, nezobrazujeme stránkovanie
  if (totalPages <= 1) {
    return null
  }

  return (
    <div className="flex items-center justify-center space-x-2">
      <Button variant="outline" size="icon" onClick={() => onPageChange(currentPage - 1)} disabled={currentPage <= 1}>
        <ChevronLeft className="h-4 w-4" />
        <span className="sr-only">Predchádzajúca stránka</span>
      </Button>

      {Array.from({ length: totalPages }).map((_, index) => {
        const pageNumber = index + 1
        return (
          <Button
            key={pageNumber}
            variant={currentPage === pageNumber ? "default" : "outline"}
            className="h-8 w-8 p-0"
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </Button>
        )
      })}

      <Button
        variant="outline"
        size="icon"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage >= totalPages}
      >
        <ChevronRight className="h-4 w-4" />
        <span className="sr-only">Nasledujúca stránka</span>
      </Button>
    </div>
  )
}
