"use client"

import { Button } from "@/components/ui/button"
import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { vehicles } from "@/lib/data"

export function CarGallery({ vehicleId }: { vehicleId?: number }) {
  const [activeIndex, setActiveIndex] = useState(0)

  // Find the vehicle or use a default set of images
  const vehicle = vehicleId ? vehicles.find((v) => v.id === vehicleId) : null
  const images = vehicle ? [vehicle.image] : vehicles.slice(0, 6).map((v) => v.image)

  const goToPrevious = () => {
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className="space-y-4">
      <div className="relative overflow-hidden rounded-lg bg-muted">
        <div className="relative h-64 sm:h-80 md:h-96 w-full">
          <Image
            src={images[activeIndex] || "/placeholder.svg"}
            alt={`Vozidlo - obrázok ${activeIndex + 1}`}
            fill
            className="object-cover"
          />
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="absolute left-2 top-1/2 h-9 w-9 -translate-y-1/2 rounded-full bg-background/80 text-foreground shadow-sm backdrop-blur-sm hover:bg-background/90"
          onClick={goToPrevious}
        >
          <ChevronLeft className="h-5 w-5" />
          <span className="sr-only">Predchádzajúci obrázok</span>
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-2 top-1/2 h-9 w-9 -translate-y-1/2 rounded-full bg-background/80 text-foreground shadow-sm backdrop-blur-sm hover:bg-background/90"
          onClick={goToNext}
        >
          <ChevronRight className="h-5 w-5" />
          <span className="sr-only">Nasledujúci obrázok</span>
        </Button>
        <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 space-x-1.5">
          {images.map((_, i) => (
            <Button
              key={i}
              variant="ghost"
              size="icon"
              className={`h-2 w-2 rounded-full p-0 ${i === activeIndex ? "bg-primary" : "bg-background/80"}`}
              onClick={() => setActiveIndex(i)}
            >
              <span className="sr-only">Obrázok {i + 1}</span>
            </Button>
          ))}
        </div>
      </div>
      <div className="overflow-auto pb-2">
        <div className="flex space-x-2">
          {images.map((src, i) => (
            <Button
              key={i}
              variant="ghost"
              className={`relative h-20 w-20 p-0 rounded-lg overflow-hidden ${
                i === activeIndex ? "ring-2 ring-primary ring-offset-2" : ""
              }`}
              onClick={() => setActiveIndex(i)}
            >
              <Image src={src || "/placeholder.svg"} alt={`Vozidlo miniatúra ${i + 1}`} fill className="object-cover" />
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}

