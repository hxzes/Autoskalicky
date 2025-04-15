"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, X } from "lucide-react"

export function CarGallery({ images = [] }: { images?: string[] }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)

  // If no images, show placeholder
  if (images.length === 0) {
    return (
      <div className="relative overflow-hidden rounded-lg bg-muted">
        <div className="relative h-72 sm:h-96 md:h-[500px] w-full bg-black/5">
          <Image src="/placeholder.svg" alt="Vozidlo - obrázok nie je k dispozícii" fill className="object-cover" />
        </div>
      </div>
    )
  }

  const handlePrevious = (e: React.MouseEvent) => {
    e.stopPropagation()
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation()
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  const handleThumbnailClick = (index: number) => {
    setActiveIndex(index)
  }

  const handleImageClick = () => {
    setIsLightboxOpen(true)
  }

  const handleCloseLightbox = () => {
    setIsLightboxOpen(false)
  }

  // Main gallery component
  return (
    <>
      <div className="space-y-4">
        {/* Main image */}
        <div className="relative overflow-hidden rounded-lg bg-muted">
          <div
            className="relative h-72 sm:h-96 md:h-[500px] w-full bg-black/5 cursor-zoom-in"
            onClick={handleImageClick}
          >
            <Image
              src={images[activeIndex] || "/placeholder.svg"}
              alt={`Vozidlo - obrázok ${activeIndex + 1}`}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 800px"
              priority
            />
          </div>

          {/* Hint text */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/60 text-white px-3 py-1 rounded-full text-xs">
            Kliknite pre zväčšenie
          </div>

          {/* Navigation buttons */}
          {images.length > 1 && (
            <>
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-2 top-1/2 h-9 w-9 -translate-y-1/2 rounded-full bg-background/80 text-foreground shadow-sm backdrop-blur-sm hover:bg-background/90"
                onClick={handlePrevious}
              >
                <ChevronLeft className="h-5 w-5" />
                <span className="sr-only">Predchádzajúci obrázok</span>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-2 top-1/2 h-9 w-9 -translate-y-1/2 rounded-full bg-background/80 text-foreground shadow-sm backdrop-blur-sm hover:bg-background/90"
                onClick={handleNext}
              >
                <ChevronRight className="h-5 w-5" />
                <span className="sr-only">Nasledujúci obrázok</span>
              </Button>
            </>
          )}

          {/* Dots indicator */}
          {images.length > 1 && (
            <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 space-x-1.5">
              {images.map((_, i) => (
                <Button
                  key={i}
                  variant="ghost"
                  size="icon"
                  className={`h-2 w-2 rounded-full p-0 ${i === activeIndex ? "bg-primary" : "bg-background/80"}`}
                  onClick={(e) => {
                    e.stopPropagation()
                    setActiveIndex(i)
                  }}
                >
                  <span className="sr-only">Obrázok {i + 1}</span>
                </Button>
              ))}
            </div>
          )}
        </div>

        {/* Thumbnails */}
        {images.length > 1 && (
          <div className="overflow-auto pb-2">
            <div className="flex space-x-2">
              {images.map((src, i) => (
                <Button
                  key={i}
                  variant="ghost"
                  className={`relative h-20 w-20 p-0 rounded-lg overflow-hidden ${
                    i === activeIndex ? "ring-2 ring-primary ring-offset-2" : ""
                  }`}
                  onClick={() => handleThumbnailClick(i)}
                >
                  <Image
                    src={src || "/placeholder.svg"}
                    alt={`Vozidlo miniatúra ${i + 1}`}
                    fill
                    className="object-cover"
                    sizes="80px"
                  />
                </Button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Lightbox - separate from main component */}
      {isLightboxOpen && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center" onClick={handleCloseLightbox}>
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 bg-black/20 hover:bg-black/40 text-white"
            onClick={handleCloseLightbox}
          >
            <X className="h-6 w-6" />
            <span className="sr-only">Zavrieť</span>
          </Button>

          <div className="relative w-[90vw] h-[90vh]">
            <Image
              src={images[activeIndex] || "/placeholder.svg"}
              alt={`Vozidlo - obrázok ${activeIndex + 1} (zväčšený)`}
              fill
              className="object-contain"
              sizes="90vw"
              priority
            />
          </div>

          {images.length > 1 && (
            <>
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-4 top-1/2 h-12 w-12 -translate-y-1/2 rounded-full bg-black/20 text-white hover:bg-black/40"
                onClick={handlePrevious}
              >
                <ChevronLeft className="h-8 w-8" />
                <span className="sr-only">Predchádzajúci obrázok</span>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-1/2 h-12 w-12 -translate-y-1/2 rounded-full bg-black/20 text-white hover:bg-black/40"
                onClick={handleNext}
              >
                <ChevronRight className="h-8 w-8" />
                <span className="sr-only">Nasledujúci obrázok</span>
              </Button>
            </>
          )}
        </div>
      )}
    </>
  )
}
