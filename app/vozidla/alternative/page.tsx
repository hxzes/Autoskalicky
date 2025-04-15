import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { AutobazarLinkCard } from "@/components/autobazar-link-card"

export default function VehiclesAlternativePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div className="bg-muted py-12">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Naša ponuka vozidiel</h1>
              <p className="mt-4 text-muted-foreground">
                Prehliadnite si našu širokú ponuku kvalitných vozidiel z Nemecka s kompletnou servisnou históriou.
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
          <AutobazarLinkCard />
        </div>
      </main>
      <Footer />
    </div>
  )
}
