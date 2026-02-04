import { products } from '@/lib/constants'
import { serif } from '@/lib/fonts'
import Image from 'next/image'
import React from 'react'

const page = async ({params}: {params: Promise<{slug: string}>}) => {

    const productSlug = (await params).slug
    
    const productFound = products.find(product => product.slug === productSlug)

     if (!productFound) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-medium">Product Not Found</h1>
      </main>
    )
  }

  return (
    <main className="pt-32 px-6 max-w-7xl mx-auto">
      <section className="grid grid-cols-1 md:grid-cols-2 gap-14">
        
        <div>
          <Image
            src={productFound.images[0]}
            alt={productFound.name}
            width={600}
            height={600}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-col gap-5 pt-10">
          <h1 className={`${serif.className} text-4xl tracking-wider`}>
            {productFound.name}
          </h1>

          <div className="flex items-center gap-4">
            <p
              className={`${
                productFound.onSale
                  ? 'line-through text-sm text-zinc-400'
                  : 'text-xl font-medium'
              }`}
            >
              Rs.{productFound.price}
            </p>

            {productFound.onSale && (
              <>
                <p className="text-xl font-semibold">
                  Rs.{productFound.salePrice}
                </p>
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
    </main>
  )
}

export default page