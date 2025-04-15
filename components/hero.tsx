import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Hero() {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 backdrop-blur-sm z-10" />
      <div className="relative h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/audi-rs5-green-orjsi0e51dyh3c0b.jpg-9cl83dElrHEeqEkpekZKAHXKG1aQzw.jpeg"
          alt="Auto Skalický - Prémiové vozidlá"
          fill
          className="object-cover animate-fade-in"
          priority
        />
      </div>
      <div className="absolute inset-0 z-20 flex flex-col justify-center">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-lg">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl animate-fade-up">
              AUTO SKALICKÝ
            </h1>
            <p className="mt-4 text-lg text-white/90 md:text-xl animate-fade-up" style={{ animationDelay: "200ms" }}>
              Vaša bezpečnosť je naša prvá a hlavná priorita. Ponúkame kvalitné vozidlá s kompletnou servisnou
              históriou.
            </p>
            <div className="mt-8 flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Button asChild size="lg" className="gap-2 animate-fade-up" style={{ animationDelay: "400ms" }}>
                <Link href="/vozidla">
                  Prehliadať vozidlá
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-white/10 text-white border-white/20 hover:bg-white/20 hover:text-primary gap-2 animate-fade-up"
                style={{ animationDelay: "600ms" }}
              >
                <Link href="/kontakt">Kontaktujte nás</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
