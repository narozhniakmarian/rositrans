"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

const GA_ID = "G-L6GJFT0T4N"

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void
    dataLayer: unknown[]
  }
}

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent")
    if (consent === null) {
      setShowBanner(true)
    } else if (consent === "accepted") {
      loadGoogleAnalytics()
    }
    setIsLoaded(true)
  }, [])

  const loadGoogleAnalytics = () => {
    // Load gtag script
    const script = document.createElement("script")
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`
    script.async = true
    document.head.appendChild(script)

    // Initialize gtag
    window.dataLayer = window.dataLayer || []
    window.gtag = function gtag() {
      window.dataLayer.push(arguments)
    }
    window.gtag("js", new Date())
    window.gtag("config", GA_ID, {
      anonymize_ip: true,
    })
  }

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted")
    setShowBanner(false)
    loadGoogleAnalytics()
  }

  const declineCookies = () => {
    localStorage.setItem("cookie-consent", "declined")
    setShowBanner(false)
  }

  if (!isLoaded || !showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6">
      <div className="mx-auto max-w-4xl">
        <div className="relative rounded-xl border border-border bg-card p-4 shadow-2xl md:p-6">
          <button
            onClick={declineCookies}
            className="absolute right-3 top-3 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Zamknij"
          >
            <X className="h-5 w-5" />
          </button>

          <div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-6">
            <div className="flex-1 pr-6">
              <h3 className="mb-2 font-semibold text-foreground">
                Ta strona wykorzystuje pliki cookies
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Używamy plików cookies, aby zapewnić najlepsze doświadczenia na naszej stronie. 
                Pomagają nam one analizować ruch i ulepszać nasze usługi. 
                Klikając &quot;Akceptuję&quot;, zgadzasz się na użycie wszystkich plików cookies.{" "}
                <Link 
                  href="/polityka-prywatnosci" 
                  className="text-primary hover:underline font-medium"
                >
                  Dowiedz się więcej
                </Link>
              </p>
            </div>

            <div className="flex flex-col gap-2 sm:flex-row sm:gap-3">
              <Button
                variant="outline"
                onClick={declineCookies}
                className="order-2 sm:order-1"
              >
                Odrzuć
              </Button>
              <Button
                onClick={acceptCookies}
                className="order-1 sm:order-2 bg-primary hover:bg-primary/90"
              >
                Akceptuję
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
