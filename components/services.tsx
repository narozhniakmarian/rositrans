import {
  Building2,
  Home,
  Store,
  Warehouse,
  Sofa,
  ShoppingCart,
  Refrigerator,
  Truck,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const services = [
  {
    icon: Home,
    title: "Przeprowadzki mieszkań",
    description:
      "Wieloletnie doświadczenie w transporcie towarowym. Kompleksowa obsługa od pakowania po rozładunek.",
    highlight: "Wieloletnie doświadczenie",
  },
  {
    icon: Building2,
    title: "Przeprowadzki biur",
    description:
      "Atrakcyjne ceny, ustalane indywidualnie! Profesjonalne przenoszenie sprzętu biurowego i dokumentów.",
    highlight: "Ceny indywidualne",
  },
  {
    icon: Store,
    title: "Przeprowadzki sklepów",
    description:
      "Pięciometrowy kontener z windą załadowczo-wyładowczą. Idealny do transportu towaru sklepowego.",
    highlight: "Kontener z windą",
  },
  {
    icon: Warehouse,
    title: "Przeprowadzki magazynów",
    description:
      "Na wyposażeniu auta wózek paletowy oraz pasy zabezpieczające ładunek. Bezpieczny transport.",
    highlight: "Wózek paletowy",
  },
  {
    icon: Sofa,
    title: "Przewóz mebli",
    description:
      "Zapewniam rzetelne i indywidualne podejście do każdego klienta oraz atrakcyjne ceny.",
    highlight: "Indywidualne podejście",
  },
  {
    icon: ShoppingCart,
    title: "Przewóz zakupów",
    description:
      "Usługi transportowe, przewóz rzeczy, odbiór i dostawa towaru. Szybko i bezpiecznie.",
    highlight: "Odbiór i dostawa",
  },
  {
    icon: Refrigerator,
    title: "Przewóz sprzętu AGD",
    description:
      "Potrzebujesz transportu? Zapraszam do współpracy! Profesjonalna obsługa sprzętu wielkogabarytowego.",
    highlight: "Sprzęt wielkogabarytowy",
  },
  {
    icon: Truck,
    title: "Usługi transportowe",
    description:
      "Tanio, szybko, solidnie. Kompleksowe usługi transportowe dla firm i osób prywatnych.",
    highlight: "Tanio i szybko",
  },
];

export function Services() {
  return (
    <section id="uslugi" className="py-16 md:py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2
            className="mt-3 text-3xl sm:text-4xl font-bold text-foreground"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Nasze usługi
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Oferujemy szeroki zakres usług transportowych i przeprowadzkowych.
            Każde zlecenie traktujemy indywidualnie.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <Card
              key={service.title}
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50 bg-card"
            >
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-lg font-semibold text-foreground">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
                <div className="mt-4 inline-flex items-center px-3 py-1 rounded-full bg-primary/5 text-xs font-medium text-primary">
                  {service.highlight}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
