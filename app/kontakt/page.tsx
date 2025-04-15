"use client"

import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { Building, Mail, MapPin, Phone, Clock } from "lucide-react"
import { companyInfo } from "@/lib/data"
import { Button } from "@/components/ui/button"
import { ScrollAnimation } from "@/components/scroll-animation"

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div className="bg-muted py-12">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Kontaktujte nás</h1>
              <p className="mt-4 text-muted-foreground">
                Máte otázky ohľadom nášho vozového parku alebo služieb? Neváhajte nás kontaktovať.
              </p>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <ScrollAnimation className="bg-background rounded-xl shadow-sm border p-8">
              <h2 className="text-2xl font-bold mb-6">Kontaktné informácie</h2>
              <div className="grid gap-8 md:grid-cols-2">
                <div className="space-y-6">
                  <ScrollAnimation delay={100}>
                    <div className="flex items-start">
                      <Building className="mr-3 h-6 w-6 text-primary" />
                      <div>
                        <h3 className="font-medium">{companyInfo.name}</h3>
                        <p className="text-muted-foreground">Predaj a servis vozidiel</p>
                      </div>
                    </div>
                  </ScrollAnimation>

                  <ScrollAnimation delay={200}>
                    <div className="flex items-start">
                      <MapPin className="mr-3 h-6 w-6 text-primary" />
                      <div>
                        <h3 className="font-medium">Adresa</h3>
                        <p className="text-muted-foreground">
                          {companyInfo.address.street}, {companyInfo.address.city}, {companyInfo.address.country}
                        </p>
                      </div>
                    </div>
                  </ScrollAnimation>

                  <ScrollAnimation delay={300}>
                    <div className="flex items-start">
                      <Phone className="mr-3 h-6 w-6 text-primary" />
                      <div>
                        <h3 className="font-medium">Telefón</h3>
                        <p className="text-muted-foreground">Predaj: {companyInfo.contact.phone.sales}</p>
                        <p className="text-muted-foreground">Servis: {companyInfo.contact.phone.service}</p>
                      </div>
                    </div>
                  </ScrollAnimation>

                  <ScrollAnimation delay={400}>
                    <div className="flex items-start">
                      <Mail className="mr-3 h-6 w-6 text-primary" />
                      <div>
                        <h3 className="font-medium">Email</h3>
                        <p className="text-muted-foreground">{companyInfo.contact.email}</p>
                      </div>
                    </div>
                  </ScrollAnimation>

                  <ScrollAnimation delay={500} className="flex flex-col space-y-2 mt-6">
                    <Button asChild size="lg">
                      <a href={`tel:${companyInfo.contact.phone.sales}`}>
                        Zavolať - Predaj: {companyInfo.contact.phone.sales}
                      </a>
                    </Button>
                    <Button asChild size="lg" variant="outline">
                      <a href={`tel:${companyInfo.contact.phone.service}`}>
                        Zavolať - Servis: {companyInfo.contact.phone.service}
                      </a>
                    </Button>
                    <Button
                      asChild
                      size="lg"
                      className="bg-primary/10 text-primary hover:bg-primary/20 dark:bg-primary/20 dark:hover:bg-primary/30 border border-primary/20 font-medium"
                    >
                      <a href={`mailto:${companyInfo.contact.email}`}>Poslať email: {companyInfo.contact.email}</a>
                    </Button>
                  </ScrollAnimation>
                </div>

                <ScrollAnimation delay={100}>
                  <div className="mb-6">
                    <h3 className="text-xl font-bold mb-3 flex items-center">
                      <Clock className="mr-2 h-5 w-5 text-primary" />
                      Otváracie hodiny
                    </h3>
                    <div className="space-y-2 border rounded-lg p-4">
                      {[
                        { day: "Pondelok", hours: "9:00 - 17:00" },
                        { day: "Utorok", hours: "9:00 - 17:00" },
                        { day: "Streda", hours: "9:00 - 17:00" },
                        { day: "Štvrtok", hours: "9:00 - 17:00" },
                        { day: "Piatok", hours: "9:00 - 17:00" },
                        { day: "Sobota", hours: "9:00 - 12:00" },
                        { day: "Nedeľa", hours: "Zatvorené", muted: true },
                      ].map((item, index) => (
                        <ScrollAnimation
                          key={index}
                          delay={200 + index * 50}
                          className="flex justify-between py-2 border-b last:border-b-0"
                        >
                          <span className="font-medium">{item.day}</span>
                          <span className={item.muted ? "text-muted-foreground" : ""}>{item.hours}</span>
                        </ScrollAnimation>
                      ))}
                    </div>
                  </div>
                </ScrollAnimation>
              </div>

              <ScrollAnimation delay={600}>
                <h3 className="text-xl font-bold mb-3 flex items-center">
                  <MapPin className="mr-2 h-5 w-5 text-primary" />
                  Kde nás nájdete
                </h3>
                <div className="h-80 w-full overflow-hidden rounded-lg">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2651.1376580124287!2d18.0651233!3d48.3673611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476b3eba31c1b1c7%3A0x9a2cf9400bae49de!2s%C4%8Cingov%20873%2F110%2C%20951%2031%20Mo%C4%8Denok!5e0!3m2!1sen!2ssk!4v1616679302642!5m2!1sen!2ssk"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    title="Mapa - Čingov 873/110, Močenok, Slovakia"
                  ></iframe>
                </div>
              </ScrollAnimation>
            </ScrollAnimation>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
