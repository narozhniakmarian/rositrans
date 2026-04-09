import Image from "next/image"
import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"

const navLinks = [
  { href: "#uslugi", label: "Usługi" },
  { href: "#o-nas", label: "O nas" },
  { href: "#galeria", label: "Galeria" },
  { href: "#certyfikaty", label: "Certyfikaty" },
  { href: "#kontakt", label: "Kontakt" },
]

const services = [
  "Przeprowadzki mieszkań",
  "Przeprowadzki biur",
  "Przeprowadzki sklepów",
  "Przeprowadzki magazynów",
  "Przewóz mebli",
  "Transport towarów"
]

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Image
              src="/images/logo.png"
              alt="ROSI-TRANS Logo"
              width={180}
              height={50}
              className="h-12 w-auto brightness-0 invert mb-4"
            />
            <p className="text-background/70 text-sm leading-relaxed">
              Profesjonalne usługi transportowe i przeprowadzki w Opolu i okolicach. Na miejsce, na czas, na pewno!
            </p>
            <div className="mt-6 space-y-3">
              <Link href="tel:502215572" className="flex items-center gap-2 text-sm text-background/80 hover:text-background transition-colors">
                <Phone className="w-4 h-4" />
                502 215 572
              </Link>
              <Link href="mailto:rositrans.com@wp.pl" className="flex items-center gap-2 text-sm text-background/80 hover:text-background transition-colors">
                <Mail className="w-4 h-4" />
                rositrans.com@wp.pl
              </Link>
              <div className="flex items-center gap-2 text-sm text-background/80">
                <MapPin className="w-4 h-4" />
                Opole i okolice
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-background mb-4">Nawigacja</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-sm text-background/70 hover:text-background transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-background mb-4">Usługi</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-sm text-background/70">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact CTA */}
          <div>
            <h4 className="font-semibold text-background mb-4">Zamów transport</h4>
            <p className="text-sm text-background/70 mb-4">
              Potrzebujesz przeprowadzki lub transportu? Zadzwoń teraz - szybko i tanio!
            </p>
            <Link
              href="tel:502215572"
              className="inline-flex items-center justify-center w-full px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
            >
              <Phone className="w-4 h-4 mr-2" />
              Zadzwoń teraz
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-background/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-background/60">
              © {new Date().getFullYear()} ROSI-TRANS. Wszystkie prawa zastrzeżone.
            </p>
            <div className="flex items-center gap-4">
              <Link 
                href="/polityka-prywatnosci" 
                className="text-sm text-background/60 hover:text-background transition-colors"
              >
                Polityka prywatności
              </Link>
              <span className="text-background/30">|</span>
              <p className="text-sm text-background/60">
                Na miejsce • Na czas • Na pewno
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
