import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"

export function AutobazarFallback() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Naša ponuka vozidiel</CardTitle>
        <CardDescription>Prehliadnite si našu aktuálnu ponuku vozidiel priamo na Autobazar.sk</CardDescription>
      </CardHeader>
      <CardContent className="text-center py-12">
        <p className="mb-6">Pre zobrazenie našej kompletnej ponuky vozidiel navštívte náš profil na Autobazar.sk.</p>
        <p className="text-muted-foreground mb-8">
          Kliknutím na tlačidlo nižšie budete presmerovaní na našu stránku s aktuálnou ponukou vozidiel.
        </p>
      </CardContent>
      <CardFooter className="flex justify-center">
        <Button asChild size="lg">
          <a
            href="https://www.autobazar.sk/inzeraty/auto-skalicky-s-r-o/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center"
          >
            Zobraziť vozidlá na Autobazar
            <ExternalLink className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  )
}
