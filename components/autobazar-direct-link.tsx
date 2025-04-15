import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"

interface AutobazarDirectLinkProps {
  title?: string
  description?: string
  buttonText?: string
}

export function AutobazarDirectLink({
  title = "Naša ponuka vozidiel",
  description = "Prehliadnite si našu aktuálnu ponuku vozidiel na Autobazar.sk",
  buttonText = "Zobraziť vozidlá na Autobazar",
}: AutobazarDirectLinkProps) {
  const autobazarUrl = "https://www.autobazar.sk/inzeraty/auto-skalicky-s-r-o/"

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="text-center py-12">
        <p className="mb-6">Pre zobrazenie našej kompletnej ponuky vozidiel navštívte náš profil na Autobazar.sk.</p>
        <p className="text-muted-foreground mb-8">
          Kliknutím na tlačidlo nižšie budete presmerovaní na našu stránku s aktuálnou ponukou vozidiel.
        </p>
      </CardContent>
      <CardFooter className="flex justify-center">
        <Button asChild size="lg" className="gap-2">
          <a href={autobazarUrl} target="_blank" rel="noopener noreferrer">
            {buttonText}
            <ExternalLink className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  )
}
