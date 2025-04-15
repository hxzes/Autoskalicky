import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { CheckCircle } from "lucide-react"

export function AboutUs() {
  return (
    <div className="mt-16 animate-fade-in">
      <div className="rounded-xl bg-muted p-6 md:p-8 lg:p-10">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground animate-fade-up">
              <CheckCircle className="h-6 w-6" />
            </div>
            <h2 className="mt-4 text-2xl font-bold md:text-3xl animate-fade-up" style={{ animationDelay: "100ms" }}>
              O nás
            </h2>
            <p className="mt-4 text-muted-foreground animate-fade-up" style={{ animationDelay: "200ms" }}>
              V automobilovom priemysle pôsobíme už viac ako 13 rokov a môžeme sa obhliadnuť za veľkým počtom spokojných
              zákazníkov. Ako predajca ojazdených vozidiel sa špecializujeme hlavne na dobre udržiavané vozidlá
              predovšetkým z Nemecka.
            </p>
            <div className="mt-6 animate-fade-up" style={{ animationDelay: "300ms" }}>
              <h3 className="font-bold">Vaša bezpečnosť je naša prvá a hlavná priorita</h3>
              <p className="mt-2 text-muted-foreground">
                Všetky vozidlá s kompletnou servisnou históriou. Radi zabezpečíme financovanie prostredníctvom našich
                partnerov, radi vykúpime Vaše staré vozidlo a taktiež si u nás môžete uzatvoriť zákonné alebo havarijné
                poistenie.
              </p>
            </div>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="flex items-start animate-slide-in" style={{ animationDelay: "400ms" }}>
                <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                <div>
                  <h4 className="font-medium">Kvalita a spoľahlivosť</h4>
                  <p className="text-sm text-muted-foreground">Prísny výber vozidiel s overenou históriou</p>
                </div>
              </div>
              <div className="flex items-start animate-slide-in" style={{ animationDelay: "500ms" }}>
                <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                <div>
                  <h4 className="font-medium">Profesionálny prístup</h4>
                  <p className="text-sm text-muted-foreground">Odborné poradenstvo a individuálny prístup</p>
                </div>
              </div>
              <div className="flex items-start animate-slide-in" style={{ animationDelay: "600ms" }}>
                <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                <div>
                  <h4 className="font-medium">Komplexné služby</h4>
                  <p className="text-sm text-muted-foreground">Od výberu po financovanie a poistenie</p>
                </div>
              </div>
              <div className="flex items-start animate-slide-in" style={{ animationDelay: "700ms" }}>
                <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                <div>
                  <h4 className="font-medium">Zákaznícka spokojnosť</h4>
                  <p className="text-sm text-muted-foreground">Stovky spokojných zákazníkov</p>
                </div>
              </div>
            </div>
            <div className="mt-8 animate-fade-up" style={{ animationDelay: "800ms" }}>
              <Button asChild>
                <Link href="/kontakt">Kontaktujte nás</Link>
              </Button>
            </div>
          </div>
          <div className="relative min-h-[300px] overflow-hidden rounded-lg md:min-h-full animate-slide-in-right">
            <div className="absolute inset-0 flex items-center justify-center bg-muted/50">
              <Image
                src="/images/logo.png"
                alt="Auto Skalický logo"
                width={250}
                height={250}
                className="h-auto w-auto max-w-[80%] animate-pulse-subtle"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
