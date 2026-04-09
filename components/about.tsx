import Image from "next/image"
import { Check, Shield, Clock, Banknote } from "lucide-react"

const benefits = [
  {
    icon: Shield,
    title: "Bezpieczeństwo",
    description: "Pasy zabezpieczające ładunek i profesjonalny sprzęt"
  },
  {
    icon: Clock,
    title: "Punktualność",
    description: "Na miejsce, na czas, na pewno - to nasze motto"
  },
  {
    icon: Banknote,
    title: "Atrakcyjne ceny",
    description: "Ceny ustalane indywidualnie dla każdego klienta"
  }
]

const features = [
  "Pięciometrowy kontener z windą załadowczo-wyładowczą",
  "Wózek paletowy na wyposażeniu",
  "Pasy zabezpieczające ładunek",
  "Wieloletnie doświadczenie w transporcie",
  "Ubezpieczenie przewożonych towarów",
  "Obsługa firm i klientów indywidualnych"
]

export function About() {
  return (
    <section id="o-nas" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/interior.jpg"
                    alt="Wnętrze kontenera ROSI-TRANS"
                    width={470}
                    height={626}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
              <div className="pt-8">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/company.jpg"
                    alt="Flota ROSI-TRANS"
                    width={470}
                    height={353}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="text-sm font-medium text-primary uppercase tracking-wider">O firmie</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground" style={{ fontFamily: 'var(--font-heading)' }}>
              Dlaczego ROSI-TRANS?
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Jesteśmy firmą transportową z wieloletnim doświadczeniem. Specjalizujemy się w przeprowadzkach mieszkań, biur, sklepów i magazynów na terenie Opola i okolic.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Nasza flota wyposażona jest w nowoczesne samochody z windą załadowczo-wyładowczą, co pozwala na bezpieczny transport nawet najcięższych przedmiotów.
            </p>

            {/* Benefits */}
            <div className="mt-8 grid sm:grid-cols-3 gap-6">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="text-center sm:text-left">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3 mx-auto sm:mx-0">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground">{benefit.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </div>

            {/* Features list */}
            <div className="mt-8 grid sm:grid-cols-2 gap-3">
              {features.map((feature) => (
                <div key={feature} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-sm text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
