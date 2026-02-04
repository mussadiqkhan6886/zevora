import DreamStackSecion from '@/components/customer/DreamStackSecion'
import { jewellery } from '@/lib/constants'
import { serif } from '@/lib/fonts'
import Link from 'next/link'
import React from 'react'

const DreamStack = () => {
  return (
    <section className='px-5 sm:px-10 md:px-20 mb-4'>
       <Link href={"/"} className={`underline ${serif.className} inline-block hover:text-main text-black text-4xl py-8`}>
            Dream Stacks
        </Link>
       <DreamStackSecion jewellery={jewellery} />
       <button className='text-center w-full mt-8'><Link className='bg-black text-white text-center px-6 py-3 text-sm' href={"/"}>View All</Link></button>
    </section>
  )
}

export default DreamStack
