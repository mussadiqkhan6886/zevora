import DreamStackSecion from '@/components/customer/DreamStackSecion'
import { products } from '@/lib/constants'
import { serif } from '@/lib/fonts'
import Link from 'next/link'
import React from 'react'

const DreamStack = () => {

  const dreamStack = products.filter(product => product.category === "dream stacking")
  return (
    <section className='px-5 sm:px-10 md:px-20 mb-4'>
       <Link href={"/"} className={`underline ${serif.className} inline-block hover:text-main text-black text-4xl py-8`}>
            Dream Stacks
        </Link>
       <DreamStackSecion products={dreamStack} />
       <button className='text-center w-full mt-8'><Link className='bg-black text-white text-center px-6 py-3 text-sm' href={"/collections/dream-stacking"}>View All</Link></button>
    </section>
  )
}

export default DreamStack
