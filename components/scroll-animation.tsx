"use client"

import type React from "react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface ScrollAnimationProps {
  children: ReactNode
  className?: string
  delay?: number
}

export function ScrollAnimation({ children, className, delay = 0 }: ScrollAnimationProps) {
  const { ref, isInView } = useScrollAnimation()

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={cn(className, "transition-opacity duration-1000 ease-out", isInView ? "opacity-100" : "opacity-0")}
      style={delay ? { transitionDelay: `${delay}ms` } : {}}
    >
      {children}
    </div>
  )
}

