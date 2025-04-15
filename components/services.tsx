import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Wrench, Car, CreditCard, Shield } from "lucide-react"
import Link from "next/link"

export function Services() {
  return (
    <div className="mt-16">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold md:text-3xl">Naše služby</h2>
        <Link href="/sluzby" className="text-primary hover:underline">
          Všetky služby
        </Link>
      </div>
      <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader>
            <div className="mb-2 rounded-full bg-primary/10 p-2 w-10 h-10 flex items-center justify-center">
              <Car className="h-5 w-5 text-primary" />
            </div>
            <CardTitle>Predaj vozidiel</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Široká ponuka kvalitných vozidiel z Nemecka s kompletnou servisnou históriou.
            </p>
          </CardContent>
          <CardFooter>
            <Button asChild variant="ghost" className="px-0">
              <Link href="/sluzby#predaj" className="flex items-center text-primary">
                Viac informácií
              </Link>
            </Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <div className="mb-2 rounded-full bg-primary/10 p-2 w-10 h-10 flex items-center justify-center">
              <Wrench className="h-5 w-5 text-primary" />
            </div>
            <CardTitle>Servis vozidiel</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Profesionálny servis a údržba vozidiel všetkých značiek.</p>
          </CardContent>
          <CardFooter>
            <Button asChild variant="ghost" className="px-0">
              <Link href="/sluzby#servis" className="flex items-center text-primary">
                Viac informácií
              </Link>
            </Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <div className="mb-2 rounded-full bg-primary/10 p-2 w-10 h-10 flex items-center justify-center">
              <CreditCard className="h-5 w-5 text-primary" />
            </div>
            <CardTitle>Financovanie</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Pomôžeme vám s financovaním vášho vozidla za výhodných podmienok.</p>
          </CardContent>
          <CardFooter>
            <Button asChild variant="ghost" className="px-0">
              <Link href="/financovanie" className="flex items-center text-primary">
                Viac informácií
              </Link>
            </Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <div className="mb-2 rounded-full bg-primary/10 p-2 w-10 h-10 flex items-center justify-center">
              <Shield className="h-5 w-5 text-primary" />
            </div>
            <CardTitle>Poistenie</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Zákonné aj havarijné poistenie pre vaše vozidlo na jednom mieste.</p>
          </CardContent>
          <CardFooter>
            <Button asChild variant="ghost" className="px-0">
              <Link href="/financovanie#poistenie" className="flex items-center text-primary">
                Viac informácií
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
