"use client"

import { createContext, useContext, useState, type ReactNode, useEffect } from "react"
import { usePathname } from "next/navigation"
import Loading from "@/app/loading"

interface NavigationContextType {
  isNavigating: boolean
}

const NavigationContext = createContext<NavigationContextType>({
  isNavigating: false,
})

export function useNavigation() {
  return useContext(NavigationContext)
}

export function NavigationProvider({ children }: { children: ReactNode }) {
  const [isNavigating, setIsNavigating] = useState(true)
  const [prevPathname, setPrevPathname] = useState("")
  const pathname = usePathname()

  // Len zobraziť načítavanie na domovskej stránke (root path)
  const isHomepage = pathname === "/"

  // Spracovanie počiatočného načítania stránky
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsNavigating(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  // Spracovanie navigácie medzi stránkami
  useEffect(() => {
    // Preskočiť prvé renderovanie
    if (prevPathname === "") {
      setPrevPathname(pathname)
      return
    }

    // Kontrola, či sa zmenila cesta
    if (prevPathname !== pathname) {
      setPrevPathname(pathname)
      // Nezobrazujeme načítavanie pri navigácii
    }
  }, [pathname, prevPathname])

  return (
    <NavigationContext.Provider value={{ isNavigating }}>
      {children}
      {isNavigating && isHomepage && <Loading />}
    </NavigationContext.Provider>
  )
}
