// SEO Schema for Jagdamba Caterers
export const LocalBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "FoodEstablishment",
  "@id": "https://www.jagdambacaterersjodhpur.in/#business",
  "name": "Jagdamba Caterers and Events",
  "description": "Best catering services in Jodhpur for weddings, birthdays & social events. Providing authentic Rajasthani cuisine since 1997.",
  "alternateName": "Jagdamba Caterers Jodhpur",
  "url": "https://www.jagdambacaterersjodhpur.in/",
  "logo": "https://www.jagdambacaterersjodhpur.in/logo.png",
  "image": "https://www.jagdambacaterersjodhpur.in/logo.png",
  "foundingDate": "1997",
  "sameAs": [
    "https://www.facebook.com/share/1BAX3KYYyv/?mibextid=wwXIfr",
    "https://www.instagram.com/jagdamba_caterers_events?igsh=MnhobDNidjBrM3hl&utm_source=qr"
  ],
  "telephone": "+918769480205",
  "email": "jagdambacatrers@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "1/1, D.D.P. Nagar, Madhuban Housing Board",
    "addressLocality": "Basni, Jodhpur",
    "addressRegion": "Rajasthan",
    "postalCode": "342005",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "26.2283594",
    "longitude": "73.023633"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "06:00",
      "closes": "23:00"
    }
  ],
  "priceRange": "₹₹-₹₹₹",
  "servesCuisine": ["Indian", "Rajasthani", "North Indian", "Vegetarian"],
  "keywords": "best catering services in jodhpur, wedding catering in jodhpur, event caterers, jodhpur caterers",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Catering Services",
    "itemListElement": [
      {
        "@type": "OfferCatalog",
        "name": "Wedding Catering",
        "description": "Premium wedding catering services in Jodhpur"
      },
      {
        "@type": "OfferCatalog",
        "name": "Corporate Events",
        "description": "Professional catering for corporate events"
      },
      {
        "@type": "OfferCatalog",
        "name": "Birthday Parties",
        "description": "Special birthday celebration catering"
      },
      {
        "@type": "OfferCatalog",
        "name": "Social Gatherings",
        "description": "Catering services for social events and gatherings"
      }
    ]
  }
};

// FAQs Schema
export const FAQSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What catering services does Jagdamba Caterers offer in Jodhpur?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Jagdamba Caterers offers comprehensive catering services in Jodhpur including wedding catering, birthday celebrations, corporate events, social gatherings, and special occasions. We provide authentic Rajasthani cuisine along with North Indian, South Indian, and Continental food options."
      }
    },
    {
      "@type": "Question",
      "name": "How many years of experience does Jagdamba Caterers have?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Jagdamba Caterers has been serving delicious memories since 1997, giving us over 25 years of experience in the catering industry in Jodhpur. Our decades of expertise ensure flawless execution and authentic flavors for all events."
      }
    },
    {
      "@type": "Question",
      "name": "What makes Jagdamba the best catering service in Jodhpur?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Jagdamba Caterers is considered one of the best catering services in Jodhpur due to our authentic Rajasthani recipes, premium ingredients, professional service, flexibility to customize menus, and 25+ years of experience catering for weddings and events of all sizes."
      }
    },
    {
      "@type": "Question",
      "name": "How do I book Jagdamba Caterers for my wedding in Jodhpur?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "To book Jagdamba Caterers for your wedding in Jodhpur, simply call us at +91 87694 80205, send a WhatsApp message, or use the contact form on our website. We recommend booking at least 3-6 months in advance for wedding events to ensure availability."
      }
    }
  ]
};