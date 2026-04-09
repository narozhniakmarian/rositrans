import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight, Check } from "lucide-react";

const features = ["Na miejsce", "Na czas", "Na pewno"];

export function Hero() {
  return (
    <section className="relative pt-20 md:pt-24 pb-16 md:pb-24 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
              <span className="text-sm font-medium text-primary">
                Usługi transportowe Opole
              </span>
            </div>

            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Profesjonalne przeprowadzki Opole{" "}
              <span className="text-primary">transport</span> z windą
            </h1>

            <h2 className="text-xl sm:text-2xl text-muted-foreground mb-4 font-medium">
              Usługi dla klienta indywidualnie - cena, sprzęt
            </h2>

            <p className="text-lg text-muted-foreground mb-8 max-w-xl leading-relaxed">
              Profesjonalny transport mebli i sprzętu AGD w Opolu. Indywidualne
              podejście do każdego klienta. Atrakcyjne ceny ustalane
              indywidualnie.
            </p>

            {/* Features */}
            <div className="flex flex-wrap gap-4 mb-8">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-2">
                  <div className="flex items-center justify-center w-5 h-5 rounded-full bg-primary/10">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-foreground">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild className="group">
                <Link href="#kontakt">
                  Zamów transport
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="tel:502215572" className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  502 215 572
                </Link>
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/truck.jpg"
                alt="Samochód transportowy ROSI-TRANS z windą załadowczą"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 bg-card p-4 rounded-xl shadow-lg border border-border hidden sm:block">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-xl font-bold text-primary">5m</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    Kontener z windą
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Załadowczo-wyładowczą
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
