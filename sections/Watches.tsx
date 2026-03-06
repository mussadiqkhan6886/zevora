import WatchesSection from '@/components/customer/WatchesSection'
import { connectDB } from '@/lib/config/database'
import { serif } from '@/lib/fonts'
import ProductSchema from '@/lib/models/ProductSchema'
import Link from 'next/link'
import React from 'react'

const Watches = async () => {

  await connectDB()

  const res = await ProductSchema.find({category: "watches"}).sort({_id: -1}).limit(12).lean()

  const watches = JSON.parse(JSON.stringify(res))


  return (
    <section className='pb-4 px-2 md:px-0'>
      <h2 className={`${serif.className}  inline-block ml-5 text-black text-4xl py-8`}>
        Watches
      </h2>
      <WatchesSection watches={watches} />
    </section>
  )
}

export default Watches
