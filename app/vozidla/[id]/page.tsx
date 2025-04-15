"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { ArrowLeft, Phone, ExternalLink } from "lucide-react"
import Link from "next/link"
import { companyInfo } from "@/lib/data"
import { Loader2 } from "lucide-react"

export default function VehicleDetailPage({ params }: { params: { id: string } }) {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Použijeme API endpoint pre detail vozidla
  const vehicleUrl = `https://www.autobazar.sk/api/inzerat/${params.id}/`
  const standardUrl = `https://www.autobazar.sk/inzerat/${params.id}/`

  // Funkcia na kontrolu načítania iframe
  const handleIframeLoad = () => {
    setIsLoading(false)
  }

  // Funkcia na kontrolu chyby načítania iframe
  const handleIframeError = () => {
    setIsLoading(false)
    setError("Nepodarilo sa načítať detail vozidla. Vozidlo možno už nie je v ponuke.")
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8 md:py-12 lg:px-8">
          <div className="flex items-center justify-between">
            <Link href="/vozidla" className="flex items-center text-muted-foreground hover:text-foreground">
              <ArrowLeft className="mr-2 h-4 w-4" />
              <span>Späť na výpis vozidiel</span>
            </Link>
            <div className="flex space-x-2">
              <Button asChild variant="outline" size="sm" className="gap-1">
                <a href={standardUrl} target="_blank" rel="noopener noreferrer">
                  Otvoriť na Autobazar
                  <ExternalLink className="h-3 w-3 ml-1" />
                </a>
              </Button>
            </div>
          </div>

          <div className="mt-6">
            {isLoading && (
              <div className="flex items-center justify-center p-12">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
                <span className="ml-2">Načítavam detail vozidla...</span>
              </div>
            )}

            {error && (
              <div className="p-12 text-center">
                <p className="text-red-500 mb-4">{error}</p>
                <div className="flex justify-center gap-4">
                  <Button asChild>
                    <Link href="/vozidla">Späť na zoznam vozidiel</Link>
                  </Button>
                  <Button asChild variant="outline">
                    <a href={standardUrl} target="_blank" rel="noopener noreferrer">
                      Skúsiť otvoriť na Autobazar
                    </a>
                  </Button>
                </div>
              </div>
            )}

            <div className="relative">
              <iframe
                src={vehicleUrl}
                width="100%"
                height={1200}
                style={{ border: "none", display: isLoading ? "none" : "block" }}
                onLoad={handleIframeLoad}
                onError={handleIframeError}
                title="Detail vozidla"
                sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-top-navigation"
              />
            </div>
          </div>

          <div className="mt-8 flex justify-center">
            <Button asChild className="mr-4">
              <Link href="/kontakt">Dohodnite si stretnutie</Link>
            </Button>
            <Button asChild variant="outline" className="gap-2">
              <a href={`tel:${companyInfo.contact.phone.sales}`}>
                <Phone className="h-4 w-4" />
                {companyInfo.contact.phone.sales}
              </a>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
