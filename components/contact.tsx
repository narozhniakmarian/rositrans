import Link from "next/link"
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const contactInfo = [
  {
    icon: Phone,
    label: "Telefon",
    value: "502 215 572",
    href: "tel:502215572",
    description: "Zadzwoń, aby omówić szczegóły"
  },
  {
    icon: Mail,
    label: "E-mail",
    value: "rositrans.com@wp.pl",
    href: "mailto:rositrans.com@wp.pl",
    description: "Napisz do nas w każdej sprawie"
  },
  {
    icon: MapPin,
    label: "Lokalizacja",
    value: "Opole i okolice",
    href: "#mapa",
    description: "Działamy na terenie całego województwa"
  },
  {
    icon: Clock,
    label: "Dostępność",
    value: "Elastyczne godziny",
    href: null,
    description: "Dostosowujemy się do Twojego planu"
  }
]

export function Contact() {
  return (
    <section id="kontakt" className="py-16 md:py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Kontakt</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground" style={{ fontFamily: 'var(--font-heading)' }}>
            Skontaktuj się z nami
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Potrzebujesz transportu? Zadzwoń lub napisz - szybko odpowiemy i ustalimy szczegóły.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 md:mb-16">
          {contactInfo.map((info) => (
            <Card key={info.label} className="border-border/50 bg-card hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <info.icon className="w-6 h-6 text-primary" />
                </div>
                <p className="text-sm text-muted-foreground">{info.label}</p>
                {info.href ? (
                  <Link 
                    href={info.href} 
                    className="text-lg font-semibold text-foreground hover:text-primary transition-colors"
                  >
                    {info.value}
                  </Link>
                ) : (
                  <p className="text-lg font-semibold text-foreground">{info.value}</p>
                )}
                <p className="mt-2 text-sm text-muted-foreground">{info.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-primary rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            Potrzebujesz wyceny?
          </h3>
          <p className="text-primary-foreground/90 mb-6 max-w-xl mx-auto">
            Zadzwoń teraz i otrzymaj bezpłatną wycenę transportu. Ceny ustalamy indywidualnie - z pewnością znajdziemy rozwiązanie dla Ciebie!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild className="group">
              <Link href="tel:502215572">
                <Phone className="mr-2 h-5 w-5" />
                502 215 572
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
              <Link href="mailto:rositrans.com@wp.pl">
                <Mail className="mr-2 h-5 w-5" />
                Wyślij e-mail
              </Link>
            </Button>
          </div>
        </div>

        {/* Map */}
        <div id="mapa" className="mt-12 md:mt-16 rounded-2xl overflow-hidden shadow-lg">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2288.7663957705504!2d17.980300700000004!3d50.661119!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47105359e709e20f%3A0xe4b6f833fa1354d2!2sUs%C5%82ugi%20transportowe%2C%20Transport%20Opole%2C%20Auto%20z%20wind%C4%85%2C%20ROSI-TRANS!5e1!3m2!1suk!2spl!4v1775737716187!5m2!1suk!2spl" 
            width="100%" 
            height="450" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Lokalizacja ROSI-TRANS"
            className="w-full"
            suppressHydrationWarning
          />
        </div>
      </div>
    </section>
  )
}
