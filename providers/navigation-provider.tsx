"use client"

import { createContext, useContext, useState, type ReactNode, useEffect, Suspense } from "react"
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

// Separate component that uses useSearchParams to avoid the error
function NavigationStateManager({
  children,
  onNavigationComplete,
}: {
  children: ReactNode
  onNavigationComplete: () => void
}) {
  const pathname = usePathname()
  const [prevPathname, setPrevPathname] = useState("")

  // Handle navigation between pages
  useEffect(() => {
    // Skip the first render
    if (prevPathname === "") {
      setPrevPathname(pathname)
      onNavigationComplete()
      return
    }

    // Check if the path changed
    if (prevPathname !== pathname) {
      setPrevPathname(pathname)
      // We don't show loading on navigation anymore
      onNavigationComplete()
    }
  }, [pathname, prevPathname, onNavigationComplete])

  return <>{children}</>
}

export function NavigationProvider({ children }: { children: ReactNode }) {
  const [isNavigating, setIsNavigating] = useState(true)
  const pathname = usePathname()

  // Only show loading on the homepage (root path)
  const isHomepage = pathname === "/"

  // Handle initial page load
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsNavigating(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  const handleNavigationComplete = () => {
    setIsNavigating(false)
  }

  return (
    <NavigationContext.Provider value={{ isNavigating }}>
      <Suspense fallback={null}>
        <NavigationStateManager onNavigationComplete={handleNavigationComplete}>{children}</NavigationStateManager>
      </Suspense>
      {isNavigating && isHomepage && <Loading />}
    </NavigationContext.Provider>
  )
}

