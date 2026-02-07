import CardTwo from '@/components/customer/CardTwo'
import Images from '@/components/customer/Images'
import { connectDB } from '@/lib/config/database'
import { serif } from '@/lib/fonts'
import ProductSchema from '@/lib/models/ProductSchema'
import { productType } from '@/type'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  await connectDB()
  const {slug} = await params
  const product = await ProductSchema.findOne({ slug: slug }).lean()

  if (!product) {
    return {
      title: 'Product Not Found | Zevora',
      description: 'This product could not be found.',
    }
  }

  const ogImage = product.images?.[0] || '/logo.png'

  return {
    title: `${product.name}`,
    description: product.description?.slice(0, 160) || 'Premium product from Zevora.',
    alternates: {
      canonical: `/collections/${product.category}/${product.slug}`,
    },
    keywords: product.keywords,
    openGraph: {
      title: `${product.name} | Zevora`,
      description: product.description?.slice(0, 160),
      url: `/collections/${product.category}/${product.slug}`,
      type: 'website',
      siteName: 'Zevora',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: product.name,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${product.name} | Zevora`,
      description: product.description?.slice(0, 160),
      images: [ogImage],
    },
  }
}

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
      <section className="grid grid-cols-1 min-h-[90vh] md:grid-cols-2 gap-10">
        
        <Images images={product.images} name={product.name} />

        <div className="flex flex-col justify-between lg:pt-10">
          <h1 className={`${serif.className} capitalize text-4xl tracking-wider`}>
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

            {
              (product.sizes !== null && product.sizes.length > 0) && (<div>
                <h3 className="font-semibold">Sizes:</h3>
                <div className="flex gap-3 mt-2">
                {product.sizes.map((item: string) => (
                  <button className="text-black border border-zinc-700 rounded-full cursor-pointer px-5 text-sm py-1 font-semibold" key={item}>{item}</button>
                ))}
                </div>
              </div>)
            }

            {
              (product.volume !== "" && product.fragranceType !== "" && product.volume !== null) && (
                <>
                <div className='text-sm'>
                  <h3><span className='font-semibold'>Volume:</span> {product.volume} ml</h3>
                </div>
                <div className='text-sm'>
                  <h3><span className='font-semibold'>Fragrance Type:</span> {product.fragranceType}</h3>
                </div>
                </>
              )
            }


          <div className="flex flex-col gap-2">
            <p className="text-sm font-medium">Quantity</p>
            <div className="flex items-center w-max border px-4 py-2 gap-6">
              <button className="text-lg hover:opacity-70">−</button>
              <span className="text-sm">1</span>
              <button className="text-lg hover:opacity-70">+</button>
            </div>
          </div>
          

          <div>
            <h3 className='font-semibold'>Description: </h3>
            <p className="text-zinc-800">{product.description}</p>
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
          <p className="text-sm text-zinc-500">
            Shipping calculated at checkout
          </p>
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