import SectionTitle from '@/components/customer/SectionTitle'
import WatchesSection from '@/components/customer/WatchesSection'
import { products } from '@/lib/constants'
import { serif } from '@/lib/fonts'
import Link from 'next/link'
import React from 'react'

const Watches = () => {

  const watches = products.filter(product => product.category === "watches")

  return (
    <section className='bg-main pb-4 px-2 md:px-0'>
      <Link href={"/collections/watches"} className={`underline ${serif.className} inline-block ml-5 md:ml-20 text-white hover:text-black text-4xl py-8`}>
        Watches
      </Link>
      <WatchesSection watches={watches} />
    </section>
  )
}

export default Watches
