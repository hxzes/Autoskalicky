import { Button } from "@/components/ui/button"
import { CheckCircle, CreditCard, Shield } from "lucide-react"
import Link from "next/link"
import { financingInfo } from "@/lib/data"

export function FinancingSection() {
  return (
    <div className="mt-16">
      <div className="rounded-xl bg-background shadow-sm border overflow-hidden">
        <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{financingInfo.title}</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">{financingInfo.subtitle}</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
            {/* Financing Card */}
            <div className="bg-muted/20 rounded-xl shadow-sm border p-6 hover:shadow-md transition-shadow flex flex-col h-full">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <CreditCard className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">FINANCOVANIE</h3>
              <p className="text-muted-foreground mb-4">AUTO-ÚVER NA OSOBNÉ, SUV A ÚŽITKOVÉ VOZIDLÁ DO 3.5 TONY</p>
              <ul className="space-y-3 mb-6">
                {financingInfo.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-primary shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto">
                <Button asChild className="w-full">
                  <Link href="/financovanie">Viac o financovaní</Link>
                </Button>
              </div>
            </div>

            {/* Insurance Card */}
            <div className="bg-muted/20 rounded-xl shadow-sm border p-6 hover:shadow-md transition-shadow flex flex-col h-full">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">POISTENIE</h3>
              <p className="text-muted-foreground mb-4">
                PONUKA POISTENIA ZÁKONNÉ A HAVARIJNÉ NA POČKANIE NA VÝBER Z 15 POISŤOVNÍ.
              </p>
              <p className="text-muted-foreground mb-6">{financingInfo.callToAction}</p>
              <div className="mt-auto">
                <Button asChild className="w-full">
                  <Link href="/financovanie#poistenie">Viac o poistení</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

