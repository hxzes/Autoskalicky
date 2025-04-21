"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Loader2, ExternalLink } from "lucide-react"

interface AutobazarIframeProps {
  height?: number
  showHeader?: boolean
  showTitle?: boolean
  title?: string
  description?: string
}

export function AutobazarIframe({
  height = 800,
  showHeader = true,
  showTitle = true,
  title = "Naša ponuka vozidiel",
  description = "Aktuálna ponuka vozidiel",
}: AutobazarIframeProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => {
      window.removeEventListener("resize", checkMobile)
    }
  }, [])

  const dynamicHeight = isMobile ? Math.min(height, 500) : height

  // Použijeme presný API endpoint poskytnutý používateľom
  const autobazarUrl =
    "https://www.autobazar.sk/api/inzeraty/auto-skalicky-s-r-o/?p%5Bcategories%5D%5B0%5D%5B0%5D=1&p%5Border%5D=1&p%5Blimit%5D=60&p%5Bkeyword%5D=&p%5Bparam6%5D%5Bfrom%5D=&p%5Bparam6%5D%5Bto%5D=&p%5Bparam17%5D%5Bfrom%5D=&p%5Bparam17%5D%5Bto%5D=&p%5Bsend%5D=Vyh%C4%BEada%C5%A5"

  // URL pre otvorenie na autobazar.sk
  const autobazarWebUrl = "https://www.autobazar.sk/inzeraty/auto-skalicky-s-r-o/"

  // Funkcia na kontrolu načítania iframe
  const handleIframeLoad = () => {
    setIsLoading(false)
  }

  // Funkcia na kontrolu chyby načítania iframe
  const handleIframeError = () => {
    setIsLoading(false)
    setError("Nepodarilo sa načítať zoznam vozidiel. Skúste obnoviť stránku alebo navštívte priamo Autobazar.sk.")
  }

  return (
    <Card className="w-full">
      {showHeader && (
        <CardHeader>
          {showTitle && <CardTitle>{title}</CardTitle>}
          <CardDescription>{description}</CardDescription>
        </CardHeader>
      )}
      <CardContent className="p-0 overflow-hidden">
        {isLoading && (
          <div className="flex items-center justify-center p-8">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
            <span className="ml-2">Načítavam vozidlá...</span>
          </div>
        )}

        {error && (
          <div className="p-8 text-center">
            <p className="text-red-500 mb-4">{error}</p>
            <Button asChild>
              <a href={autobazarWebUrl} target="_blank" rel="noopener noreferrer">
                Zobraziť na Autobazar
              </a>
            </Button>
          </div>
        )}

        <div className="relative">
          <iframe
            src={autobazarUrl}
            width="100%"
            height={dynamicHeight}
            style={{
              border: "none",
              display: isLoading ? "none" : "block",
              maxWidth: "100%",
              overflow: "visible",
              WebkitOverflowScrolling: "touch", // Lepšie scrollovanie na iOS
            }}
            onLoad={handleIframeLoad}
            onError={handleIframeError}
            title="Autobazar.sk - Auto Skalický"
            sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
            scrolling="yes"
          />

          {/* Pridáme informačný panel na spodok iframe */}
          <div className="absolute bottom-0 left-0 right-0 bg-background/90 backdrop-blur-sm p-2 sm:p-4 border-t flex flex-col sm:flex-row justify-between items-center gap-2">
            <p className="text-xs sm:text-sm text-center sm:text-left">
              Pre zobrazenie detailu vozidla kliknite priamo na vozidlo v zozname.
            </p>
            <Button asChild size="sm" variant="outline" className="gap-1 w-full sm:w-auto">
              <a href={autobazarWebUrl} target="_blank" rel="noopener noreferrer">
                Otvoriť na Autobazar
                <ExternalLink className="h-3 w-3 ml-1" />
              </a>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
