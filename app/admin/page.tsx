import { ImportVehicles } from "@/components/admin/import-vehicles"
import { SaveVehicles } from "@/components/admin/save-vehicles"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
// Import the new debug component
import { ScraperDebug } from "@/components/admin/scraper-debug"

// Add the ScraperDebug component after the existing components
export default function AdminPage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Administrácia</h1>

      <div className="grid gap-6 md:grid-cols-2">
        <ImportVehicles />

        <SaveVehicles />

        <Card>
          <CardHeader>
            <CardTitle>Automatická synchronizácia</CardTitle>
            <CardDescription>Nastavte automatickú synchronizáciu vozidiel z Autobazar.sk</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <span>Automatická synchronizácia</span>
              <span className="text-green-600 font-medium">Aktívna</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Frekvencia synchronizácie</span>
              <span>Každých 6 hodín</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Posledná synchronizácia</span>
              <span>24.3.2025, 15:30</span>
            </div>
            <Button variant="outline" className="w-full">
              Upraviť nastavenia
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Add the scraper debug component */}
      <ScraperDebug />

      <div className="mt-6">
        <Button asChild variant="outline">
          <Link href="/">Späť na hlavnú stránku</Link>
        </Button>
      </div>
    </div>
  )
}
