import { signature } from '@/lib/constants'
import { serif } from '@/lib/fonts'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FiArrowRight, FiArrowUpRight } from 'react-icons/fi'

const Collections = () => {
  return (
    <section className='max-w-7xl mx-auto px-4 my-15'>
        <div className='flex justify-between items-center mb-4'>
            <h2 className={`${serif.className} text-3xl sm:text-[42px] leading-12 italic`}>Explore Our
                <br />
                Signature Collections
            </h2>
            <Link href={"/collections/all"} className='hidden border-b pb-1 uppercase font-light text-lg md:flex gap-2 items-center'>View All <FiArrowRight /></Link>
        </div>
      <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
        {signature.map(item => (
            <Link key={item.name} className='group' href={item.link} aria-label={`Go to ${item.name} collection`}>
            <article className='flex flex-col items-center'>
                <Image className='h-90 group-hover:scale-105 transition-all duration-400  object-center object-cover' src={item.image} alt={item.name} width={400} height={400} />
                <h2 className={`${serif.className} flex items-center gap-2 mt-3 text-2xl`}>{item.name} <FiArrowUpRight className='mt-1 inline-block' /></h2>
            </article>
            </Link>
        ))}
      </div>
    </section>
  )
}

export default Collections
