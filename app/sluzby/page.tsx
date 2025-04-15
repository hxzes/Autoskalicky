"use client"

import { Button } from "@/components/ui/button"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Wrench, CreditCard, Shield, Car, RefreshCw } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { ScrollAnimation } from "@/components/scroll-animation"

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col animate-fade-in">
      <Header />
      <main className="flex-1">
        <div className="bg-muted py-12">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center animate-fade-up">
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Naše služby</h1>
              <p className="mt-4 text-muted-foreground">
                Ponúkame komplexné služby v oblasti predaja a servisu vozidiel.
              </p>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: <Car className="h-5 w-5 text-primary" />,
                title: "Predaj vozidiel",
                description: "Široká ponuka kvalitných vozidiel z Nemecka s kompletnou servisnou históriou.",
                items: [
                  "Osobné, úžitkové a luxusné vozidlá",
                  "Preverená história vozidiel",
                  "Skúšobné jazdy",
                  "Kompletná dokumentácia",
                ],
                link: "/vozidla",
                linkText: "Prehliadať vozidlá",
                delay: 100,
              },
              {
                icon: <Wrench className="h-5 w-5 text-primary" />,
                title: "Servis vozidiel",
                description: "Profesionálny servis a údržba vozidiel všetkých značiek.",
                items: [
                  "Pravidelné servisné prehliadky",
                  "Diagnostika vozidiel",
                  "Mechanické opravy",
                  "Výmena oleja a filtrov",
                ],
                link: "/kontakt",
                linkText: "Objednať servis",
                delay: 200,
              },
              {
                icon: <CreditCard className="h-5 w-5 text-primary" />,
                title: "Financovanie a poistenie",
                description: "Pomôžeme vám s financovaním a poistením vášho vozidla.",
                items: ["Úverové financovanie", "Operatívny leasing", "PZP a havarijné poistenie", "GAP poistenie"],
                link: "/financovanie",
                linkText: "Viac informácií",
                delay: 300,
              },
              {
                icon: <RefreshCw className="h-5 w-5 text-primary" />,
                title: "Výkup vozidiel",
                description: "Vykúpime vaše vozidlo za férovú cenu.",
                items: [
                  "Rýchly a jednoduchý proces",
                  "Ocenenie vozidla na mieste",
                  "Okamžitá platba",
                  "Vybavenie všetkých formalít",
                ],
                link: "/vykup-vozidiel",
                linkText: "Viac informácií",
                delay: 400,
              },
              {
                icon: <Shield className="h-5 w-5 text-primary" />,
                title: "Zákonné a havarijné poistenie",
                description: "Poistenie vozidla na mieru podľa vašich potrieb.",
                items: [
                  "Zákonné poistenie (PZP)",
                  "Havarijné poistenie (KASKO)",
                  "Poistenie čelného skla",
                  "Asistenčné služby",
                ],
                link: "/poistenie",
                linkText: "Viac informácií",
                delay: 500,
              },
              {
                icon: <Car className="h-5 w-5 text-primary" />,
                title: "Prenájom vozidiel",
                description: "Krátkodobý aj dlhodobý prenájom vozidiel.",
                items: [
                  "Osobné a úžitkové vozidlá",
                  "Flexibilná doba prenájmu",
                  "Neobmedzený počet kilometrov",
                  "Kompletné poistenie",
                ],
                link: "/prenajom",
                linkText: "Viac informácií",
                delay: 600,
              },
            ].map((service, index) => (
              <ScrollAnimation key={index} type="fade-up" delay={service.delay} className="h-full">
                <Card className="h-full">
                  <CardHeader>
                    <div className="mb-2 rounded-full bg-primary/10 p-2 w-10 h-10 flex items-center justify-center">
                      {service.icon}
                    </div>
                    <CardTitle>{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.items.map((item, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full">
                      <Link href={service.link}>{service.linkText}</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </ScrollAnimation>
            ))}
          </div>

          <ScrollAnimation type="fade-in" delay={700} className="mt-16">
            <div className="rounded-lg bg-muted p-8">
              <div className="grid gap-8 lg:grid-cols-2">
                <ScrollAnimation type="slide-in-left" delay={800}>
                  <h2 className="text-2xl font-bold">Prečo si vybrať naše služby?</h2>
                  <p className="mt-2 text-muted-foreground">
                    V automobilovom priemysle pôsobíme už viac ako 13 rokov a môžeme sa obhliadnuť za veľkým počtom
                    spokojných zákazníkov. Ako predajca ojazdených vozidiel sa špecializujeme hlavne na dobre udržiavané
                    vozidlá predovšetkým z Nemecka. Všetky vozidlá s kompletnou servisnou históriou.
                  </p>
                  <ul className="mt-6 space-y-4">
                    <li className="flex items-start">
                      <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                      <div>
                        <h3 className="font-medium">Kvalitné vozidlá s históriou</h3>
                        <p className="text-sm text-muted-foreground">
                          Ponúkame len preverené vozidlá s jasnou históriou a servisnými záznamami.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                      <div>
                        <h3 className="font-medium">Profesionálny prístup</h3>
                        <p className="text-sm text-muted-foreground">
                          Náš tím profesionálov je pripravený poskytnúť vám komplexné služby a poradenstvo.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                      <div>
                        <h3 className="font-medium">Transparentné podmienky</h3>
                        <p className="text-sm text-muted-foreground">
                          Všetky informácie o vozidle a podmienkach predaja sú jasné a prehľadné.
                        </p>
                      </div>
                    </li>
                  </ul>
                  <div className="mt-8">
                    <Button asChild>
                      <Link href="/kontakt">Kontaktujte nás</Link>
                    </Button>
                  </div>
                </ScrollAnimation>
                <ScrollAnimation
                  type="slide-in-right"
                  delay={900}
                  className="relative min-h-[300px] overflow-hidden rounded-lg flex items-center justify-center bg-white/10 p-8"
                >
                  <Image
                    src="/images/logo.png"
                    alt="Auto Skalický"
                    width={300}
                    height={300}
                    className="object-contain"
                  />
                </ScrollAnimation>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </main>
      <Footer />
    </div>
  )
}
