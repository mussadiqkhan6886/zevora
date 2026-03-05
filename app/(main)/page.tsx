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

export const metadata: Metadata = {
  title: 'Premium Watches, Jewelry & Perfumes Online',
  description:
    'Discover premium watches, elegant jewelry sets, and luxury perfumes. Shop new arrivals and timeless designs with fast delivery.',

  alternates: {
    canonical: '/',
  },

  openGraph: {
    title: 'Premium Watches, Jewelry & Perfumes Online',
    description:
      'Shop premium watches, jewelry sets, and luxury perfumes. Discover new arrivals and timeless designs.',
    url: '/',
  },

  twitter: {
    title: 'Premium Watches, Jewelry & Perfumes Online',
    description:
      'Shop premium watches, jewelry sets, and luxury perfumes. Discover new arrivals and timeless designs.',
  },
}

export const revalidate = 200;

const page = () => {
  return (
    <main className='pt-20'>
      <FreeComp />
      <Hero />
      <Heading />
      <Watches />
      <DreamStack />
      <About />
      <NewArrival />
      <Gallery />
    </main>
  )
}

export default page
