import { Car, Users, Clock, Award } from "lucide-react"

export function Stats() {
  return (
    <div className="mt-16">
      <div className="rounded-xl bg-primary p-6 md:p-8 lg:p-10">
        <div className="grid gap-8 text-primary-foreground sm:grid-cols-2 lg:grid-cols-4">
          <div className="text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary-foreground/10">
              <Car className="h-6 w-6" />
            </div>
            <div className="mt-4">
              <div className="text-3xl font-bold">500+</div>
              <div className="text-primary-foreground/80">Predaných vozidiel</div>
            </div>
          </div>
          <div className="text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary-foreground/10">
              <Users className="h-6 w-6" />
            </div>
            <div className="mt-4">
              <div className="text-3xl font-bold">1000+</div>
              <div className="text-primary-foreground/80">Spokojných zákazníkov</div>
            </div>
          </div>
          <div className="text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary-foreground/10">
              <Clock className="h-6 w-6" />
            </div>
            <div className="mt-4">
              <div className="text-3xl font-bold">13+</div>
              <div className="text-primary-foreground/80">Rokov skúseností</div>
            </div>
          </div>
          <div className="text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary-foreground/10">
              <Award className="h-6 w-6" />
            </div>
            <div className="mt-4">
              <div className="text-3xl font-bold">100%</div>
              <div className="text-primary-foreground/80">Kvalitné služby</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

