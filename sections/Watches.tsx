import SectionTitle from '@/components/customer/SectionTitle'
import WatchesSection from '@/components/customer/WatchesSection'
import { watches } from '@/lib/constants'
import { serif } from '@/lib/fonts'
import Link from 'next/link'
import React from 'react'

const Watches = () => {
  return (
    <section className='bg-main pb-4 px-2 md:px-0'>
      <Link href={"/"} className={`underline ${serif.className} inline-block ml-5 md:ml-20 text-white hover:text-black text-4xl py-8`}>
        Watches
      </Link>
      <WatchesSection watchesList={watches} />
    </section>
  )
}

export default Watches
