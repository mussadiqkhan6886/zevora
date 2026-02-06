import DreamStackSecion from '@/components/customer/DreamStackSecion'
import { connectDB } from '@/lib/config/database'
import { serif } from '@/lib/fonts'
import ProductSchema from '@/lib/models/ProductSchema'
import Link from 'next/link'
import React from 'react'

const DreamStack = async () => {

  await connectDB()

  const res = await ProductSchema.find({category: "jewelry-set"}).sort({_id: -1}).limit(12).lean()

  const dreamStack = JSON.parse(JSON.stringify(res))


  return (
    <section className='px-5 sm:px-10 md:px-20 mb-4'>
       <Link href={"/collections/jewelry-set"} className={`underline ${serif.className} inline-block hover:text-main text-black text-4xl py-8`}>
            Jewelry Set
        </Link>
       <DreamStackSecion products={dreamStack} />
       <button className='text-center w-full mt-8'><Link className='bg-black text-white text-center px-6 py-3 text-sm' href={"/collections/jewelry-set"}>View All</Link></button>
    </section>
  )
}

export default DreamStack
