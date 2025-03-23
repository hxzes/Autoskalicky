import { Button } from "@/components/ui/button"
import { CarDetails } from "@/components/car-details"
import { CarGallery } from "@/components/car-gallery"
import { CarSpecifications } from "@/components/car-specifications"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Share2, Heart, Phone } from "lucide-react"
import Link from "next/link"
import { vehicles } from "@/lib/data"
import { notFound } from "next/navigation"
import { companyInfo } from "@/lib/data"

export default function VehicleDetailPage({ params }: { params: { id: string } }) {
  const vehicleId = Number.parseInt(params.id)
  const vehicle = vehicles.find((v) => v.id === vehicleId)

  if (!vehicle) {
    notFound()
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
              <Button variant="outline" size="icon">
                <Heart className="h-4 w-4" />
                <span className="sr-only">Pridať do obľúbených</span>
              </Button>
              <Button variant="outline" size="icon">
                <Share2 className="h-4 w-4" />
                <span className="sr-only">Zdieľať</span>
              </Button>
            </div>
          </div>
          <div className="mt-6 grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <CarGallery vehicleId={vehicleId} />
              <div className="mt-8">
                <Tabs defaultValue="details">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="details">Detaily</TabsTrigger>
                    <TabsTrigger value="specs">Špecifikácie</TabsTrigger>
                    <TabsTrigger value="equipment">Výbava</TabsTrigger>
                  </TabsList>
                  <TabsContent value="details" className="mt-4">
                    <CarDetails />
                  </TabsContent>
                  <TabsContent value="specs" className="mt-4">
                    <CarSpecifications />
                  </TabsContent>
                  <TabsContent value="equipment" className="mt-4">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                      <div className="rounded-lg border p-4">
                        <h3 className="font-medium">Bezpečnosť</h3>
                        <ul className="mt-2 text-sm text-muted-foreground">
                          <li>ABS</li>
                          <li>ESP</li>
                          <li>Airbagy</li>
                          <li>Alarm</li>
                          <li>Centrálne zamykanie</li>
                        </ul>
                      </div>
                      <div className="rounded-lg border p-4">
                        <h3 className="font-medium">Komfort</h3>
                        <ul className="mt-2 text-sm text-muted-foreground">
                          <li>Automatická klimatizácia</li>
                          <li>Elektrické sedadlá</li>
                          <li>Vyhrievané sedadlá</li>
                          <li>Handsfree</li>
                          <li>Tempomat</li>
                        </ul>
                      </div>
                      <div className="rounded-lg border p-4">
                        <h3 className="font-medium">Multimédiá</h3>
                        <ul className="mt-2 text-sm text-muted-foreground">
                          <li>Navigácia</li>
                          <li>Bluetooth</li>
                          <li>USB</li>
                          <li>Soundsystem</li>
                          <li>Apple CarPlay/Android Auto</li>
                        </ul>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
            <div className="rounded-lg border p-6 shadow-sm">
              <h1 className="text-2xl font-bold">{vehicle.title}</h1>
              {vehicle.subtitle && <p className="text-lg text-muted-foreground">{vehicle.subtitle}</p>}
              <div className="mt-4 flex items-baseline">
                <span className="text-3xl font-bold">{vehicle.price.withVat.toLocaleString("sk")} €</span>
                <span className="ml-2 text-sm text-muted-foreground">s DPH</span>
              </div>
              {vehicle.price.withoutVat && (
                <div className="mt-1 text-sm text-muted-foreground">
                  {vehicle.price.withoutVat.toLocaleString("sk")} € bez DPH
                </div>
              )}
              <div className="mt-6 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  {vehicle.year > 0 && (
                    <div>
                      <p className="text-sm text-muted-foreground">Rok výroby</p>
                      <p className="font-medium">{vehicle.year}</p>
                    </div>
                  )}
                  {vehicle.mileage > 0 && (
                    <div>
                      <p className="text-sm text-muted-foreground">Stav tachometra</p>
                      <p className="font-medium">{vehicle.mileage.toLocaleString("sk")} km</p>
                    </div>
                  )}
                  <div>
                    <p className="text-sm text-muted-foreground">Palivo</p>
                    <p className="font-medium">{vehicle.fuel}</p>
                  </div>
                  {vehicle.transmission && (
                    <div>
                      <p className="text-sm text-muted-foreground">Prevodovka</p>
                      <p className="font-medium">{vehicle.transmission}</p>
                    </div>
                  )}
                  <div>
                    <p className="text-sm text-muted-foreground">Výkon</p>
                    <p className="font-medium">
                      {vehicle.power.kw} kW ({vehicle.power.ps} PS)
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Dátum pridania</p>
                    <p className="font-medium">{vehicle.date}</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 space-y-3">
                <Button asChild className="w-full">
                  <Link href="/kontakt">Dohodnite si stretnutie</Link>
                </Button>
                <Button asChild variant="outline" className="w-full gap-2">
                  <a href={`tel:${companyInfo.contact.phone.sales}`}>
                    <Phone className="h-4 w-4" />
                    {companyInfo.contact.phone.sales}
                  </a>
                </Button>
                <div className="rounded-lg bg-muted p-4 text-center">
                  <p className="text-sm font-medium">Máte záujem o toto vozidlo?</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Kontaktujte nás telefonicky alebo nás navštívte osobne v našom autosalóne.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

