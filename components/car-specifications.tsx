// Upravím komponent CarSpecifications, aby prijímal údaje o vozidle a zobrazoval relevantné informácie

export function CarSpecifications({ vehicle }: { vehicle: any }) {
  if (!vehicle) {
    return <div>Špecifikácie vozidla nie sú k dispozícii.</div>
  }

  // Špeciálne špecifikácie pre Citroen C3
  if (vehicle.title.includes("C3")) {
    return (
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <h3 className="font-medium">Základné informácie</h3>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div className="border-b py-2">
              <span className="text-muted-foreground">Značka</span>
              <p>Citroën</p>
            </div>
            <div className="border-b py-2">
              <span className="text-muted-foreground">Model</span>
              <p>C3</p>
            </div>
            <div className="border-b py-2">
              <span className="text-muted-foreground">Karoséria</span>
              <p>Hatchback</p>
            </div>
            <div className="border-b py-2">
              <span className="text-muted-foreground">Rok výroby</span>
              <p>2011</p>
            </div>
            <div className="border-b py-2">
              <span className="text-muted-foreground">Stav tachometra</span>
              <p>65 000 km</p>
            </div>
            <div className="border-b py-2">
              <span className="text-muted-foreground">Pohon</span>
              <p>Predný</p>
            </div>
            <div className="border-b py-2">
              <span className="text-muted-foreground">Počet dverí</span>
              <p>5</p>
            </div>
            <div className="border-b py-2">
              <span className="text-muted-foreground">Počet miest</span>
              <p>5</p>
            </div>
            <div className="border-b py-2">
              <span className="text-muted-foreground">Farba exteriéru</span>
              <p>Biela</p>
            </div>
            <div className="border-b py-2">
              <span className="text-muted-foreground">Farba interiéru</span>
              <p>Čierna</p>
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <h3 className="font-medium">Technické údaje</h3>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div className="border-b py-2">
              <span className="text-muted-foreground">Palivo</span>
              <p>Benzín</p>
            </div>
            <div className="border-b py-2">
              <span className="text-muted-foreground">Prevodovka</span>
              <p>5-st. manuálna</p>
            </div>
            <div className="border-b py-2">
              <span className="text-muted-foreground">Výkon</span>
              <p>44 kW / 60 PS</p>
            </div>
            <div className="border-b py-2">
              <span className="text-muted-foreground">Objem motora</span>
              <p>1 124 cm³</p>
            </div>
            <div className="border-b py-2">
              <span className="text-muted-foreground">Spotreba kombinovaná</span>
              <p>5,9 l/100 km</p>
            </div>
            <div className="border-b py-2">
              <span className="text-muted-foreground">Spotreba v meste</span>
              <p>7,9 l/100 km</p>
            </div>
            <div className="border-b py-2">
              <span className="text-muted-foreground">Spotreba mimo mesta</span>
              <p>4,9 l/100 km</p>
            </div>
            <div className="border-b py-2">
              <span className="text-muted-foreground">Emisie CO₂</span>
              <p>137 g/km</p>
            </div>
            <div className="border-b py-2">
              <span className="text-muted-foreground">Euronorma</span>
              <p>Euro 5</p>
            </div>
            <div className="border-b py-2">
              <span className="text-muted-foreground">Stav vozidla</span>
              <p>Používané</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Peugeot 308 SW
  if (vehicle.title.includes("308") && vehicle.title.includes("SW")) {
    return (
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <h3 className="font-medium">Základné informácie</h3>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div className="border-b py-2">
              <span className="text-muted-foreground">Značka</span>
              <p>Peugeot</p>
            </div>
            <div className="border-b py-2">
              <span className="text-muted-foreground">Model</span>
              <p>308 SW</p>
            </div>
            <div className="border-b py-2">
              <span className="text-muted-foreground">Variant</span>
              <p>2.0 BlueHDi GT Line</p>
            </div>
            <div className="border-b py-2">
              <span className="text-muted-foreground">Rok výroby</span>
              <p>2019</p>
            </div>
            <div className="border-b py-2">
              <span className="text-muted-foreground">Stav tachometra</span>
              <p>169 000 km</p>
            </div>
            <div className="border-b py-2">
              <span className="text-muted-foreground">Krajina pôvodu</span>
              <p>Nemecko</p>
            </div>
            <div className="border-b py-2">
              <span className="text-muted-foreground">Počet dverí</span>
              <p>5</p>
            </div>
            <div className="border-b py-2">
              <span className="text-muted-foreground">Počet miest</span>
              <p>5</p>
            </div>
            <div className="border-b py-2">
              <span className="text-muted-foreground">Farba exteriéru</span>
              <p>Modrá</p>
            </div>
            <div className="border-b py-2">
              <span className="text-muted-foreground">Farba interiéru</span>
              <p>Čierna</p>
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <h3 className="font-medium">Technické údaje</h3>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div className="border-b py-2">
              <span className="text-muted-foreground">Motor</span>
              <p>2.0 BlueHDi</p>
            </div>
            <div className="border-b py-2">
              <span className="text-muted-foreground">Palivo</span>
              <p>Diesel</p>
            </div>
            <div className="border-b py-2">
              <span className="text-muted-foreground">Výkon</span>
              <p>96 kW / 130 PS</p>
            </div>
            <div className="border-b py-2">
              <span className="text-muted-foreground">Prevodovka</span>
              <p>6-st. manuál</p>
            </div>
            <div className="border-b py-2">
              <span className="text-muted-foreground">Pohon</span>
              <p>Predný</p>
            </div>
            <div className="border-b py-2">
              <span className="text-muted-foreground">Objem motora</span>
              <p>1 997 cm³</p>
            </div>
            <div className="border-b py-2">
              <span className="text-muted-foreground">Spotreba kombinovaná</span>
              <p>5,2 l/100 km</p>
            </div>
            <div className="border-b py-2">
              <span className="text-muted-foreground">Emisie CO₂</span>
              <p>120 g/km</p>
            </div>
            <div className="border-b py-2">
              <span className="text-muted-foreground">Max. rýchlosť</span>
              <p>200 km/h</p>
            </div>
            <div className="border-b py-2">
              <span className="text-muted-foreground">Zrýchlenie 0-100 km/h</span>
              <p>8,9 s</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Ford Focus Kombi
  if (vehicle.title.includes("Focus") && vehicle.title.includes("Kombi")) {
    return (
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <h3 className="font-medium">Základné informácie</h3>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div className="border-b py-2">
              <span className="text-muted-foreground">Značka</span>
              <p>Ford</p>
            </div>
            <div className="border-b py-2">
              <span className="text-muted-foreground">Model</span>
              <p>Focus Kombi</p>
            </div>
            <div className="border-b py-2">
              <span className="text-muted-foreground">Variant</span>
              <p>1.5 EcoBoost Titanium</p>
            </div>
            <div className="border-b py-2">
              <span className="text-muted-foreground">Rok výroby</span>
              <p>2019</p>
            </div>
            <div className="border-b py-2">
              <span className="text-muted-foreground">Stav tachometra</span>
              <p>190 000 km</p>
            </div>
            <div className="border-b py-2">
              <span className="text-muted-foreground">Krajina pôvodu</span>
              <p>Nemecko</p>
            </div>
            <div className="border-b py-2">
              <span className="text-muted-foreground">Počet dverí</span>
              <p>5</p>
            </div>
            <div className="border-b py-2">
              <span className="text-muted-foreground">Počet miest</span>
              <p>5</p>
            </div>
            <div className="border-b py-2">
              <span className="text-muted-foreground">Farba exteriéru</span>
              <p>Modrá</p>
            </div>
            <div className="border-b py-2">
              <span className="text-muted-foreground">Farba interiéru</span>
              <p>Čierna</p>
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <h3 className="font-medium">Technické údaje</h3>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div className="border-b py-2">
              <span className="text-muted-foreground">Motor</span>
              <p>1.5 EcoBoost</p>
            </div>
            <div className="border-b py-2">
              <span className="text-muted-foreground">Palivo</span>
              <p>Benzín</p>
            </div>
            <div className="border-b py-2">
              <span className="text-muted-foreground">Výkon</span>
              <p>110 kW / 150 PS</p>
            </div>
            <div className="border-b py-2">
              <span className="text-muted-foreground">Prevodovka</span>
              <p>6-st. manuál</p>
            </div>
            <div className="border-b py-2">
              <span className="text-muted-foreground">Pohon</span>
              <p>Predný</p>
            </div>
            <div className="border-b py-2">
              <span className="text-muted-foreground">Objem motora</span>
              <p>1 498 cm³</p>
            </div>
            <div className="border-b py-2">
              <span className="text-muted-foreground">Spotreba kombinovaná</span>
              <p>6,5 l/100 km</p>
            </div>
            <div className="border-b py-2">
              <span className="text-muted-foreground">Emisie CO₂</span>
              <p>150 g/km</p>
            </div>
            <div className="border-b py-2">
              <span className="text-muted-foreground">Max. rýchlosť</span>
              <p>210 km/h</p>
            </div>
            <div className="border-b py-2">
              <span className="text-muted-foreground">Zrýchlenie 0-100 km/h</span>
              <p>8,5 s</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Ford Kuga
  if (vehicle.title.includes("Kuga")) {
    return (
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <h3 className="font-medium">Základné informácie</h3>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div className="border-b py-2">
              <span className="text-muted-foreground">Značka</span>
              <p>Ford</p>
            </div>
            <div className="border-b py-2">
              <span className="text-muted-foreground">Model</span>
              <p>Kuga</p>
            </div>
            <div className="border-b py-2">
              <span className="text-muted-foreground">Variant</span>
              <p>1.5 EcoBoost Titanium</p>
            </div>
            <div className="border-b py-2">
              <span className="text-muted-foreground">Rok výroby</span>
              <p>2020</p>
            </div>
            <div className="border-b py-2">
              <span className="text-muted-foreground">Stav tachometra</span>
              <p>171 000 km</p>
            </div>
            <div className="border-b py-2">
              <span className="text-muted-foreground">Krajina pôvodu</span>
              <p>Nemecko</p>
            </div>
            <div className="border-b py-2">
              <span className="text-muted-foreground">Počet dverí</span>
              <p>5</p>
            </div>
            <div className="border-b py-2">
              <span className="text-muted-foreground">Počet miest</span>
              <p>5</p>
            </div>
            <div className="border-b py-2">
              <span className="text-muted-foreground">Farba exteriéru</span>
              <p>Strieborná</p>
            </div>
            <div className="border-b py-2">
              <span className="text-muted-foreground">Farba interiéru</span>
              <p>Čierna</p>
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <h3 className="font-medium">Technické údaje</h3>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div className="border-b py-2">
              <span className="text-muted-foreground">Motor</span>
              <p>1.5 EcoBoost</p>
            </div>
            <div className="border-b py-2">
              <span className="text-muted-foreground">Palivo</span>
              <p>Benzín</p>
            </div>
            <div className="border-b py-2">
              <span className="text-muted-foreground">Výkon</span>
              <p>140 kW / 190 PS</p>
            </div>
            <div className="border-b py-2">
              <span className="text-muted-foreground">Prevodovka</span>
              <p>8-st. automatická</p>
            </div>
            <div className="border-b py-2">
              <span className="text-muted-foreground">Pohon</span>
              <p>Predný</p>
            </div>
            <div className="border-b py-2">
              <span className="text-muted-foreground">Objem motora</span>
              <p>1 498 cm³</p>
            </div>
            <div className="border-b py-2">
              <span className="text-muted-foreground">Spotreba kombinovaná</span>
              <p>6,5 l/100 km</p>
            </div>
            <div className="border-b py-2">
              <span className="text-muted-foreground">Emisie CO₂</span>
              <p>150 g/km</p>
            </div>
            <div className="border-b py-2">
              <span className="text-muted-foreground">Max. rýchlosť</span>
              <p>200 km/h</p>
            </div>
            <div className="border-b py-2">
              <span className="text-muted-foreground">Zrýchlenie 0-100 km/h</span>
              <p>8,9 s</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Ford Galaxy
  if (vehicle.title.includes("Galaxy")) {
    return (
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <h3 className="font-medium">Základné informácie</h3>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div className="border-b py-2">
              <span className="text-muted-foreground">Značka</span>
              <p>Ford</p>
            </div>
            <div className="border-b py-2">
              <span className="text-muted-foreground">Model</span>
              <p>Galaxy</p>
            </div>
            <div className="border-b py-2">
              <span className="text-muted-foreground">Variant</span>
              <p>2.0 TDCi Titanium</p>
            </div>
            <div className="border-b py-2">
              <span className="text-muted-foreground">Rok výroby</span>
              <p>2014</p>
            </div>
            <div className="border-b py-2">
              <span className="text-muted-foreground">Stav tachometra</span>
              <p>316 000 km</p>
            </div>
            <div className="border-b py-2">
              <span className="text-muted-foreground">Krajina pôvodu</span>
              <p>Nemecko</p>
            </div>
            <div className="border-b py-2">
              <span className="text-muted-foreground">Počet dverí</span>
              <p>5</p>
            </div>
            <div className="border-b py-2">
              <span className="text-muted-foreground">Počet miest</span>
              <p>7</p>
            </div>
            <div className="border-b py-2">
              <span className="text-muted-foreground">Farba exteriéru</span>
              <p>Čierna</p>
            </div>
            <div className="border-b py-2">
              <span className="text-muted-foreground">Farba interiéru</span>
              <p>Čierna</p>
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <h3 className="font-medium">Technické údaje</h3>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div className="border-b py-2">
              <span className="text-muted-foreground">Motor</span>
              <p>2.0 TDCi</p>
            </div>
            <div className="border-b py-2">
              <span className="text-muted-foreground">Palivo</span>
              <p>Diesel</p>
            </div>
            <div className="border-b py-2">
              <span className="text-muted-foreground">Výkon</span>
              <p>120 kW / 163 PS</p>
            </div>
            <div className="border-b py-2">
              <span className="text-muted-foreground">Prevodovka</span>
              <p>6-st. manuál</p>
            </div>
            <div className="border-b py-2">
              <span className="text-muted-foreground">Pohon</span>
              <p>Predný</p>
            </div>
            <div className="border-b py-2">
              <span className="text-muted-foreground">Objem motora</span>
              <p>1 997 cm³</p>
            </div>
            <div className="border-b py-2">
              <span className="text-muted-foreground">Spotreba kombinovaná</span>
              <p>5,2 l/100 km</p>
            </div>
            <div className="border-b py-2">
              <span className="text-muted-foreground">Emisie CO₂</span>
              <p>120 g/km</p>
            </div>
            <div className="border-b py-2">
              <span className="text-muted-foreground">Max. rýchlosť</span>
              <p>200 km/h</p>
            </div>
            <div className="border-b py-2">
              <span className="text-muted-foreground">Zrýchlenie 0-100 km/h</span>
              <p>9,5 s</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Extrahujeme značku a model z názvu vozidla
  const parts = vehicle.title.split(" ")
  const brand = parts[0]
  const model = parts.slice(1).join(" ")

  // Určenie objemu motora z názvu
  let engineVolume = "1 968 cm³"
  if (vehicle.subtitle) {
    const match = vehicle.subtitle.match(/\d\.\d/)
    if (match) {
      const volume = match[0]
      if (volume === "1.5") engineVolume = "1 498 cm³"
      else if (volume === "1.6") engineVolume = "1 598 cm³"
      else if (volume === "2.0") engineVolume = "1 997 cm³"
      else if (volume === "1.2") engineVolume = "1 199 cm³"
      else if (volume === "1.4") engineVolume = "1 395 cm³"
      else if (volume === "1.8") engineVolume = "1 798 cm³"
      else if (volume === "3.0") engineVolume = "2 993 cm³"
    }
  }

  // Určenie farby vozidla
  let color = "Metalíza"
  if (vehicle.title.toLowerCase().includes("white")) color = "Biela"
  else if (vehicle.title.toLowerCase().includes("black")) color = "Čierna"
  else if (vehicle.title.toLowerCase().includes("silver")) color = "Strieborná"
  else if (vehicle.title.toLowerCase().includes("blue")) color = "Modrá"
  else if (vehicle.title.toLowerCase().includes("red")) color = "Červená"
  else if (vehicle.title.toLowerCase().includes("grey")) color = "Sivá"

  return (
    <div className="grid gap-4 md:grid-cols-2">
      <div className="space-y-2">
        <h3 className="font-medium">Základné informácie</h3>
        <div className="grid grid-cols-2 gap-2 text-sm">
          <div className="border-b py-2">
            <span className="text-muted-foreground">Značka</span>
            <p>{brand}</p>
          </div>
          <div className="border-b py-2">
            <span className="text-muted-foreground">Model</span>
            <p>{model}</p>
          </div>
          <div className="border-b py-2">
            <span className="text-muted-foreground">Variant</span>
            <p>{vehicle.subtitle || "-"}</p>
          </div>
          <div className="border-b py-2">
            <span className="text-muted-foreground">Rok výroby</span>
            <p>{vehicle.year > 0 ? vehicle.year : "Neuvedené"}</p>
          </div>
          <div className="border-b py-2">
            <span className="text-muted-foreground">Stav tachometra</span>
            <p>{vehicle.mileage > 0 ? `${vehicle.mileage.toLocaleString("sk")} km` : "Neuvedené"}</p>
          </div>
          <div className="border-b py-2">
            <span className="text-muted-foreground">Krajina pôvodu</span>
            <p>Nemecko</p>
          </div>
          <div className="border-b py-2">
            <span className="text-muted-foreground">Počet dverí</span>
            <p>5</p>
          </div>
          <div className="border-b py-2">
            <span className="text-muted-foreground">Počet miest</span>
            <p>5</p>
          </div>
          <div className="border-b py-2">
            <span className="text-muted-foreground">Farba exteriéru</span>
            <p>{color}</p>
          </div>
          <div className="border-b py-2">
            <span className="text-muted-foreground">Farba interiéru</span>
            <p>Čierna</p>
          </div>
        </div>
      </div>
      <div className="space-y-2">
        <h3 className="font-medium">Technické údaje</h3>
        <div className="grid grid-cols-2 gap-2 text-sm">
          <div className="border-b py-2">
            <span className="text-muted-foreground">Motor</span>
            <p>{vehicle.subtitle ? vehicle.subtitle.split(" ")[0] : "-"}</p>
          </div>
          <div className="border-b py-2">
            <span className="text-muted-foreground">Palivo</span>
            <p>{vehicle.fuel}</p>
          </div>
          <div className="border-b py-2">
            <span className="text-muted-foreground">Výkon</span>
            <p>
              {vehicle.power.kw} kW / {vehicle.power.ps} PS
            </p>
          </div>
          <div className="border-b py-2">
            <span className="text-muted-foreground">Prevodovka</span>
            <p>{vehicle.transmission || "Manuálna"}</p>
          </div>
          <div className="border-b py-2">
            <span className="text-muted-foreground">Pohon</span>
            <p>
              {vehicle.title.includes("4x4") || vehicle.title.includes("quattro") || vehicle.title.includes("4MATIC")
                ? "4x4"
                : "Predný"}
            </p>
          </div>
          <div className="border-b py-2">
            <span className="text-muted-foreground">Objem motora</span>
            <p>{engineVolume}</p>
          </div>
          <div className="border-b py-2">
            <span className="text-muted-foreground">Spotreba kombinovaná</span>
            <p>{vehicle.fuel === "Diesel" ? "5,2" : "6,5"} l/100 km</p>
          </div>
          <div className="border-b py-2">
            <span className="text-muted-foreground">Emisie CO₂</span>
            <p>{vehicle.fuel === "Diesel" ? "120" : "150"} g/km</p>
          </div>
          <div className="border-b py-2">
            <span className="text-muted-foreground">Max. rýchlosť</span>
            <p>{vehicle.power.ps > 150 ? "220" : vehicle.power.ps > 120 ? "200" : "180"} km/h</p>
          </div>
          <div className="border-b py-2">
            <span className="text-muted-foreground">Zrýchlenie 0-100 km/h</span>
            <p>{vehicle.power.ps > 150 ? "7,5" : vehicle.power.ps > 120 ? "8,9" : "10,5"} s</p>
          </div>
        </div>
      </div>
    </div>
  )
}
