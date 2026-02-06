import CardTwo from '@/components/customer/CardTwo'
import Images from '@/components/customer/Images'
import { connectDB } from '@/lib/config/database'
import { serif } from '@/lib/fonts'
import ProductSchema from '@/lib/models/ProductSchema'
import { productType } from '@/type'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = async ({params}: {params: Promise<{slug: string}>}) => {

    const productSlug = (await params).slug
    
    await connectDB()

   const product = await ProductSchema.findOne({ slug: productSlug }).lean()
    
   const products = await ProductSchema.aggregate([
      {
        $match: {
          category: product.category,
          _id: { $ne: product._id }, // exclude current product
          stock: { $gt: 0 }          // only in-stock items
        },
      },
      { $sample: { size: 8 } },      // random 8
    ])


     if (!product) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-medium">Product Not Found</h1>
      </main>
    )
  }

  return (
    <main className="pt-32 px-6 max-w-7xl mx-auto">
      <section className="grid grid-cols-1  md:grid-cols-2 gap-10">
        
        <Images images={product.images} name={product.name} />

        <div className="flex flex-col gap-5 lg:pt-10">
          <h1 className={`${serif.className} text-4xl tracking-wider`}>
            {product.name}
          </h1>

          <div className="flex items-center gap-4">
            <h2
              className={`${
                product.onSale
                  ? 'line-through text-sm text-zinc-400'
                  : 'text-xl font-medium'
              }`}
            >
              Rs.{product.price}
            </h2>

            {product.onSale && (
              <>
                <h2 className="text-xl font-semibold">
                  Rs.{product.salePrice}
                </h2>
                <span className="text-xs px-3 py-1 rounded-full border border-zinc-300">
                  Sale
                </span>
              </>
            )}
          </div>

          <p className="text-sm text-zinc-500">
            Shipping calculated at checkout
          </p>

          {/* Quantity */}
          <div className="flex flex-col gap-2">
            <p className="text-sm font-medium">Quantity</p>
            <div className="flex items-center w-max border px-4 py-2 gap-6">
              <button className="text-lg hover:opacity-70">−</button>
              <span className="text-sm">1</span>
              <button className="text-lg hover:opacity-70">+</button>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col gap-3 mt-4">
            <button className="w-full py-3 cursor-pointer hover:bg-white hover:text-black border border-transparent hover:border-black duration-300 bg-black text-white hover:opacity-90 transition">
              Add to cart
            </button>
            <button className="w-full py-3 cursor-pointer border border-black hover:bg-black hover:text-white transition">
              Buy it now
            </button>
          </div>
        </div>
      </section>
      <section>
        <h3 className={`${serif.className} text-xl md:text-3xl my-10`}>You May Also Like</h3>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
            {products.map((item: productType) => (
                <CardTwo key={item._id} collectionSlug={item.category} {...item} />
            ))}
        </div>
      </section>
    </main>
  )
}

export default page