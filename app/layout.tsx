import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { CookieConsent } from "@/components/cookie-consent";
import {
  LocalBusinessSchema,
  WebsiteSchema,
  OrganizationSchema,
} from "@/components/seo-schema";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
});
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin", "latin-ext"],
  variable: "--font-space-grotesk",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ea580c" },
    { media: "(prefers-color-scheme: dark)", color: "#1e3a5f" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://rosi-trans.pl"),
  title: {
    default: "Przeprowadzki Opole | Usługi transportowe tanio - winda",
    template: "%s | ROSI-TRANS Opole",
  },
  description:
    "Profesjonalne przeprowadzki Opole. Usługi transportowe, transport sprzętu. Winda. Indywidualna cena dla klienta. 502215572",
  keywords: [
    // Główne frazy
    "przeprowadzki Opole",
    "przeprowadzki",
    "przeprowadzka",
    "firma przeprowadzkowa Opole",
    "usługi transportowe Opole",
    "transport Opole",
    "transport",
    "transportowe",
    // Usługi
    "przeprowadzki mieszkań Opole",
    "przeprowadzki biur Opole",
    "przeprowadzki sklepów",
    "przeprowadzki magazynów",
    "przewóz mebli Opole",
    "transport mebli",
    "przewóz sprzętu AGD",
    "sprzęt AGD",
    "taxi bagażowe Opole",
    // Lokalne
    "przeprowadzki Opolskie",
    "transport Opolskie",
    "przeprowadzki Kędzierzyn-Koźle",
    "przeprowadzki Nysa",
    "przeprowadzki Brzeg",
    "Opole",
    "w Opolu",
    // Cechy
    "tanie przeprowadzki Opole",
    "profesjonalne przeprowadzki",
    "profesjonalna firma",
    "auto z windą Opole",
    "winda załadowcza",
    "windą",
    "indywidualne podejście",
    "indywidualnie",
    "cena",
    "atrakcyjne ceny",
    "dla klienta",
    "klientów",
    // Long-tail
    "firma transportowa z windą Opole",
    "przeprowadzka mieszkania Opole cena",
    "ile kosztuje przeprowadzka Opole",
  ],
  authors: [{ name: "ROSI-TRANS" }],
  creator: "ROSI-TRANS",
  publisher: "ROSI-TRANS",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: "https://rosi-trans.pl",
  },
  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: "https://rosi-trans.pl",
    siteName: "ROSI-TRANS Przeprowadzki Opole",
    title: "Przeprowadzki Opole - Transport z windą",
    description:
      "Profesjonalne przeprowadzki Opole. Transport mebli, sprzętu. Indywidualna cena. Auto z windą.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ROSI-TRANS - Profesjonalne przeprowadzki i usługi transportowe w Opolu",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Przeprowadzki Opole - ROSI-TRANS | Winda",
    description:
      "Transport mebli i sprzętu Opole. Indywidualna cena dla klienta. Tel. 502 215 572",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Możesz dodać weryfikację Google Search Console
    // google: 'twój-kod-weryfikacyjny',
  },
  category: "business",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <head>
        <LocalBusinessSchema />
        <WebsiteSchema />
        <OrganizationSchema />
      </head>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}
      >
        {children}
        <CookieConsent />
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
