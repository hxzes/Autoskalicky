"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { AutobazarIframe } from "@/components/autobazar-iframe"

export function Cars() {
  return (
    <div className="mt-16 relative overflow-hidden rounded-xl bg-background border shadow-sm">
      <div className="py-12 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 gap-4">
            <h2 className="text-2xl font-bold md:text-3xl text-foreground">Naša ponuka vozidiel</h2>
            <Link href="/vozidla" className="text-primary hover:underline flex items-center">
              Zobraziť všetky
              <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </div>

          <div className="bg-background rounded-xl p-4 sm:p-6 border">
            {/* Použijeme iframe s menšou výškou pre domovskú stránku */}
            <AutobazarIframe height={600} showTitle={false} />
          </div>

          <div className="mt-8 flex justify-center">
            <Button asChild>
              <Link href="/vozidla">Zobraziť všetky vozidlá</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
