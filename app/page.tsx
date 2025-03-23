"use client"

import { Cars } from "@/components/cars"
import { FeaturedCar } from "@/components/featured-car"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Search } from "@/components/search"
import { Services } from "@/components/services"
import { Stats } from "@/components/stats"
import { Testimonials } from "@/components/testimonials"
import { AboutUs } from "@/components/about-us"
import { FinancingSection } from "@/components/financing-section"
import { ServicesSection } from "@/components/services-section"
import { FaqSection } from "@/components/faq-section"
import { ScrollAnimation } from "@/components/scroll-animation"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <div className="container mx-auto px-4 py-8 md:py-12 lg:px-8">
          <ScrollAnimation>
            <Search />
          </ScrollAnimation>

          <ScrollAnimation delay={100}>
            <FeaturedCar />
          </ScrollAnimation>

          <ScrollAnimation delay={200}>
            <AboutUs />
          </ScrollAnimation>

          <ScrollAnimation delay={300}>
            <ServicesSection />
          </ScrollAnimation>

          <ScrollAnimation delay={400}>
            <FinancingSection />
          </ScrollAnimation>

          <ScrollAnimation delay={500}>
            <Cars />
          </ScrollAnimation>

          <ScrollAnimation delay={600}>
            <Services />
          </ScrollAnimation>

          <ScrollAnimation delay={700}>
            <Stats />
          </ScrollAnimation>

          <ScrollAnimation delay={800}>
            <Testimonials />
          </ScrollAnimation>

          <ScrollAnimation delay={900}>
            <FaqSection />
          </ScrollAnimation>
        </div>
      </main>
      <Footer />
    </div>
  )
}

