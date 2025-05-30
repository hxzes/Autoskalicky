"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronRight, Loader2, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

export function FeaturedAutobazar() {
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
    setError("Nepodarilo sa načítať zoznam vozidiel.")
  }

  return (
    <div className="mt-16">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold md:text-3xl">Najnovšie vozidlá</h2>
        <a
          href={autobazarWebUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline flex items-center"
        >
          Zobraziť všetky
          <ChevronRight className="ml-1 h-4 w-4" />
        </a>
      </div>
      <div className="mt-6">
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Aktuálna ponuka vozidiel</CardTitle>
            <CardDescription>Priamo z Autobazar.sk</CardDescription>
          </CardHeader>
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
                height={isMobile ? 400 : 600}
                style={{
                  border: "none",
                  display: isLoading ? "none" : "block",
                  maxWidth: "100%",
                  overflow: "visible",
                  WebkitOverflowScrolling: "touch", // Lepšie scrollovanie na iOS
                }}
                onLoad={handleIframeLoad}
                onError={handleIframeError}
                title="Autobazar.sk - Auto Skalický - Najnovšie vozidlá"
                sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                scrolling="yes"
              />

              {/* Pridáme informačný panel na spodok iframe */}
              <div className="absolute bottom-0 left-0 right-0 bg-background/90 backdrop-blur-sm p-2 sm:p-4 border-t flex flex-col sm:flex-row justify-between items-center gap-2">
                <p className="text-xs sm:text-sm text-center sm:text-left">
                  Pre zobrazenie všetkých vozidiel kliknite na tlačidlo "Otvoriť na Autobazar".
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
      </div>
    </div>
  )
}
