"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { CheckCircle, CreditCard, Shield, Calculator, Percent, Clock } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"
import { ScrollAnimation } from "@/components/scroll-animation"

export default function FinancingPage() {
  const [carPrice, setCarPrice] = useState<number>(15000)
  const [downPaymentPercent, setDownPaymentPercent] = useState<number>(20)
  const [loanTerm, setLoanTerm] = useState<number>(60)
  const [interestRate, setInterestRate] = useState<number>(7.9)
  const [monthlyPayment, setMonthlyPayment] = useState<number>(0)

  // Calculate monthly payment
  useEffect(() => {
    if (carPrice && downPaymentPercent >= 0 && downPaymentPercent <= 100 && loanTerm > 0 && interestRate >= 0) {
      const downPayment = (carPrice * downPaymentPercent) / 100
      const loanAmount = carPrice - downPayment
      const monthlyInterest = interestRate / 100 / 12

      if (monthlyInterest === 0) {
        // If interest rate is 0, simple division
        setMonthlyPayment(loanAmount / loanTerm)
      } else {
        // Standard loan formula
        const x = Math.pow(1 + monthlyInterest, loanTerm)
        setMonthlyPayment((loanAmount * monthlyInterest * x) / (x - 1))
      }
    } else {
      setMonthlyPayment(0)
    }
  }, [carPrice, downPaymentPercent, loanTerm, interestRate])

  const handleCarPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number.parseFloat(e.target.value)
    if (!isNaN(value) && value >= 0) {
      setCarPrice(value)
    }
  }

  const handleDownPaymentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number.parseFloat(e.target.value)
    if (!isNaN(value) && value >= 0 && value <= 100) {
      setDownPaymentPercent(value)
    }
  }

  const handleLoanTermChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLoanTerm(Number.parseInt(e.target.value))
  }

  const handleInterestRateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number.parseFloat(e.target.value)
    if (!isNaN(value) && value >= 0) {
      setInterestRate(value)
    }
  }

  return (
    <div className="flex min-h-screen flex-col animate-fade-in">
      <Header />
      <main className="flex-1">
        {/* Updated header to match the consistent style */}
        <div className="bg-muted py-12">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center animate-fade-up">
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Financovanie a poistenie</h1>
              <p className="mt-4 text-muted-foreground">
                Vybavíme vám ten najvýhodnejší auto-úver na trhu aj na počkanie.
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            <ScrollAnimation type="slide-in-left" delay={200}>
              <h2 className="text-2xl font-bold">Financovanie vozidiel</h2>
              <p className="mt-4 text-muted-foreground">
                V Auto Skalický vám ponúkame výhodné financovanie vozidiel na splátky. Spolupracujeme s viacerými
                finančnými inštitúciami, aby sme vám mohli ponúknuť tie najlepšie podmienky na trhu.
              </p>

              <div className="mt-8 space-y-6">
                <ScrollAnimation type="fade-up" delay={300} className="flex items-start">
                  <div className="mr-4 rounded-full bg-primary/10 p-2">
                    <Percent className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Akontácia už od 0%</h3>
                    <p className="text-muted-foreground">
                      Možnosť financovania bez počiatočnej akontácie, aby ste nemuseli vynakladať veľkú sumu naraz.
                    </p>
                  </div>
                </ScrollAnimation>

                <ScrollAnimation type="fade-up" delay={400} className="flex items-start">
                  <div className="mr-4 rounded-full bg-primary/10 p-2">
                    <Calculator className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Bez skrytých poplatkov</h3>
                    <p className="text-muted-foreground">
                      Transparentné podmienky bez dodatočných skrytých poplatkov, ktoré by vás mohli prekvapiť.
                    </p>
                  </div>
                </ScrollAnimation>

                <ScrollAnimation type="fade-up" delay={500} className="flex items-start">
                  <div className="mr-4 rounded-full bg-primary/10 p-2">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Flexibilná doba splácania</h3>
                    <p className="text-muted-foreground">
                      Doba splácania až do 96 mesiacov s možnosťou predčasného splatenia bez poplatkov.
                    </p>
                  </div>
                </ScrollAnimation>
              </div>

              <ScrollAnimation type="fade-in" delay={600} className="mt-8">
                <Button asChild size="lg" className="animate-pulse-subtle">
                  <Link href="/kontakt">Požiadať o financovanie</Link>
                </Button>
              </ScrollAnimation>
            </ScrollAnimation>

            <ScrollAnimation type="slide-in-right" delay={200}>
              <h2 className="text-2xl font-bold">Poistenie vozidiel</h2>
              <p className="mt-4 text-muted-foreground">
                Ponúkame komplexné poistenie vozidiel vrátane zákonného a havarijného poistenia. Spolupracujeme s 15
                poisťovňami, aby sme vám mohli ponúknuť najvýhodnejšie podmienky.
              </p>

              <div className="mt-8 space-y-6">
                <ScrollAnimation type="fade-up" delay={300} className="flex items-start">
                  <div className="mr-4 rounded-full bg-primary/10 p-2">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Zákonné poistenie (PZP)</h3>
                    <p className="text-muted-foreground">
                      Povinné zmluvné poistenie zodpovednosti za škodu spôsobenú prevádzkou motorového vozidla.
                    </p>
                  </div>
                </ScrollAnimation>

                <ScrollAnimation type="fade-up" delay={400} className="flex items-start">
                  <div className="mr-4 rounded-full bg-primary/10 p-2">
                    <CreditCard className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Havarijné poistenie (KASKO)</h3>
                    <p className="text-muted-foreground">
                      Komplexné poistenie vozidla, ktoré kryje škody spôsobené haváriou, živelnou udalosťou, krádežou a
                      vandalizmom.
                    </p>
                  </div>
                </ScrollAnimation>

                <ScrollAnimation type="fade-up" delay={500} className="flex items-start">
                  <div className="mr-4 rounded-full bg-primary/10 p-2">
                    <CheckCircle className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Výber z 15 poisťovní</h3>
                    <p className="text-muted-foreground">
                      Porovnáme ponuky od 15 poisťovní a nájdeme pre vás to najvýhodnejšie poistenie.
                    </p>
                  </div>
                </ScrollAnimation>
              </div>

              <ScrollAnimation type="fade-in" delay={600} className="mt-8">
                <Button asChild size="lg" variant="outline">
                  <Link href="/kontakt">Požiadať o poistenie</Link>
                </Button>
              </ScrollAnimation>
            </ScrollAnimation>
          </div>

          <ScrollAnimation type="fade-up" delay={700} className="mt-16 relative overflow-hidden rounded-xl">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70"></div>

            <div className="relative z-10 p-8">
              <h2 className="text-2xl font-bold text-center text-white">Kalkulačka splátok</h2>
              <p className="mt-2 text-center text-white/80">
                Vypočítajte si orientačnú výšku mesačnej splátky pre vaše vysnívanú vozidlo.
              </p>

              <ScrollAnimation
                type="fade-in"
                delay={800}
                className="mt-8 mx-auto max-w-2xl rounded-lg border bg-white/95 backdrop-blur-sm p-6"
              >
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Cena vozidla (€)</label>
                    <input
                      type="number"
                      className="w-full rounded-md border border-input bg-background px-3 py-2"
                      placeholder="15000"
                      value={carPrice}
                      onChange={handleCarPriceChange}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Akontácia (%)</label>
                    <input
                      type="number"
                      className="w-full rounded-md border border-input bg-background px-3 py-2"
                      placeholder="20"
                      value={downPaymentPercent}
                      onChange={handleDownPaymentChange}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Doba splácania (mesiacov)</label>
                    <select
                      className="w-full rounded-md border border-input bg-background px-3 py-2"
                      value={loanTerm}
                      onChange={handleLoanTermChange}
                    >
                      <option value="24">24 mesiacov</option>
                      <option value="36">36 mesiacov</option>
                      <option value="48">48 mesiacov</option>
                      <option value="60">60 mesiacov</option>
                      <option value="72">72 mesiacov</option>
                      <option value="84">84 mesiacov</option>
                      <option value="96">96 mesiacov</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Úroková sadzba (%)</label>
                    <input
                      type="number"
                      className="w-full rounded-md border border-input bg-background px-3 py-2"
                      placeholder="7.9"
                      step="0.1"
                      value={interestRate}
                      onChange={handleInterestRateChange}
                    />
                  </div>
                </div>

                <div className="mt-6 rounded-lg bg-muted p-4 text-center">
                  <p className="text-sm text-muted-foreground">Orientačná mesačná splátka</p>
                  <p className="text-2xl font-bold">{monthlyPayment.toFixed(2)} €</p>
                  <p className="text-xs text-muted-foreground mt-2">
                    Táto kalkulácia je len orientačná. Pre presnú ponuku nás kontaktujte.
                  </p>
                </div>
              </ScrollAnimation>
            </div>
          </ScrollAnimation>

          <ScrollAnimation type="fade-up" delay={900} className="mt-16">
            <h2 className="text-2xl font-bold text-center">Často kladené otázky</h2>

            <div className="mt-8 mx-auto max-w-3xl space-y-4">
              {[
                {
                  question: "Aké doklady potrebujem na vybavenie financovania?",
                  answer:
                    "Na vybavenie financovania potrebujete občiansky preukaz, vodičský preukaz a potvrdenie o príjme alebo daňové priznanie v prípade podnikateľov.",
                },
                {
                  question: "Ako dlho trvá schválenie úveru?",
                  answer:
                    "Schválenie úveru zvyčajne trvá od niekoľkých hodín do 1-2 pracovných dní, v závislosti od finančnej inštitúcie.",
                },
                {
                  question: "Môžem si vozidlo poistiť aj inde?",
                  answer:
                    "Áno, máte možnosť poistiť si vozidlo aj v inej poisťovni, ale naša ponuka je zvyčajne výhodnejšia vďaka zľavám, ktoré máme dohodnuté s poisťovňami.",
                },
                {
                  question: "Je možné predčasne splatiť úver?",
                  answer: "Áno, všetky naše úvery je možné predčasne splatiť bez dodatočných poplatkov.",
                },
              ].map((faq, index) => (
                <ScrollAnimation key={index} type="fade-in" delay={950 + index * 50} className="rounded-lg border p-4">
                  <h3 className="font-medium">{faq.question}</h3>
                  <p className="mt-2 text-muted-foreground">{faq.answer}</p>
                </ScrollAnimation>
              ))}
            </div>
          </ScrollAnimation>
        </div>
      </main>
      <Footer />
    </div>
  )
}
