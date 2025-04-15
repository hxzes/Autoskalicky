"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { useState } from "react"
import { SearchIcon } from "lucide-react"

export function Search() {
  const [priceRange, setPriceRange] = useState([0, 100000])

  return (
    <Card className="border shadow-sm">
      <CardHeader className="px-4 pt-6 pb-4">
        <CardTitle className="text-xl">Vyhľadávanie vozidiel</CardTitle>
      </CardHeader>
      <CardContent className="px-4 pb-6">
        <form className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
          <div className="space-y-2">
            <Label htmlFor="brand">Značka</Label>
            <Select>
              <SelectTrigger id="brand">
                <SelectValue placeholder="Vyberte značku" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="audi">Audi</SelectItem>
                <SelectItem value="bmw">BMW</SelectItem>
                <SelectItem value="mercedes">Mercedes-Benz</SelectItem>
                <SelectItem value="skoda">Škoda</SelectItem>
                <SelectItem value="volkswagen">Volkswagen</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="model">Model</Label>
            <Select>
              <SelectTrigger id="model">
                <SelectValue placeholder="Vyberte model" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="a4">A4</SelectItem>
                <SelectItem value="a6">A6</SelectItem>
                <SelectItem value="q5">Q5</SelectItem>
                <SelectItem value="q7">Q7</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="fuel">Palivo</Label>
            <Select>
              <SelectTrigger id="fuel">
                <SelectValue placeholder="Typ paliva" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="diesel">Diesel</SelectItem>
                <SelectItem value="gasoline">Benzín</SelectItem>
                <SelectItem value="hybrid">Hybrid</SelectItem>
                <SelectItem value="electric">Elektro</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="year">Rok výroby od</Label>
            <Select>
              <SelectTrigger id="year">
                <SelectValue placeholder="Vyberte rok" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="2023">2023</SelectItem>
                <SelectItem value="2022">2022</SelectItem>
                <SelectItem value="2021">2021</SelectItem>
                <SelectItem value="2020">2020</SelectItem>
                <SelectItem value="2019">2019</SelectItem>
                <SelectItem value="2018">2018</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="sm:col-span-2">
            <Label htmlFor="price-range">
              Cenové rozpätie: {priceRange[0].toLocaleString("sk")} € - {priceRange[1].toLocaleString("sk")} €
            </Label>
            <Slider
              id="price-range"
              defaultValue={[0, 100000]}
              max={100000}
              step={1000}
              value={priceRange}
              onValueChange={setPriceRange}
              className="mt-6"
            />
          </div>
          <div className="sm:col-span-2 flex items-end">
            <Button className="w-full gap-2">
              <SearchIcon className="h-4 w-4" />
              Vyhľadať vozidlá
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
