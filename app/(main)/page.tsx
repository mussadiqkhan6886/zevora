import About from '@/sections/About'
import DreamStack from '@/sections/DreamStack'
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
    'Zevora official',
    'Zevora store',

    // Watches
    'buy watches online pakistan',
    'best watches in pakistan',
    'men watches pakistan',
    'women watches pakistan',
    'luxury watches pakistan',
    'affordable watches pakistan',
    'stylish watches for men',
    'stylish watches for women',

    // Jewelry
    'jewelry online pakistan',
    'jewelry sets pakistan',
    'rings for women pakistan',
    'bracelets for women pakistan',
    'fashion jewelry pakistan',
    'gold plated jewelry pakistan',
    'luxury jewelry pakistan',
    'best jewelry brand pakistan',

    // Perfumes
    'perfumes online pakistan',
    'long lasting perfumes pakistan',
    'best perfumes for men pakistan',
    'best perfumes for women pakistan',
    'luxury perfumes pakistan',
    'arabic perfumes pakistan',

    // Shopping Intent
    'buy accessories online pakistan',
    'fashion accessories pakistan',
    'online shopping pakistan',
    'cod online shopping pakistan',

    // Location based
    'watches in lahore',
    'watches in islamabad',
    'watches in karachi',
    'jewelry in lahore',
    'jewelry in islamabad',
    'jewelry in karachi',
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
    </main>
  )
}

export default page
