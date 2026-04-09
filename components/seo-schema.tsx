export function LocalBusinessSchema() {
  const localBusinessData = {
    "@context": "https://schema.org",
    "@type": "MovingCompany",
    "@id": "https://rosi-trans.pl/#organization",
    "name": "ROSI-TRANS Usługi Transportowe",
    "alternateName": "ROSI-TRANS Przeprowadzki Opole",
    "description": "Profesjonalne usługi przeprowadzkowe i transportowe w Opolu i okolicach. Przeprowadzki mieszkań, biur, sklepów, magazynów. Auto z windą załadowczą.",
    "url": "https://rosi-trans.pl",
    "telephone": "+48502215572",
    "email": "rositrans.com@wp.pl",
    "image": "https://rosi-trans.pl/images/logo.png",
    "logo": "https://rosi-trans.pl/images/logo.png",
    "priceRange": "$$",
    "currenciesAccepted": "PLN",
    "paymentAccepted": "Gotówka, Przelew",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Opole",
      "addressLocality": "Opole",
      "addressRegion": "opolskie",
      "postalCode": "45-000",
      "addressCountry": "PL"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 50.661119,
      "longitude": 17.9803007
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Opole"
      },
      {
        "@type": "State",
        "name": "województwo opolskie"
      },
      {
        "@type": "City",
        "name": "Kędzierzyn-Koźle"
      },
      {
        "@type": "City",
        "name": "Nysa"
      },
      {
        "@type": "City",
        "name": "Brzeg"
      },
      {
        "@type": "City",
        "name": "Kluczbork"
      },
      {
        "@type": "City",
        "name": "Strzelce Opolskie"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Usługi przeprowadzkowe i transportowe",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Przeprowadzki mieszkań",
            "description": "Kompleksowe przeprowadzki mieszkań w Opolu i okolicach"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Przeprowadzki biur",
            "description": "Profesjonalne przeprowadzki biur i firm"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Przeprowadzki sklepów",
            "description": "Transport wyposażenia sklepów i punktów handlowych"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Przeprowadzki magazynów",
            "description": "Przeprowadzki magazynów z użyciem windy załadowczej"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Przewóz mebli",
            "description": "Bezpieczny transport mebli z zabezpieczeniem ładunku"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Przewóz sprzętu AGD",
            "description": "Transport sprzętu AGD i RTV"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Usługi transportowe",
            "description": "Ogólne usługi transportowe, odbiór i dostawa towaru"
          }
        }
      ]
    },
    "knowsAbout": [
      "Przeprowadzki mieszkań",
      "Przeprowadzki biur",
      "Transport mebli",
      "Przeprowadzki sklepów",
      "Przeprowadzki magazynów",
      "Transport z windą załadowczą"
    ],
    "slogan": "Na miejsce, na czas, na pewno!",
    "foundingDate": "2010",
    "numberOfEmployees": {
      "@type": "QuantitativeValue",
      "minValue": 1,
      "maxValue": 10
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "150",
      "bestRating": "5",
      "worstRating": "1"
    },
    "sameAs": [
      "https://www.google.com/maps/place/Us%C5%82ugi+transportowe,+Transport+Opole,+Auto+z+wind%C4%85,+ROSI-TRANS"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessData) }}
    />
  );
}

export function WebsiteSchema() {
  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "ROSI-TRANS Przeprowadzki Opole",
    "alternateName": "ROSI-TRANS Usługi Transportowe",
    "url": "https://rosi-trans.pl",
    "description": "Profesjonalne przeprowadzki i usługi transportowe w Opolu. Auto z windą załadowczą.",
    "publisher": {
      "@id": "https://rosi-trans.pl/#organization"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://rosi-trans.pl/?s={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    },
    "inLanguage": "pl-PL"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteData) }}
    />
  );
}

export function OrganizationSchema() {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://rosi-trans.pl/#organization",
    "name": "ROSI-TRANS",
    "legalName": "ROSI-TRANS Usługi Transportowe",
    "url": "https://rosi-trans.pl",
    "logo": {
      "@type": "ImageObject",
      "url": "https://rosi-trans.pl/images/logo.png",
      "width": 200,
      "height": 60
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+48502215572",
      "contactType": "customer service",
      "email": "rositrans.com@wp.pl",
      "availableLanguage": ["Polish"],
      "areaServed": "PL"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Opole",
      "addressRegion": "opolskie",
      "addressCountry": "PL"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
    />
  );
}

export function FAQSchema({ faqs }: { faqs: { question: string; answer: string }[] }) {
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
    />
  );
}

export function BreadcrumbSchema({ items }: { items: { name: string; url: string }[] }) {
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
    />
  );
}

export function ServiceSchema({ 
  name, 
  description, 
  areaServed 
}: { 
  name: string; 
  description: string; 
  areaServed: string;
}) {
  const serviceData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": name,
    "name": name,
    "description": description,
    "provider": {
      "@id": "https://rosi-trans.pl/#organization"
    },
    "areaServed": {
      "@type": "City",
      "name": areaServed
    },
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": "https://rosi-trans.pl",
      "servicePhone": "+48502215572"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceData) }}
    />
  );
}
