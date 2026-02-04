import NewArrivalsSection from '@/components/customer/NewArrivalsSection'
import { products } from '@/lib/constants'
import { serif } from '@/lib/fonts'
import Link from 'next/link'
import React from 'react'

const NewArrival = () => {
  return (
    <section className='mb-10 px-2 md:px-0'>
        <Link href={"/"} className={`underline ${serif.className} inline-block ml-20 hover:text-main text-black text-4xl py-8`}>
            New Arrivals
        </Link>
        <NewArrivalsSection products={products} />
        <button className='text-center w-full mt-8'><Link className='bg-black text-white text-center px-6 py-3 text-sm' href={"/collections/all"}>View All</Link></button>
    </section>
  )
}

export default NewArrival
