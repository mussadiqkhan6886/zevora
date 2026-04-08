import About from '@/sections/About'
import NewArrival from '@/sections/NewArrival'
import Watches from '@/sections/Watches'
import React from 'react'

import type { Metadata } from 'next'
import Gallery from '@/sections/Gallery'
import FreeComp from '@/components/customer/FreeComp'
import Hero from '@/sections/Hero'
import Heading from '@/sections/Heading'
import Collections from '@/sections/Collections'
import Image from 'next/image'
import Script from 'next/script'
import Reviews from '@/sections/Reviews'

export const metadata: Metadata = {
  title: 'Zevora Official - Affordable Watches, Jewelry & Perfumes Online',
  description:
    'Shop premium watches, elegant jewelry sets, rings, bracelets, and long-lasting perfumes online in Pakistan at Zevora Official. Affordable luxury accessories with fast delivery, cash on delivery, and trusted quality.',

  alternates: {
    canonical: '/',
  },
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
}

export const revalidate = 200;

const page = () => {
  const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": "https://www.zevoraofficial.com/#homepage",
  "url": "https://www.zevoraofficial.com",
  "name": "Zevora Official – Watches, Jewelry & Perfumes",
  "description":
    "Shop premium watches, elegant jewelry sets, rings, bracelets and long lasting perfumes online in Pakistan.",
  "inLanguage": "en-PK",
  "isPartOf": {
    "@id": "https://www.zevoraofficial.com/#website"
  },
  "about": {
    "@id": "https://www.zevoraofficial.com/#organization"
  },
  "mainEntity": {
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Watches",
        "url": "https://www.zevoraofficial.com/collections/watches"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Rings",
        "url": "https://www.zevoraofficial.com/collections/rings"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Perfumes",
        "url": "https://www.zevoraofficial.com/collections/perfumes"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "All Products",
        "url": "https://www.zevoraofficial.com/collections/all"
      }
    ]
  }
};
  return (
    <main className='pt-20'>
      <Script
  id="homepage-schema"
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
  strategy="afterInteractive"
/>
      <FreeComp />
      <Hero />
      <Heading />
      <Collections />
      <NewArrival />
      <Watches />
      <About />
      <Image src={"/hand.webp"} alt='hand image of jewelry and watches' width={1000} height={600} className='w-full h-[70vh] sm:h-[80vh]  sm:object-center object-right object-cover' />
      <Gallery />
      <Reviews />
    </main>
  )
}

export default page
