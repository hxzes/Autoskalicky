"use client"

import { Button } from "@/components/ui/button"
import { ModeToggle } from "./mode-toggle"
import Link from "next/link"
import { useState } from "react"
import { Menu, Phone } from "lucide-react"
import Image from "next/image"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import { companyInfo } from "@/lib/data"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 animate-fade-in">
      <div className="container flex h-20 items-center justify-between">
        <div className="flex items-center gap-2 animate-slide-in-left">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Otvoriť menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <div className="grid gap-4 py-4">
                <Link
                  href="/"
                  className="flex items-center gap-2 text-lg font-semibold"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Image src="/images/logo.png" alt="Auto Skalický" width={140} height={50} className="h-12 w-auto" />
                </Link>
                <nav className="grid gap-2">
                  <Link
                    href="/"
                    className="flex items-center py-2 text-lg text-primary hover:text-primary/80 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Domov
                  </Link>
                  <Link
                    href="/vozidla"
                    className="flex items-center py-2 text-lg text-primary hover:text-primary/80 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Vozidlá
                  </Link>
                  <Link
                    href="/sluzby"
                    className="flex items-center py-2 text-lg text-primary hover:text-primary/80 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Služby
                  </Link>
                  <Link
                    href="/financovanie"
                    className="flex items-center py-2 text-lg text-primary hover:text-primary/80 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Financovanie a poistenie
                  </Link>
                  <Link
                    href="/kontakt"
                    className="flex items-center py-2 text-lg text-primary hover:text-primary/80 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Kontakt
                  </Link>
                </nav>
                <div className="flex flex-col gap-2 pt-4">
                  <Button asChild>
                    <Link href="/kontakt">Dohodnite si stretnutie</Link>
                  </Button>
                  <Button variant="outline" className="gap-2">
                    <Phone className="h-4 w-4" />
                    {companyInfo.contact.phone.sales}
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/logo.png"
              alt="Auto Skalický"
              width={480}
              height={160}
              className="h-20 w-auto max-w-none"
            />
          </Link>
        </div>
        <NavigationMenu className="hidden md:flex animate-fade-in">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(
                    "group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-primary/50 data-[state=open]:bg-primary/50",
                  )}
                >
                  Domov
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="hover:bg-primary hover:text-primary-foreground">
                Vozidlá
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-primary/20 to-primary/30 p-6 no-underline outline-none focus:shadow-md"
                        href="/vozidla"
                      >
                        <div className="relative w-full h-32 mb-4">
                          <Image src="/images/cars-lineup.png" alt="Všetky vozidlá" fill className="object-contain" />
                        </div>
                        <div className="mb-2 mt-4 text-lg font-medium">Všetky vozidlá</div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Prehliadnite si našu širokú ponuku kvalitných vozidiel.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground"
                        href="/vozidla?typ=osobne"
                      >
                        <div className="text-sm font-medium leading-none">Osobné vozidlá</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Široká ponuka osobných vozidiel.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground"
                        href="/vozidla?typ=suv"
                      >
                        <div className="text-sm font-medium leading-none">SUV a crossovery</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Obľúbené SUV a crossovery pre každý terén.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground"
                        href="/vozidla?typ=kombi"
                      >
                        <div className="text-sm font-medium leading-none">Kombi</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Priestranné kombi vozidlá pre rodinu aj podnikanie.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/sluzby" legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(
                    "group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-primary/50 data-[state=open]:bg-primary/50",
                  )}
                >
                  Služby
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/financovanie" legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(
                    "group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-primary/50 data-[state=open]:bg-primary/50",
                  )}
                >
                  Financovanie a poistenie
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/kontakt" legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(
                    "group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-primary/50 data-[state=open]:bg-primary/50",
                  )}
                >
                  Kontakt
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex items-center gap-2 animate-slide-in-right">
          <ModeToggle />
        </div>
      </div>
    </header>
  )
}

