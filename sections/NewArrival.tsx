import NewArrivalsSection from '@/components/customer/NewArrivalsSection'
import { connectDB } from '@/lib/config/database'
import { serif } from '@/lib/fonts'
import ProductSchema from '@/lib/models/ProductSchema'
import Link from 'next/link'
import React from 'react'

const NewArrival = async () => {

  await connectDB()

  const res = await ProductSchema.find({createdAt: new Date().getDate() - 7}).sort("-1").lean() 

  const products = JSON.parse(JSON.stringify(res))

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
