export function CarSpecifications() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <div className="space-y-2">
        <h3 className="font-medium">Základné informácie</h3>
        <div className="grid grid-cols-2 gap-2 text-sm">
          <div className="border-b py-2">
            <span className="text-muted-foreground">Značka</span>
            <p>Range Rover</p>
          </div>
          <div className="border-b py-2">
            <span className="text-muted-foreground">Model</span>
            <p>Sport</p>
          </div>
          <div className="border-b py-2">
            <span className="text-muted-foreground">Variant</span>
            <p>HSE Dynamic</p>
          </div>
          <div className="border-b py-2">
            <span className="text-muted-foreground">Rok výroby</span>
            <p>2020</p>
          </div>
          <div className="border-b py-2">
            <span className="text-muted-foreground">Stav tachometra</span>
            <p>45 000 km</p>
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
            <p>Biela metalíza</p>
          </div>
          <div className="border-b py-2">
            <span className="text-muted-foreground">Farba interiéru</span>
            <p>Čierna koža</p>
          </div>
        </div>
      </div>
      <div className="space-y-2">
        <h3 className="font-medium">Technické údaje</h3>
        <div className="grid grid-cols-2 gap-2 text-sm">
          <div className="border-b py-2">
            <span className="text-muted-foreground">Motor</span>
            <p>3.0 SDV6</p>
          </div>
          <div className="border-b py-2">
            <span className="text-muted-foreground">Palivo</span>
            <p>Diesel</p>
          </div>
          <div className="border-b py-2">
            <span className="text-muted-foreground">Výkon</span>
            <p>225 kW / 306 k</p>
          </div>
          <div className="border-b py-2">
            <span className="text-muted-foreground">Prevodovka</span>
            <p>Automatická</p>
          </div>
          <div className="border-b py-2">
            <span className="text-muted-foreground">Pohon</span>
            <p>4x4</p>
          </div>
          <div className="border-b py-2">
            <span className="text-muted-foreground">Objem motora</span>
            <p>2 993 cm³</p>
          </div>
          <div className="border-b py-2">
            <span className="text-muted-foreground">Spotreba kombinovaná</span>
            <p>8,5 l/100 km</p>
          </div>
          <div className="border-b py-2">
            <span className="text-muted-foreground">Emisie CO₂</span>
            <p>220 g/km</p>
          </div>
          <div className="border-b py-2">
            <span className="text-muted-foreground">Max. rýchlosť</span>
            <p>209 km/h</p>
          </div>
          <div className="border-b py-2">
            <span className="text-muted-foreground">Zrýchlenie 0-100 km/h</span>
            <p>8,1 s</p>
          </div>
        </div>
      </div>
    </div>
  )
}

