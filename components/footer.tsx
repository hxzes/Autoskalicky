import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Mail, MapPin, Phone, Clock } from "lucide-react"
import { companyInfo } from "@/lib/data"

export function Footer() {
  return (
    <footer className="bg-muted">
      <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <Image src="/images/logo.png" alt="Auto Skalický" width={150} height={50} className="h-12 w-auto" />
            </div>
            <p className="mt-2 text-muted-foreground">
              V automobilovom priemysle pôsobíme už viac ako 13 rokov a môžeme sa obhliadnuť za veľkým počtom spokojných
              zákazníkov.
            </p>
            <div className="mt-4 flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-medium">Kontakt</h3>
            <ul className="mt-4 space-y-2">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-primary" />
                <span>
                  {companyInfo.address.street}, {companyInfo.address.city}, {companyInfo.address.country}
                </span>
              </li>
              <li className="flex flex-col">
                <div className="flex items-start">
                  <Phone className="mr-2 h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Predaj Vozidiel — {companyInfo.contact.salesPerson}</p>
                    <p>{companyInfo.contact.phone.sales}</p>
                  </div>
                </div>
              </li>
              <li className="flex flex-col">
                <div className="flex items-start">
                  <Phone className="mr-2 h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Servis — {companyInfo.contact.servicePerson}</p>
                    <p>{companyInfo.contact.phone.service}</p>
                  </div>
                </div>
              </li>
              <li className="flex items-start">
                <Mail className="mr-2 h-5 w-5 text-primary" />
                <span>{companyInfo.contact.email}</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium">Rýchle odkazy</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Domov
                </Link>
              </li>
              <li>
                <Link href="/vozidla" className="text-muted-foreground hover:text-primary transition-colors">
                  Vozidlá
                </Link>
              </li>
              <li>
                <Link href="/sluzby" className="text-muted-foreground hover:text-primary transition-colors">
                  Služby
                </Link>
              </li>
              <li>
                <Link href="/financovanie" className="text-muted-foreground hover:text-primary transition-colors">
                  Financovanie a poistenie
                </Link>
              </li>
              <li>
                <Link href="/kontakt" className="text-muted-foreground hover:text-primary transition-colors">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium flex items-center">
              <Clock className="mr-2 h-5 w-5 text-primary" />
              Otváracie hodiny
            </h3>
            <ul className="mt-4 space-y-2">
              <li className="flex justify-between">
                <span>Pondelok - Piatok</span>
                <span>9:00 - 17:00</span>
              </li>
              <li className="flex justify-between">
                <span>Sobota</span>
                <span>9:00 - 12:00</span>
              </li>
              <li className="flex justify-between">
                <span>Nedeľa</span>
                <span>Zatvorené</span>
              </li>
            </ul>
            <div className="mt-4">
              <Button asChild className="w-full">
                <Link href="/kontakt">Dohodnite si stretnutie</Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t pt-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Auto Skalický. Všetky práva vyhradené.
            </p>
            <div className="flex gap-4">
              <p className="text-sm text-muted-foreground">
                Vytvoril{" "}
                <Link href="https://haze.sk" className="hover:underline">
                  <span className="text-primary">HAZE</span>Design
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
