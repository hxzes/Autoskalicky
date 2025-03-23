import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Star } from "lucide-react"

export function Testimonials() {
  return (
    <div className="mt-16">
      <div className="text-center">
        <h2 className="text-2xl font-bold md:text-3xl">Čo o nás hovoria naši zákazníci</h2>
        <p className="mt-2 text-muted-foreground">Pozrite si recenzie od našich spokojných zákazníkov</p>
      </div>
      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <div className="flex">
              <Star className="h-5 w-5 fill-primary text-primary" />
              <Star className="h-5 w-5 fill-primary text-primary" />
              <Star className="h-5 w-5 fill-primary text-primary" />
              <Star className="h-5 w-5 fill-primary text-primary" />
              <Star className="h-5 w-5 fill-primary text-primary" />
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              "Som veľmi spokojný s kúpou vozidla u Auto Skalický. Profesionálny prístup, transparentné jednanie a
              výborný servis. Vozidlo je v perfektnom stave, presne ako bolo prezentované."
            </p>
          </CardContent>
          <CardFooter>
            <div>
              <p className="font-semibold">Peter</p>
              <p className="text-sm text-muted-foreground">Bratislava</p>
            </div>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <div className="flex">
              <Star className="h-5 w-5 fill-primary text-primary" />
              <Star className="h-5 w-5 fill-primary text-primary" />
              <Star className="h-5 w-5 fill-primary text-primary" />
              <Star className="h-5 w-5 fill-primary text-primary" />
              <Star className="h-5 w-5 fill-primary text-primary" />
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              "Už druhýkrát som si kúpil auto u Auto Skalický a opäť maximálna spokojnosť. Ochotný personál, poradenstvo
              na vysokej úrovni a vozidlá s jasnou históriou. Určite odporúčam!"
            </p>
          </CardContent>
          <CardFooter>
            <div>
              <p className="font-semibold">Marek</p>
              <p className="text-sm text-muted-foreground">Trnava</p>
            </div>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <div className="flex">
              <Star className="h-5 w-5 fill-primary text-primary" />
              <Star className="h-5 w-5 fill-primary text-primary" />
              <Star className="h-5 w-5 fill-primary text-primary" />
              <Star className="h-5 w-5 fill-primary text-primary" />
              <Star className="h-5 w-5 fill-primary text-primary" />
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              "Vynikajúca komunikácia, transparentné podmienky a rýchle vybavenie všetkých formalít. Auto Skalický mi
              pomohol aj s financovaním a poistením. Určite sa sem vrátim aj pri ďalšej kúpe auta."
            </p>
          </CardContent>
          <CardFooter>
            <div>
              <p className="font-semibold">Jana</p>
              <p className="text-sm text-muted-foreground">Nitra</p>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

