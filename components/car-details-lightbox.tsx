"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

interface CarDetailsLightboxProps {
  images: string[]
  initialIndex?: number
  onClose: () => void
}

export function CarDetailsLightbox({ images, initialIndex = 0, onClose }: CarDetailsLightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex)

  const handlePrevious = (e: React.MouseEvent) => {
    e.stopPropagation()
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation()
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center" onClick={onClose}>
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-4 right-4 bg-black/20 hover:bg-black/40 text-white"
        onClick={onClose}
      >
        <X className="h-6 w-6" />
        <span className="sr-only">Zavrieť</span>
      </Button>

      <div className="relative w-[90vw] h-[90vh]">
        <Image
          src={images[currentIndex] || "/placeholder.svg"}
          alt={`Vozidlo - obrázok ${currentIndex + 1} (zväčšený)`}
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
  )
}
