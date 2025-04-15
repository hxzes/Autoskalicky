import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"

interface AutobazarLinkCardProps {
  title?: string
  description?: string
}

export function AutobazarLinkCard({
  title = "Naša ponuka vozidiel",
  description = "Prehliadnite si našu aktuálnu ponuku vozidiel na Autobazar.sk",
}: AutobazarLinkCardProps) {
  const autobazarUrl = "https://www.autobazar.sk/inzeraty/auto-skalicky-s-r-o/"

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-center py-10">
        <div className="text-center mb-6">
          <p className="text-lg font-medium">
            Kliknite na tlačidlo nižšie pre zobrazenie našej kompletnej ponuky vozidiel
          </p>
          <p className="text-muted-foreground mt-2">Budete presmerovaní na stránku Autobazar.sk</p>
        </div>
        <div className="flex justify-center">
          <Button asChild size="lg" className="gap-2">
            <a href={autobazarUrl} target="_blank" rel="noopener noreferrer">
              Zobraziť vozidlá
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </CardContent>
      <CardFooter className="justify-center border-t pt-4">
        <p className="text-sm text-muted-foreground">Všetky vozidlá sú dostupné na adrese našej predajne v Močenku</p>
      </CardFooter>
    </Card>
  )
}
