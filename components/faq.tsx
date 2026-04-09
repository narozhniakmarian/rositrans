"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { FAQSchema } from "./seo-schema"

const faqs = [
  {
    question: "Ile kosztuje przeprowadzka w Opolu?",
    answer: "Cena przeprowadzki ustalana jest indywidualnie i zależy od wielu czynników: odległości, ilości rzeczy do przewiezienia, piętra oraz potrzeby dodatkowych usług. Oferujemy konkurencyjne ceny i bezpłatną wycenę. Zadzwoń pod numer 502 215 572, aby uzyskać dokładną wycenę."
  },
  {
    question: "Czy oferujecie przeprowadzki na terenie całej Polski?",
    answer: "Tak, realizujemy przeprowadzki nie tylko w Opolu i województwie opolskim, ale także na terenie całego kraju. Obsługujemy trasy do Wrocławia, Katowic, Warszawy, Krakowa i innych miast. Skontaktuj się z nami, aby omówić szczegóły."
  },
  {
    question: "Co wyróżnia ROSI-TRANS na tle konkurencji?",
    answer: "Dysponujemy pięciometrowym kontenerem z windą załadowczo-wyładowczą, co znacznie ułatwia i przyspiesza załadunek ciężkich przedmiotów. Posiadamy również wózek paletowy i profesjonalne pasy zabezpieczające ładunek. Wieloletnie doświadczenie gwarantuje rzetelność i bezpieczeństwo."
  },
  {
    question: "Jak długo trwa typowa przeprowadzka?",
    answer: "Czas przeprowadzki zależy od wielkości mieszkania lub biura oraz ilości rzeczy. Przeprowadzka małego mieszkania (kawalerka, 1-pokojowe) trwa zazwyczaj 2-4 godziny. Większe mieszkania i domy mogą wymagać całego dnia pracy. Zawsze staramy się działać sprawnie i terminowo."
  },
  {
    question: "Czy mogę zamówić tylko transport mebli bez pełnej przeprowadzki?",
    answer: "Oczywiście! Oferujemy zarówno kompleksowe przeprowadzki, jak i pojedyncze usługi transportowe - przewóz mebli, sprzętu AGD, większych zakupów czy odbiór i dostawę towaru. Elastycznie dopasowujemy się do potrzeb klienta."
  },
  {
    question: "Jak zabezpieczacie rzeczy podczas transportu?",
    answer: "Dysponujemy profesjonalnymi pasami zabezpieczającymi ładunek oraz materiałami ochronnymi. Meble i delikatne przedmioty są starannie zabezpieczane przed uszkodzeniem. Nasz samochód posiada windę załadowczą, co minimalizuje ryzyko uszkodzeń podczas załadunku i rozładunku."
  },
  {
    question: "Czy wykonujecie przeprowadzki biur i firm?",
    answer: "Tak, specjalizujemy się w przeprowadzkach biur, sklepów i magazynów. Rozumiemy, że dla firm czas to pieniądz, dlatego staramy się minimalizować przestoje w działalności. Oferujemy elastyczne terminy, również w weekendy i wieczorami."
  },
  {
    question: "Jak mogę zamówić przeprowadzkę?",
    answer: "Najszybciej skontaktujesz się z nami telefonicznie pod numerem 502 215 572 lub mailowo na adres rositrans.com@wp.pl. Omówimy szczegóły, ustalimy termin i przedstawimy wycenę. Możesz również wysłać zapytanie przez formularz na naszej stronie."
  }
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="py-20 bg-background">
      <FAQSchema faqs={faqs} />
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 mb-4 text-sm font-medium text-primary bg-primary/10 rounded-full">
            Pytania i odpowiedzi
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            Najczęściej zadawane pytania
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Odpowiadamy na pytania, które najczęściej zadają nasi klienci. 
            Jeśli nie znajdziesz odpowiedzi na swoje pytanie, skontaktuj się z nami.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="border-b border-border last:border-b-0"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full py-5 flex items-center justify-between text-left group"
                aria-expanded={openIndex === index}
              >
                <h3 className="text-lg font-semibold text-foreground pr-8 group-hover:text-primary transition-colors">
                  {faq.question}
                </h3>
                <ChevronDown 
                  className={`w-5 h-5 text-muted-foreground transition-transform duration-200 flex-shrink-0 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div 
                className={`overflow-hidden transition-all duration-200 ${
                  openIndex === index ? 'max-h-96 pb-5' : 'max-h-0'
                }`}
              >
                <p className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Masz inne pytanie? Chętnie na nie odpowiemy!
          </p>
          <a 
            href="tel:502215572"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors"
          >
            Zadzwoń: 502 215 572
          </a>
        </div>
      </div>
    </section>
  )
}
