import MetaPixel from "@/components/admin/MetaPixel";
import Footer from "@/components/customer/Footer";
import Header from "@/components/customer/Header";
import SalesPop from "@/components/customer/SalesPop";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL('https://www.zevoraofficial.com'),

  title: {
    default:
      'Zevora Official | Buy Watches, Jewelry & Perfumes Online in Pakistan',
    template: '%s | Zevora Official',
  },

  description:
    'Shop premium watches, elegant jewelry sets, rings, bracelets, and long-lasting perfumes online in Pakistan at Zevora Official. Affordable luxury accessories with fast delivery, cash on delivery, and trusted quality.',

  applicationName: 'Zevora Official',

 keywords: [
    // Brand
    'Zevora',
    'Zevora Official',
    'Zevora store Pakistan',
    'Zevora watches',
    'Zevora jewelry',

    // Watches — high volume
    'buy watches online Pakistan',
    'watches in Pakistan',
    'best watches in Pakistan',
    'affordable watches Pakistan',
    'luxury watches Pakistan',
    'men watches Pakistan',
    'women watches Pakistan',
    'stylish watches for men Pakistan',
    'stylish watches for women Pakistan',
    'watches under 5000 rupees Pakistan',
    'watches online Pakistan cash on delivery',
    'fashion watches Pakistan',
    'watches in Lahore',
    'watches in Karachi',
    'watches in Islamabad',

    // Jewelry — high volume
    'jewelry online Pakistan',
    'jewelry sets Pakistan',
    'gold plated jewelry Pakistan',
    'stainless steel jewelry Pakistan',
    'artificial jewelry Pakistan',
    'fashion jewelry Pakistan',
    'luxury jewelry Pakistan',
    'best jewelry brand Pakistan',
    'rings for women Pakistan',
    'bracelets for women Pakistan',
    'stainless steel rings Pakistan',
    'stainless steel bracelets Pakistan',
    'earrings online Pakistan',
    'stainless steel earrings Pakistan',
    'women jewelry set Pakistan',
    'bridal jewelry set Pakistan',
    'wedding jewelry Pakistan',
    'jewelry in Lahore',
    'jewelry in Karachi',
    'jewelry in Islamabad',

    // Perfumes
    'perfumes online Pakistan',
    'long lasting perfumes Pakistan',
    'best perfumes for men Pakistan',
    'best perfumes for women Pakistan',
    'luxury perfumes Pakistan',
    'arabic perfumes Pakistan',
    'perfume gift set Pakistan',
    'buy perfume online Pakistan',

    // Bags
    'bags online Pakistan',
    'ladies bags Pakistan',
    'fashion bags Pakistan',
    'handbags online Pakistan',

    // Shopping intent & trust
    'buy accessories online Pakistan',
    'fashion accessories Pakistan',
    'online shopping Pakistan',
    'cash on delivery Pakistan',
    'COD online shopping Pakistan',
    'free delivery Pakistan',
    'affordable luxury Pakistan',
    'premium accessories Pakistan',
    'online store Pakistan',
  ],

  authors: [{ name: 'Zevora Official' }],
  creator: 'Zevora Official',
  publisher: 'Zevora Official',

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },

  openGraph: {
    type: 'website',
    locale: 'en_PK',
    url: 'https://www.zevoraofficial.com/',
    siteName: 'Zevora Official',
    title:
      'Zevora Official – Premium Watches, Jewelry & Perfumes in Pakistan',
    description:
      'Discover luxury watches, elegant jewelry sets, rings, bracelets and long-lasting perfumes. Shop premium accessories with fast delivery across Pakistan.',
    images: [
      {
        url: '/hero.webp',
        width: 1200,
        height: 630,
        alt: 'Zevora Official – Premium Accessories Store',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    site: '@zevora',
    creator: '@zevora',
    title: 'Zevora Official – Premium Watches, Jewelry & Perfumes',
    description:
      'Shop stylish watches, elegant jewelry and luxury perfumes online in Pakistan with fast delivery.',
    images: ['/header-logo.png'],
  },

  alternates: {
    canonical: '/',
  },

  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },

  verification: {
    google: '6xyuGHu6tzugCE0Hl9VWsugfTJi_LGEetdaZSy3cdaY',
  },

  category: 'ecommerce',
}



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.zevoraofficial.com/#organization",
      "name": "Zevora Official",
      "url": "https://www.zevoraofficial.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.zevoraofficial.com/header-logo.png",
        "width": 512,
        "height": 512
      },
      "sameAs": [
        "https://www.instagram.com/zevora._official/?__pwa=1",
        "https://web.facebook.com/profile.php?id=61581131171531"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+92-324-5697570",
        "contactType": "customer service",
        "areaServed": "PK",
        "availableLanguage": ["English", "Urdu"]
      },
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Lahore",
        "addressCountry": "PK"
      }
    },

    {
      "@type": "WebSite",
      "@id": "https://www.zevoraofficial.com/#website",
      "url": "https://www.zevoraofficial.com",
      "name": "Zevora Official",
      "publisher": {
        "@id": "https://www.zevoraofficial.com/#organization"
      },
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://www.zevoraofficial.com/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    },

    {
      "@type": "WebPage",
      "@id": "https://www.zevoraofficial.com/#webpage",
      "url": "https://www.zevoraofficial.com",
      "name": "Zevora Official – Watches, Jewelry & Perfumes",
      "isPartOf": {
        "@id": "https://www.zevoraofficial.com/#website"
      },
      "about": {
        "@id": "https://www.zevoraofficial.com/#organization"
      },
      "description":
        "Shop premium watches, elegant jewelry sets, rings, bracelets and long lasting perfumes online in Pakistan. Fast delivery and cash on delivery available.",
      "inLanguage": "en-PK",
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "url": "https://www.zevoraofficial.com/hero.webp"
      }
    },
    {
      "@type": "SiteNavigationElement",
      "name": "Watches",
      "url": "https://www.zevoraofficial.com/collections/watches"
    },
    {
      "@type": "SiteNavigationElement",
      "name": "All Products",
      "url": "https://www.zevoraofficial.com/collections/all"
    },
    {
      "@type": "SiteNavigationElement",
      "name": "Rings",
      "url": "https://www.zevoraofficial.com/collections/rings"
    },
    {
      "@type": "SiteNavigationElement",
      "name": "Collections",
      "url": "https://www.zevoraofficial.com/collections"
    }
  ]
};

  return (
    <>
    <Script
        id="ld-json"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <MetaPixel />
    <Header />
    {children}
    <SalesPop />
    <Footer />
    </>
  );
}
