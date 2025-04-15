import { Button } from "@/components/ui/button"
import Link from "next/link"

export function ServicesSection() {
  return (
    <div className="mt-16 relative overflow-hidden rounded-xl">
      {/* Background with gradient and image overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70"></div>

      <div className="relative z-10 py-12 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-lg font-medium text-white uppercase tracking-wider">Služby</h2>
            <h3 className="mt-2 text-4xl font-bold text-white">Čo robíme</h3>
            <div className="mt-4 mx-auto w-24 h-1 bg-white rounded-full"></div>
            <p className="mt-6 text-white/80 max-w-2xl mx-auto">
              Ponúkame komplexné služby v oblasti predaja a servisu vozidiel s dôrazom na kvalitu a spokojnosť
              zákazníka.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white/95 dark:bg-background/95 backdrop-blur-sm rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border border-white/20 dark:border-gray-800">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-primary"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"></path>
                  <circle cx="7" cy="17" r="2"></circle>
                  <path d="M9 17h6"></path>
                  <circle cx="17" cy="17" r="2"></circle>
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-2 text-foreground">Predaj vozidiel</h4>
              <p className="text-muted-foreground">
                Široká ponuka kvalitných vozidiel z Nemecka s kompletnou servisnou históriou.
              </p>
            </div>

            <div className="bg-white/95 dark:bg-background/95 backdrop-blur-sm rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border border-white/20 dark:border-gray-800">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-primary"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-2 text-foreground">Servis vozidiel</h4>
              <p className="text-muted-foreground">Profesionálny servis a údržba vozidiel všetkých značiek.</p>
            </div>

            <div className="bg-white/95 dark:bg-background/95 backdrop-blur-sm rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border border-white/20 dark:border-gray-800">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-primary"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="5" width="20" height="14" rx="2"></rect>
                  <line x1="2" y1="10" x2="22" y2="10"></line>
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-2 text-foreground">Financovanie</h4>
              <p className="text-muted-foreground">Pomôžeme vám s financovaním vášho vozidla za výhodných podmienok.</p>
            </div>

            <div className="bg-white/95 dark:bg-background/95 backdrop-blur-sm rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border border-white/20 dark:border-gray-800">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-primary"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-2 text-foreground">Poistenie</h4>
              <p className="text-muted-foreground">Zákonné aj havarijné poistenie pre vaše vozidlo na jednom mieste.</p>
            </div>

            <div className="bg-white/95 dark:bg-background/95 backdrop-blur-sm rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border border-white/20 dark:border-gray-800">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-primary"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-2 text-foreground">Odťahová služba</h4>
              <p className="text-muted-foreground">
                Rýchla a spoľahlivá odťahová služba v prípade poruchy alebo nehody.
              </p>
            </div>

            <div className="bg-white/95 dark:bg-background/95 backdrop-blur-sm rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border border-white/20 dark:border-gray-800">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-primary"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path>
                  <line x1="4" y1="22" x2="4" y2="15"></line>
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-2 text-foreground">Pneuservis</h4>
              <p className="text-muted-foreground">
                Kompletný pneuservis vrátane prezutia, vyváženia a opravy pneumatík.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button
              asChild
              className="bg-white text-primary hover:bg-white/90 dark:bg-background dark:hover:bg-background/90"
            >
              <Link href="/sluzby">Všetky služby</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
