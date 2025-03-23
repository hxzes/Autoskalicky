"use client"

import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { Search } from "@/components/search"
import { VehicleFilters, type VehicleFilters as VehicleFiltersType } from "@/components/vehicle-filters"
import { VehicleGrid } from "@/components/vehicle-grid"
import { VehiclePagination } from "@/components/vehicle-pagination"
import { useState, useCallback } from "react"
import { ScrollAnimation } from "@/components/scroll-animation"

export default function VehiclesPage() {
  const [filters, setFilters] = useState<VehicleFiltersType | undefined>(undefined)

  // Use useCallback to prevent unnecessary re-renders
  const handleFiltersChange = useCallback((newFilters: VehicleFiltersType) => {
    setFilters(newFilters)
  }, [])

  const handleResetFilters = useCallback(() => {
    setFilters(undefined)
  }, [])

  return (
    <div className="flex min-h-screen flex-col animate-fade-in">
      <Header />
      <main className="flex-1">
        <div className="bg-muted py-12 animate-fade-in">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl animate-fade-up">
                Naša ponuka vozidiel
              </h1>
              <p className="mt-4 text-muted-foreground animate-fade-up" style={{ animationDelay: "200ms" }}>
                Prehliadnite si našu širokú ponuku kvalitných vozidiel z Nemecka s kompletnou servisnou históriou.
              </p>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 py-8 md:py-12 lg:px-8">
          <ScrollAnimation type="fade-in" delay={300}>
            <Search />
          </ScrollAnimation>
          <div className="mt-8 grid gap-8 lg:grid-cols-4">
            <ScrollAnimation type="slide-in-left" delay={400} className="lg:col-span-1">
              <VehicleFilters onFiltersChange={handleFiltersChange} onReset={handleResetFilters} />
            </ScrollAnimation>
            <div className="lg:col-span-3">
              <ScrollAnimation type="slide-in-right" delay={500}>
                <VehicleGrid filters={filters} />
              </ScrollAnimation>
              <ScrollAnimation type="fade-in" delay={800} className="mt-8">
                <VehiclePagination />
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

