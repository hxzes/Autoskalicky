"use client"

import { useEffect, useRef, useState } from "react"

export function useScrollAnimation(options = {}) {
  const ref = useRef<HTMLElement>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const currentRef = ref.current
    if (!currentRef) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Aktualizácia stavu, keď element vstúpi do viewportu
        if (entry.isIntersecting) {
          setIsInView(true)
          // Keď sa animácia spustí, môžeme prestať pozorovať
          observer.unobserve(currentRef)
        }
      },
      {
        root: null, // viewport
        rootMargin: "0px",
        threshold: 0.1, // Spustenie, keď je aspoň 10% elementu viditeľných
        ...options,
      },
    )

    observer.observe(currentRef)

    return () => {
      observer.unobserve(currentRef)
    }
  }, [options])

  return { ref, isInView }
}
