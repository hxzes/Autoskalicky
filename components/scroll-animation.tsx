"use client"

import type React from "react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface ScrollAnimationProps {
  children: ReactNode
  className?: string
  delay?: number
  type?: "fade-up" | "fade-in" | "slide-in-left" | "slide-in-right"
}

export function ScrollAnimation({ children, className, delay = 0, type = "fade-in" }: ScrollAnimationProps) {
  const { ref, isInView } = useScrollAnimation()

  // Definícia CSS tried pre rôzne typy animácií
  const animationClasses = {
    "fade-in": "opacity-0 transition-opacity duration-1000 ease-out",
    "fade-up": "opacity-0 translate-y-4 transition-all duration-1000 ease-out",
    "slide-in-left": "opacity-0 -translate-x-4 transition-all duration-1000 ease-out",
    "slide-in-right": "opacity-0 translate-x-4 transition-all duration-1000 ease-out",
  }

  // Definícia CSS tried pre animácie, keď sú viditeľné
  const visibleClasses = {
    "fade-in": "opacity-100",
    "fade-up": "opacity-100 translate-y-0",
    "slide-in-left": "opacity-100 translate-x-0",
    "slide-in-right": "opacity-100 translate-x-0",
  }

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={cn(className, animationClasses[type], isInView ? visibleClasses[type] : "")}
      style={delay ? { transitionDelay: `${delay}ms` } : {}}
    >
      {children}
    </div>
  )
}
