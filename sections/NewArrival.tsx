import NewArrivalsSection from '@/components/customer/NewArrivalsSection'
import { newArrivals } from '@/lib/constants'
import { serif } from '@/lib/fonts'
import Link from 'next/link'
import React from 'react'

const NewArrival = () => {
  return (
    <section className='mb-10'>
        <Link href={"/"} className={`underline ${serif.className} inline-block ml-20 hover:text-main text-black text-4xl py-8`}>
            New Arrivals
        </Link>
        <NewArrivalsSection newArrivals={newArrivals} />
        <button className='text-center w-full mt-8'><Link className='bg-black text-white text-center px-6 py-3 text-sm' href={"/"}>View All</Link></button>
    </section>
  )
}

export default NewArrival
