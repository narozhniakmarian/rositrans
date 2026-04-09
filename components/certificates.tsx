import Image from "next/image"
import { Award, Star } from "lucide-react"

const certificates = [
  {
    src: "/images/cert-orly.jpg",
    alt: "Certyfikat Orły Transportu",
    title: "Orły Transportu",
    description: "Nagroda za najwyższą jakość usług transportowych"
  },
  {
    src: "/images/cert-thanks.jpg",
    alt: "Podziękowanie",
    title: "Podziękowanie",
    description: "Za profesjonalną i rzetelną współpracę"
  }
]

export function Certificates() {
  return (
    <section id="certyfikaty" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Wyróżnienia</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground" style={{ fontFamily: 'var(--font-heading)' }}>
            Certyfikaty i nagrody
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Nasze zaangażowanie i profesjonalizm zostały docenione przez klientów i branżę transportową.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 md:mb-16">
          {[
            { value: "15+", label: "Lat doświadczenia" },
            { value: "1000+", label: "Zadowolonych klientów" },
            { value: "5m", label: "Kontener z windą" },
            { value: "24/7", label: "Dostępność" }
          ].map((stat) => (
            <div key={stat.label} className="text-center p-6 rounded-2xl bg-secondary/50">
              <p className="text-3xl sm:text-4xl font-bold text-primary" style={{ fontFamily: 'var(--font-heading)' }}>
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Certificates Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {certificates.map((cert) => (
            <div 
              key={cert.title}
              className="group bg-card rounded-2xl overflow-hidden shadow-lg border border-border/50 hover:shadow-xl transition-shadow"
            >
              <div className="relative aspect-[3/4] bg-secondary/30">
                <Image
                  src={cert.src}
                  alt={cert.alt}
                  fill
                  className="object-contain p-4"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Award className="w-5 h-5 text-primary" />
                  <h3 className="font-semibold text-foreground">{cert.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{cert.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-8">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Star className="w-5 h-5 text-primary fill-primary" />
            <span className="text-sm font-medium">Zaufana firma</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Star className="w-5 h-5 text-primary fill-primary" />
            <span className="text-sm font-medium">Ubezpieczenie OC</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Star className="w-5 h-5 text-primary fill-primary" />
            <span className="text-sm font-medium">Gwarancja jakości</span>
          </div>
        </div>
      </div>
    </section>
  )
}
