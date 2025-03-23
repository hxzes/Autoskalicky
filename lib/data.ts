export type Vehicle = {
  id: number
  title: string
  subtitle?: string
  fuel: string
  transmission: string
  mileage: number
  power: {
    kw: number
    ps: number
  }
  year: number
  price: {
    withVat: number
    withoutVat?: number
  }
  date: string
  isNew?: boolean
  isAction?: boolean
  image: string
}

export const vehicles: Vehicle[] = [
  {
    id: 21,
    title: "Volkswagen Golf Variant",
    subtitle: "1.6 TDI Comfortline",
    fuel: "Diesel",
    transmission: "", // Removed transmission details
    mileage: 0, // Set to 0 to hide mileage
    power: {
      kw: 77,
      ps: 105,
    },
    year: 0, // Set to 0 to hide year
    price: {
      withVat: 11990,
    },
    date: "24.03.2025",
    isNew: true,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-8Khtnd1NWLMOP3hat68g8JxXggR5Nm.png",
  },
  {
    id: 12,
    title: "Ford Kuga",
    subtitle: "1.5 EcoBoost Titanium",
    fuel: "Benzín",
    transmission: "6-st. manuál",
    mileage: 170000,
    power: {
      kw: 88,
      ps: 120,
    },
    year: 2022,
    price: {
      withVat: 12999,
    },
    date: "17.03.2025",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_4-lskuNLMjvGbMuxq5j8azYg0wONAbP5.png",
  },
  {
    id: 13,
    title: "Peugeot 308 SW",
    subtitle: "2.0 BlueHDi GT Line",
    fuel: "Diesel",
    transmission: "6-st. manuál",
    mileage: 171000,
    power: {
      kw: 110,
      ps: 150,
    },
    year: 2019,
    price: {
      withVat: 13699,
    },
    date: "21.03.2025",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_8-F2K3S2jSjclax9AnG7bbNCtOkTs1T5.png",
  },
  {
    id: 11,
    title: "Ford Focus Combi",
    subtitle: "1.5 EcoBoost Titanium",
    fuel: "Benzín",
    transmission: "6-st. automat",
    mileage: 135000,
    power: {
      kw: 110,
      ps: 150,
    },
    year: 2022,
    price: {
      withVat: 19999,
      withoutVat: 16259,
    },
    date: "01.03.2025",
    isAction: true,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2-KkAAjVLqwLp19z9J4kBSaDeIhrjYCJ.png",
  },
  {
    id: 14,
    title: "Peugeot 5008",
    subtitle: "1.6 BlueHDi Allure",
    fuel: "Diesel",
    transmission: "6-st. automat",
    mileage: 160000,
    power: {
      kw: 88,
      ps: 120,
    },
    year: 2020,
    price: {
      withVat: 15699,
    },
    date: "10.03.2025",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_9-pLbr0hyRbVBL0s7a800tfJOOPngHas.png",
  },
  {
    id: 20,
    title: "Ford Galaxy",
    subtitle: "2.0 TDCi Titanium",
    fuel: "Diesel",
    transmission: "6-st. manuál",
    mileage: 187000,
    power: {
      kw: 110,
      ps: 150,
    },
    year: 2020,
    price: {
      withVat: 14399,
    },
    date: "03.03.2025",
    isNew: true,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_3-9LHISQ0BSwF78FTH1lmH6Q8aeLD2R5.png",
  },
  {
    id: 19,
    title: "Peugeot 3008",
    subtitle: "1.6 BlueHDi Active",
    fuel: "Diesel",
    transmission: "6-st. manuál",
    mileage: 171000,
    power: {
      kw: 88,
      ps: 120,
    },
    year: 2018,
    price: {
      withVat: 12999,
      withoutVat: 10568,
    },
    date: "08.03.2025",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_7-EcIT0YhHKXfRuuIR8uQYuo7KAtflyu.png",
  },
  {
    id: 15,
    title: "Mercedes-Benz B",
    subtitle: "180 CDI BlueEFFICIENCY",
    fuel: "Diesel",
    transmission: "6-st. manuál",
    mileage: 165000,
    power: {
      kw: 80,
      ps: 109,
    },
    year: 2019,
    price: {
      withVat: 12999,
    },
    date: "10.03.2025",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_5-8i8gQS7CdeFD7UilKf4gzHtJrOg1Gp.png",
  },
  {
    id: 17,
    title: "Citroën C3",
    subtitle: "1.2 PureTech Feel",
    fuel: "Benzín",
    transmission: "5-st. manuál",
    mileage: 149900,
    power: {
      kw: 60,
      ps: 82,
    },
    year: 2020,
    price: {
      withVat: 16499,
    },
    date: "30.01.2025",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_1-8h1sr9i2Fgp5Pd9uBKQHWVu4pUbsrO.png",
  },
  {
    id: 16,
    title: "Seat Ateca",
    subtitle: "1.5 TSI FR",
    fuel: "Benzín",
    transmission: "6-st. manuál",
    mileage: 177000,
    power: {
      kw: 110,
      ps: 150,
    },
    year: 2018,
    price: {
      withVat: 12699,
    },
    date: "19.03.2025",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_10-GSZjWpimosXD2EamkJ2JAVDn1dHicy.png",
  },
]

export const companyInfo = {
  name: "Auto Skalický",
  address: {
    street: "Čingov 873/110",
    city: "Močenok",
    country: "Slovakia",
  },
  contact: {
    email: "info@autoskalicky.sk",
    phone: {
      sales: "+421 915 742 062",
      service: "+421 908 158 441",
    },
    salesPerson: "Dávid Skalický",
    servicePerson: "Roman Skalický",
  },
  openingHours: {
    weekdays: "9:00 - 17:00",
    saturday: "9:00 - 12:00",
    sunday: "Zatvorené",
  },
  website: "autoskalicky.sk",
}

export const faqItems = [
  {
    question: "Aké služby ponúkate v rámci autoservisu?",
    answer:
      "Naše služby zahŕňajú pneuservis, autoservis, tepovanie a leštenie. Naši skúsení mechanici sú pripravení zabezpečiť, aby vaše vozidlo bolo vždy v najlepšom stave.",
  },
  {
    question: "Ako si môžem dohodnúť stretnutie na opravu vozidla?",
    answer:
      'Stretnutie si môžete dohodnúť jednoducho kliknutím na tlačidlo "Dohodnite si stretnutie" na našej webovej stránke, alebo nám zavolajte.',
  },
  {
    question: "Čo mám robiť, ak moje auto potrebuje odťah?",
    answer:
      "Ak potrebujete odťahovú službu, kontaktujte nás okamžite. Naša odťahová služba je k dispozícii, aby vám pomohla v prípade núdze a zabezpečila rýchly a bezpečný transport vášho vozidla do nášho servisu.",
  },
  {
    question: "Aké možnosti financovania ponúkate?",
    answer:
      "Ponúkame výhodné financovanie vozidiel na splátky s akontáciou už od 0%, bez skrytých poplatkov a s možnosťou predčasného splatenia bez poplatkov. Doba splácania je flexibilná až do 96 mesiacov.",
  },
  {
    question: "Poskytujete poistenie vozidiel?",
    answer:
      "Áno, ponúkame komplexné poistenie vozidiel vrátane zákonného a havarijného poistenia. Spolupracujeme s 15 poisťovňami, aby sme vám mohli ponúknuť najvýhodnejšie podmienky.",
  },
]

export const services = {
  primary: [
    {
      title: "Predaj vozidiel",
      description: "Široká ponuka kvalitných vozidiel z Nemecka s kompletnou servisnou históriou.",
    },
    {
      title: "Dovoz vozidiel",
      description: "Dovoz vozidiel na objednávku podľa vašich požiadaviek.",
    },
    {
      title: "Odťahová služba",
      description: "Rýchla a spoľahlivá odťahová služba v prípade poruchy alebo nehody.",
    },
  ],
  repair: [
    {
      title: "Pneuservis",
      description: "Kompletný pneuservis vrátane prezutia, vyváženia a opravy pneumatík.",
    },
    {
      title: "Tepovanie",
      description: "Profesionálne tepovanie interiéru vozidla s použitím kvalitných čistiacich prostriedkov.",
    },
    {
      title: "Leštenie",
      description: "Leštenie karosérie a renovácia laku pre dokonalý vzhľad vášho vozidla.",
    },
  ],
}

export const financingInfo = {
  title: "Financovanie vozidla na splátky a kompletné poistenie vozidla",
  subtitle: "Vybavíme vám ten najvýhodnejší auto-úver na trhu aj na počkanie.",
  features: [
    "Akontácia už od 0%",
    "Bez skrytých poplatkov",
    "Doba splácania až do 96% (s možnosťou predčasného splatenia bez poplatkov)",
    "Možnosť úveru aj na motorky, skútre a štvorkolky",
  ],
  callToAction: "Neváhajte nás kontaktovať a my vám radi vypracujeme ponuku na mieru podľa vašich požiadaviek",
}

