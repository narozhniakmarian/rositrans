import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Polityka Prywatności | ROSI-TRANS",
  description: "Polityka prywatności i informacje o plikach cookies na stronie ROSI-TRANS",
}

export default function PolitykaPrywatnosci() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/logo.png"
              alt="ROSI-TRANS Logo"
              width={50}
              height={50}
              className="h-12 w-auto"
            />
            <span className="text-xl font-bold text-foreground">ROSI-TRANS</span>
          </Link>
          <Button variant="ghost" asChild>
            <Link href="/" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Powrót
            </Link>
          </Button>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 py-12 md:py-16">
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-8 text-3xl font-bold text-foreground md:text-4xl">
            Polityka Prywatności
          </h1>

          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="text-lg leading-relaxed">
              Niniejsza Polityka Prywatności określa zasady przetwarzania i ochrony danych osobowych 
              przekazanych przez Użytkowników w związku z korzystaniem ze strony internetowej ROSI-TRANS.
            </p>

            <h2 className="mt-10 mb-4 text-2xl font-semibold text-foreground">
              1. Administrator Danych
            </h2>
            <p>
              Administratorem danych osobowych jest ROSI-TRANS z siedzibą w Opolu.
              Kontakt z administratorem możliwy jest pod adresem e-mail:{" "}
              <a href="mailto:rositrans.com@wp.pl" className="text-primary hover:underline">
                rositrans.com@wp.pl
              </a>{" "}
              lub telefonicznie:{" "}
              <a href="tel:+48502215572" className="text-primary hover:underline">
                502 215 572
              </a>.
            </p>

            <h2 className="mt-10 mb-4 text-2xl font-semibold text-foreground">
              2. Zakres zbieranych danych
            </h2>
            <p>
              Zbieramy dane osobowe w następujących przypadkach:
            </p>
            <ul className="mt-4 space-y-2 list-disc pl-6">
              <li>Gdy kontaktujesz się z nami telefonicznie lub mailowo</li>
              <li>Gdy korzystasz z formularza kontaktowego na stronie</li>
              <li>Automatycznie podczas przeglądania strony (dane techniczne)</li>
            </ul>

            <h2 className="mt-10 mb-4 text-2xl font-semibold text-foreground">
              3. Pliki Cookies
            </h2>
            <p>
              Nasza strona wykorzystuje pliki cookies (ciasteczka). Są to niewielkie pliki tekstowe 
              zapisywane na urządzeniu końcowym Użytkownika. Pliki cookies można podzielić na:
            </p>
            <ul className="mt-4 space-y-2 list-disc pl-6">
              <li>
                <strong className="text-foreground">Cookies niezbędne</strong> - wymagane do prawidłowego 
                funkcjonowania strony, np. zapamiętanie preferencji dotyczących cookies
              </li>
              <li>
                <strong className="text-foreground">Cookies analityczne</strong> - pomagają nam zrozumieć, 
                jak użytkownicy korzystają ze strony (Google Analytics)
              </li>
            </ul>

            <h2 className="mt-10 mb-4 text-2xl font-semibold text-foreground">
              4. Google Analytics
            </h2>
            <p>
              Strona korzysta z usługi Google Analytics, która używa plików cookies do analizy 
              sposobu korzystania ze strony przez użytkowników. Informacje generowane przez pliki 
              cookies na temat korzystania ze strony są przekazywane do Google. Google Analytics 
              został skonfigurowany z włączoną anonimizacją adresów IP.
            </p>
            <p className="mt-4">
              Użytkownik może w każdej chwili wyłączyć śledzenie przez Google Analytics, 
              instalując dodatek do przeglądarki dostępny pod adresem:{" "}
              <a 
                href="https://tools.google.com/dlpage/gaoptout" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                https://tools.google.com/dlpage/gaoptout
              </a>
            </p>

            <h2 className="mt-10 mb-4 text-2xl font-semibold text-foreground">
              5. Zarządzanie cookies
            </h2>
            <p>
              Użytkownik może samodzielnie zarządzać plikami cookies poprzez:
            </p>
            <ul className="mt-4 space-y-2 list-disc pl-6">
              <li>Zmianę ustawień w przeglądarce internetowej</li>
              <li>Użycie banera cookies wyświetlanego przy pierwszej wizycie na stronie</li>
              <li>Usunięcie zapisanych plików cookies z urządzenia</li>
            </ul>
            <p className="mt-4">
              Ograniczenie stosowania plików cookies może wpłynąć na niektóre funkcjonalności 
              dostępne na stronie.
            </p>

            <h2 className="mt-10 mb-4 text-2xl font-semibold text-foreground">
              6. Cel przetwarzania danych
            </h2>
            <p>
              Dane osobowe przetwarzane są w celu:
            </p>
            <ul className="mt-4 space-y-2 list-disc pl-6">
              <li>Realizacji usług transportowych i przeprowadzkowych</li>
              <li>Odpowiedzi na zapytania kierowane za pośrednictwem formularza kontaktowego</li>
              <li>Analizy ruchu na stronie i poprawy jej funkcjonalności</li>
              <li>Wypełnienia obowiązków prawnych ciążących na administratorze</li>
            </ul>

            <h2 className="mt-10 mb-4 text-2xl font-semibold text-foreground">
              7. Prawa Użytkownika
            </h2>
            <p>
              Każdy Użytkownik ma prawo do:
            </p>
            <ul className="mt-4 space-y-2 list-disc pl-6">
              <li>Dostępu do swoich danych osobowych</li>
              <li>Sprostowania danych nieprawidłowych lub niekompletnych</li>
              <li>Usunięcia danych (&quot;prawo do bycia zapomnianym&quot;)</li>
              <li>Ograniczenia przetwarzania danych</li>
              <li>Przenoszenia danych</li>
              <li>Wniesienia sprzeciwu wobec przetwarzania</li>
              <li>Cofnięcia zgody w dowolnym momencie</li>
              <li>Wniesienia skargi do organu nadzorczego (UODO)</li>
            </ul>

            <h2 className="mt-10 mb-4 text-2xl font-semibold text-foreground">
              8. Okres przechowywania danych
            </h2>
            <p>
              Dane osobowe przechowywane są przez okres niezbędny do realizacji celów, 
              dla których zostały zebrane, lub do czasu wycofania zgody przez Użytkownika.
            </p>

            <h2 className="mt-10 mb-4 text-2xl font-semibold text-foreground">
              9. Bezpieczeństwo danych
            </h2>
            <p>
              Administrator stosuje odpowiednie środki techniczne i organizacyjne zapewniające 
              ochronę przetwarzanych danych osobowych przed ich udostępnieniem osobom nieupoważnionym, 
              przejęciem przez osobę nieuprawnioną, przetwarzaniem z naruszeniem przepisów oraz 
              zmianą, utratą, uszkodzeniem lub zniszczeniem.
            </p>

            <h2 className="mt-10 mb-4 text-2xl font-semibold text-foreground">
              10. Zmiany w Polityce Prywatności
            </h2>
            <p>
              Administrator zastrzega sobie prawo do wprowadzania zmian w Polityce Prywatności. 
              O wszelkich zmianach Użytkownicy będą informowani poprzez publikację nowej wersji 
              na stronie internetowej.
            </p>

            <div className="mt-12 rounded-lg bg-secondary/50 p-6">
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Data ostatniej aktualizacji:</strong> Kwiecień 2026
              </p>
            </div>
          </div>

          <div className="mt-12">
            <Button asChild>
              <Link href="/" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Powrót do strony głównej
              </Link>
            </Button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card py-6">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} ROSI-TRANS. Wszystkie prawa zastrzeżone.
        </div>
      </footer>
    </div>
  )
}
