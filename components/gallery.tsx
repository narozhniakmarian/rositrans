"use client"

import Image from "next/image"
import { useState } from "react"
import { X } from "lucide-react"

const images = [
  {
    src: "/images/truck.jpg",
    alt: "Samochód transportowy ROSI-TRANS",
    title: "Nowoczesna flota"
  },
  {
    src: "/images/interior.jpg",
    alt: "Wnętrze kontenera transportowego",
    title: "Przestronny kontener"
  },
  {
    src: "/images/company.jpg",
    alt: "Firma ROSI-TRANS",
    title: "Profesjonalna obsługa"
  }
]

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<typeof images[0] | null>(null)

  return (
    <section id="galeria" className="py-16 md:py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Galeria</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground" style={{ fontFamily: 'var(--font-heading)' }}>
            Nasza flota i wyposażenie
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Zobacz nasze samochody i sprzęt, którym realizujemy zlecenia transportowe.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {images.map((image) => (
            <button
              key={image.src}
              onClick={() => setSelectedImage(image)}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg cursor-pointer"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white font-semibold">{image.title}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white hover:text-white/80 transition-colors"
          >
            <X className="w-8 h-8" />
          </button>
          <div className="relative max-w-4xl max-h-[80vh] w-full">
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              width={1200}
              height={800}
              className="object-contain w-full h-full rounded-lg"
            />
            <p className="text-white text-center mt-4 font-medium">{selectedImage.title}</p>
          </div>
        </div>
      )}
    </section>
  )
}
