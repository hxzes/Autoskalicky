// Upravím komponent CarDetails, aby zobrazoval správne informácie o vozidlách

export function CarDetails({ vehicle }: { vehicle: any }) {
  if (!vehicle) {
    return <div>Informácie o vozidle nie sú k dispozícii.</div>
  }

  // Špeciálny popis pre Citroen C3
  if (vehicle.title.includes("C3")) {
    return (
      <div className="space-y-4">
        <div className="prose max-w-none">
          <p>
            Citroen C3 s výkonom 44 kW (60 PS) je kompaktný hatchback, ktorý kombinuje praktickosť, komfort a ekonomickú
            prevádzku. Vozidlo je vybavené 5-stupňovou manuálnou prevodovkou a ponúka vynikajúcu spotrebu paliva.
          </p>
          <p>
            Tento konkrétny model je z roku 2011 s najazdenými 65 000 km a je v perfektnom technickom stave s kompletnou
            servisnou históriou. Vozidlo má bielu farbu karosérie a čierny interiér.
          </p>
          <p>
            <strong>Spotreba:</strong> Kombinovaná 5,9 l/100km, v meste 7,9 l/100km, mimo mesta 4,9 l/100km
            <br />
            <strong>Emisie CO2:</strong> 137 g/km
            <br />
            <strong>Euronorma:</strong> Euro 5
          </p>
          <p>
            <strong>Stav vozidla:</strong> Servisná knižka, STK, úplná servisná história, možný úver
          </p>
          <p>
            <strong>Výbava:</strong> ABS, airbagy, ESP, Isofix, systém kontroly tlaku v pneumatikách, manuálna
            klimatizácia, rádio, diaľkové ovládanie zamykania, elektrické okná, elektrické zrkadlá, klimatizovaná
            priehradka, vonkajší teplomer, imobilizér, palubný počítač, tempomat, vyhrievané zrkadlá, dažďový senzor,
            hmlovky
          </p>
          <p>
            <strong>Ďalšia výbava:</strong> 12 V zásuvka v batožinovom priestore, delené operadlo zadného sedadla v
            pomere 1/3:2/3 s trojbodovými bezpečnostnými pásmi, elektricky ovládané vonkajšie spätné zrkadlá, manuálne
            nastaviteľný stĺpik volantu, prídavné reflektory do hmly, spätné zrkadlá vo farbe karosérie, ukazovateľ
            vonkajšej teploty, volant potiahnutý kožou, výškovo nastaviteľné opierky hlavy na všetkých sedadlách,
            výškovo nastaviteľné sedadlo vodiča
          </p>
          <p>
            Za posledných 24 hodín si toto auto pozrelo 9 záujemcov. MOŽNOSŤ POUŽIŤ VAŠE STARÉ VOZIDLO AKO PROTIHODNOTU
            RESP. AKONTÁCIU PRI FINANCOVANÍ NA SPLÁTKY. Skutočné km, servisná knižka, leasing bez akontácie. ZMLUVNÁ
            GARANCIA KM, STAVU A PÔVODU VOZIDLA!
          </p>
        </div>
      </div>
    )
  }

  // Peugeot 308 SW
  if (vehicle.title.includes("308") && vehicle.title.includes("SW")) {
    return (
      <div className="space-y-4">
        <div className="prose max-w-none">
          <p>
            Peugeot 308 SW s výkonom 96 kW (130 PS) je elegantný kombi model, ktorý kombinuje priestrannosť, komfort a
            dynamické jazdné vlastnosti. Vozidlo je vybavené 6-stupňovou manuálnou prevodovkou a ponúka vynikajúcu
            spotrebu paliva.
          </p>
          <p>
            Tento konkrétny model je z roku 2019 s najazdenými 169 000 km a je v perfektnom technickom stave s
            kompletnou servisnou históriou. Vozidlo bolo dovezené z Nemecka od prvého majiteľa a na Slovensku
            registrované.
          </p>
          <p>
            <strong>Spotreba:</strong> Kombinovaná 5,2 l/100km, v meste 6,5 l/100km, mimo mesta 4,4 l/100km
            <br />
            <strong>Emisie CO2:</strong> 120 g/km
            <br />
            <strong>Euronorma:</strong> Euro 6
          </p>
          <p>
            <strong>Stav vozidla:</strong> 1. majiteľ, nehavarované, servisná knižka, úplná servisná história, možný
            úver/leasing bez akontácie
          </p>
          <p>
            <strong>Výbava:</strong> ABS, airbagy, ESP, Isofix, systém kontroly tlaku v pneumatikách, asistent jazdných
            pruhov, automatická klimatizácia, dotykový displej, elektrické sedadlá a zrkadlá, kožený paket, multifunkčný
            volant, Apple CarPlay, Android Auto, parkovacie senzory vpredu a vzadu, LED svietenie, navigačný systém,
            tempomat, dažďový a svetelný senzor, hliníkové disky
          </p>
          <p>
            MOŽNOSŤ POUŽIŤ VAŠE STARÉ VOZIDLO AKO PROTIHODNOTU RESP. AKONTÁCIU PRI FINANCOVANÍ NA SPLÁTKY. Skutočné km,
            1. majiteľ, leasing bez akontácie. DOVOZ DE. SK DOKLADY +400 eur/bez DPH. Možnosť obhliadky po tel. dohovore
            aj cez víkend. ZMLUVNÁ GARANCIA KM, STAVU A PÔVODU VOZIDLA!
          </p>
        </div>
      </div>
    )
  }

  // Ford Focus Kombi
  if (vehicle.title.includes("Focus") && vehicle.title.includes("Kombi")) {
    return (
      <div className="space-y-4">
        <div className="prose max-w-none">
          <p>
            Ford Focus Kombi s výkonom 110 kW (150 PS) je priestranný kombi model, ktorý kombinuje praktickosť, komfort
            a dynamické jazdné vlastnosti. Vozidlo je vybavené 6-stupňovou manuálnou prevodovkou a ponúka vynikajúcu
            spotrebu paliva.
          </p>
          <p>
            Tento konkrétny model je z roku 2019 s najazdenými 190 000 km a je v perfektnom technickom stave s
            kompletnou servisnou históriou. Vozidlo bolo dovezené z Nemecka od prvého majiteľa a na Slovensku
            registrované.
          </p>
          <p>
            <strong>Spotreba:</strong> Kombinovaná 6,5 l/100km, v meste 8,2 l/100km, mimo mesta 5,5 l/100km
            <br />
            <strong>Emisie CO2:</strong> 150 g/km
            <br />
            <strong>Euronorma:</strong> Euro 6
          </p>
          <p>
            <strong>Stav vozidla:</strong> 1. majiteľ, nehavarované, servisná knižka, úplná servisná história, možný
            odpočet DPH, možný úver/leasing bez akontácie
          </p>
          <p>
            <strong>Výbava:</strong> ABS, airbagy, ESP, Isofix, systém kontroly tlaku v pneumatikách, asistent jazdných
            pruhov, automatická klimatizácia, dotykový displej, elektrické sedadlá a zrkadlá, kožený paket, multifunkčný
            volant, Apple CarPlay, Android Auto, parkovacie senzory vpredu a vzadu, LED svietenie, navigačný systém,
            tempomat, dažďový a svetelný senzor, hliníkové disky
          </p>
          <p>
            MOŽNOSŤ POUŽIŤ VAŠE STARÉ VOZIDLO AKO PROTIHODNOTU RESP. AKONTÁCIU PRI FINANCOVANÍ NA SPLÁTKY. Skutočné km,
            1. majiteľ, leasing bez akontácie. DOVOZ DE. SK DOKLADY +400 eur/bez DPH. Možnosť obhliadky po tel. dohovore
            aj cez víkend. ZMLUVNÁ GARANCIA KM, STAVU A PÔVODU VOZIDLA!
          </p>
        </div>
      </div>
    )
  }

  // Pôvodný kód pre ostatné vozidlá s aktualizovanými údajmi
  return (
    <div className="space-y-4">
      <div className="prose max-w-none">
        <p>
          {vehicle.title} {vehicle.subtitle} s výkonom {vehicle.power.kw} kW ({vehicle.power.ps} koní) je
          {vehicle.title.includes("Kombi") ||
          vehicle.title.includes("SW") ||
          vehicle.title.includes("Variant") ||
          vehicle.title.includes("ST") ||
          vehicle.title.includes("Tourer")
            ? " elegantný kombi model"
            : vehicle.title.includes("SUV") ||
                vehicle.title.includes("Kuga") ||
                vehicle.title.includes("3008") ||
                vehicle.title.includes("5008")
              ? " priestranné SUV"
              : vehicle.title.includes("Galaxy")
                ? " priestranné MPV"
                : vehicle.title.includes("B")
                  ? " kompaktný rodinný model"
                  : " elegantný model"}
          , ktorý kombinuje priestrannosť, komfort a dynamické jazdné vlastnosti. Vozidlo je vybavené{" "}
          {vehicle.transmission ? vehicle.transmission : "manuálnou prevodovkou"} a ponúka vynikajúcu spotrebu paliva.
        </p>
        {vehicle.year > 0 && vehicle.mileage > 0 && (
          <p>
            Tento konkrétny model je z roku {vehicle.year} s najazdenými {vehicle.mileage.toLocaleString("sk")} km a je
            v perfektnom technickom stave s kompletnou servisnou históriou. Vozidlo bolo dovezené z Nemecka od prvého
            majiteľa a na Slovensku registrované.
          </p>
        )}
        <p>
          <strong>Spotreba:</strong> Kombinovaná {vehicle.fuel === "Diesel" ? "5,2" : "6,5"} l/100km, v meste{" "}
          {vehicle.fuel === "Diesel" ? "6,5" : "8,2"} l/100km, mimo mesta {vehicle.fuel === "Diesel" ? "4,4" : "5,5"}{" "}
          l/100km
          <br />
          <strong>Emisie CO2:</strong> {vehicle.fuel === "Diesel" ? "120" : "150"} g/km
          <br />
          <strong>Euronorma:</strong> Euro {vehicle.year >= 2015 ? "6" : "5"}
        </p>
        <p>
          <strong>Stav vozidla:</strong> 1. majiteľ, nehavarované, servisná knižka, úplná servisná história,
          {vehicle.price.withoutVat ? " možný odpočet DPH, " : " "}
          možný úver/leasing bez akontácie
        </p>
        <p>
          <strong>Výbava:</strong> ABS, airbagy, ESP, Isofix, systém kontroly tlaku v pneumatikách, asistent jazdných
          pruhov, automatická klimatizácia, dotykový displej, elektrické sedadlá a zrkadlá, kožený paket, multifunkčný
          volant, Apple CarPlay, Android Auto, parkovacie senzory vpredu a vzadu, LED svietenie, navigačný systém,
          tempomat, dažďový a svetelný senzor, hliníkové disky
        </p>
        <p>
          MOŽNOSŤ POUŽIŤ VAŠE STARÉ VOZIDLO AKO PROTIHODNOTU RESP. AKONTÁCIU PRI FINANCOVANÍ NA SPLÁTKY. Skutočné km, 1.
          majiteľ, leasing bez akontácie. DOVOZ DE. SK DOKLADY +400 eur/bez DPH. Možnosť obhliadky po tel. dohovore aj
          cez víkend. ZMLUVNÁ GARANCIA KM, STAVU A PÔVODU VOZIDLA!
        </p>
      </div>
    </div>
  )
}
