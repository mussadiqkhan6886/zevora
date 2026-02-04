import CardTwo from '@/components/customer/CardTwo'
import { products } from '@/lib/constants'
import { serif } from '@/lib/fonts'
import Image from 'next/image'
import Link from 'next/link'
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

        <div className="flex flex-col gap-5 lg:pt-10">
          <h1 className={`${serif.className} text-4xl tracking-wider`}>
            {productFound.name}
          </h1>

          <div className="flex items-center gap-4">
            <h2
              className={`${
                productFound.onSale
                  ? 'line-through text-sm text-zinc-400'
                  : 'text-xl font-medium'
              }`}
            >
              Rs.{productFound.price}
            </h2>

            {productFound.onSale && (
              <>
                <h2 className="text-xl font-semibold">
                  Rs.{productFound.salePrice}
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
            {products.filter(product => product.category === productFound.category).map((item, i) => (
                <Link key={i} href={`${item.slug}`} className='relative group mb-4'>
                    <Image className='object-center object-cover w-full h-85' src={item.images[0]} alt={item.name} width={400} height={400} />
                        {item.onSale && <div className='absolute bg-white rounded-full top-5 right-5 text-[12px] px-3 py-1 text-black'>Sale</div>}
                    <h3 className={`${serif.className} text-base group-hover:underline  tracking-wider mt-2 px-2 text-black`}>{item.name}</h3>
                    <div className='flex gap-5 text-black px-2 mt-1 items-center'>
                        <p className={`${item.onSale ? "line-through text-[12px]" : "text-sm"}`}>Rs.{item.price} PKR</p>
                        {item.onSale && <p className='tracking-wider'>Rs.{item.salePrice} PKR</p>}
                    </div>
                </Link>
            ))}
        </div>
      </section>
    </main>
  )
}

export default page