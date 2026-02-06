import CardTwo from '@/components/customer/CardTwo'
import { connectDB } from '@/lib/config/database'
import { serif } from '@/lib/fonts'
import ProductSchema from '@/lib/models/ProductSchema'
import { productType } from '@/type'
import React from 'react'

const page = async ({params}: {params: Promise<{collection: string}>}) => {

  const {collection} = (await params)

  await connectDB()

  const res = await ProductSchema.find(collection === "all" ? {} : {category: collection}).sort({_id: -1}).lean()

  const products = JSON.parse(JSON.stringify(res))

  console.log(products)

  return (
    <main className='pt-35 px-3 max-w-7xl mx-auto'>
      <h1 className={`${serif.className} capitalize text-4xl my-10`}>{collection.replaceAll("-", " ")}</h1>
      <div className='flex justify-between items-center'>
        <div>
            <label className="text-zinc-500 text-sm inline-block mr-4">Sort By:</label>
            <select className="border outline-none text-zinc-600 text-sm border-zinc-300 py-2 px-2">
                <option>Dates Old to New</option>
                <option>Dates New to Old</option>
                <option>Price, Low to High</option>
                <option>Price, High to Low</option>
            </select>
        </div>
        <p className="text-sm text-zinc-500">{products.length} products</p>
      </div>
      <section className='grid gap-6 grid-col-2 md:grid-cols-3 lg:grid-cols-4 my-10'>
        {products.map((item : productType) => (
            <CardTwo key={item._id} collectionSlug={collection} {...item} />
        ))}
      </section>
    </main>
  )
}

export default page
