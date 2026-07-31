import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Speziato Premium Black Pepper | Kerala's Finest Pepper",
  description: "Premium black pepper sourced from Kerala's hills. Freshly harvested, naturally processed, and packed for exceptional flavour and aroma.",
  keywords: [
    "premium black pepper",
    "kerala black pepper",
    "tellicherry peppercorns",
    "malabar spice",
    "luxury black pepper",
    "farm sourced pepper",
    "buy organic pepper",
    "high piperine black pepper",
    "speziato pepper",
  ],
  authors: [{ name: "Speziato" }],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    title: "Speziato Premium Black Pepper | Kerala's Finest Pepper",
    description: "Premium black pepper sourced from Kerala's hills. Freshly harvested, naturally processed, and packed for exceptional flavour and aroma.",
    type: "website",
    locale: "en_US",
    siteName: "Speziato",
    images: [
      {
        url: "/image/packet_static.webp",
        width: 1200,
        height: 630,
        alt: "Speziato Premium Black Pepper",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Speziato Premium Black Pepper | Kerala's Finest Pepper",
    description: "Premium black pepper sourced from Kerala's hills. Freshly harvested, naturally processed, and packed for exceptional flavour and aroma.",
    images: ["/image/packet_static.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Speziato Premium Kerala Black Pepper",
    "image": "/image/packet_static.webp",
    "description": "Premium black pepper sourced from Kerala's hills. Freshly harvested, naturally processed, and packed for exceptional flavour and aroma.",
    "brand": {
      "@type": "Brand",
      "name": "Speziato"
    },
    "offers": {
      "@type": "Offer",
      "priceCurrency": "USD",
      "price": "29.99",
      "availability": "https://schema.org/InStock",
      "url": "https://speziato.com/product"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "184"
    }
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Speziato",
    "url": "https://speziato.com",
    "logo": "https://speziato.com/image/packet_static.webp",
    "sameAs": [
      "https://instagram.com/speziato"
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://speziato.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Kerala Black Pepper",
        "item": "https://speziato.com#product"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Why is Kerala black pepper famous?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Kerala black pepper, historically known as 'Black Gold', is famous globally due to its intense heat, robust aroma, and high concentration of piperine. Grown in the nutrient-rich volcanic soil of Kerala's Western Ghats, it features unique citrusy and woodsy undertones that are unmatched by pepper from any other region."
        }
      },
      {
        "@type": "Question",
        "name": "What makes Speziato premium?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Speziato premium pepper is sourced in small batches from high-altitude, heritage plantations in Kerala. It is handpicked at peak maturity, sun-dried naturally, and packed fresh in vacuum-sealed custom tin packets to preserve the essential oils, aroma, and bold flavor, guaranteeing export-grade quality."
        }
      },
      {
        "@type": "Question",
        "name": "How is black pepper processed?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Speziato pepper is harvested by hand, separating the fully ripe green peppercorns from the stems. They are briefly blanched in hot water to clean and trigger the enzymatic browning process, then dried under the sun on hygienic raised beds for several days until they turn deep black and wrinkled, locking in full flavor."
        }
      },
      {
        "@type": "Question",
        "name": "What are the health benefits of black pepper?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Black pepper is rich in piperine, a powerful antioxidant that offers digestive support, stimulates nutrient absorption (specifically increasing bioavailability of curcumin by up to 2000%), boosts metabolic function, and has anti-inflammatory properties used in traditional wellness practices."
        }
      },
      {
        "@type": "Question",
        "name": "How should black pepper be stored?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "To maintain optimal freshness and protect its volatile essential oils, store Speziato black pepper in our airtight packaging in a cool, dark, and dry place. Avoid heat source exposure and direct sunlight, and grind the peppercorns right before culinary use for maximum aroma."
        }
      }
    ]
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Speziato Premium Spices",
    "image": "https://speziato.com/image/packet_static.png",
    "telephone": "+91-484-2345678",
    "email": "hello@speziato.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "M.G. Road, Fort Kochi",
      "addressLocality": "Kochi",
      "addressRegion": "Kerala",
      "postalCode": "682001",
      "addressCountry": "IN"
    },
    "priceRange": "$$$"
  };

  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable} scroll-smooth`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="bg-obsidian text-cream font-inter selection:bg-gold-accent selection:text-obsidian antialiased overflow-x-hidden min-h-screen">
        {children}
      </body>
    </html>
  );
}

