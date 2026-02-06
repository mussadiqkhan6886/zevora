import CardTwo from '@/components/customer/CardTwo'
import SortSelect from '@/components/customer/SortSelect'
import { connectDB } from '@/lib/config/database'
import { serif } from '@/lib/fonts'
import ProductSchema from '@/lib/models/ProductSchema'
import { productType } from '@/type'
import React from 'react'
import { StringDecoder } from 'string_decoder'

export async function generateMetadata({ params }: { params: Promise<{ collection: string }> }) {
  const { collection } = await params
  const categoryName = collection.replaceAll('-', ' ')

  await connectDB()

  const sampleProduct = await ProductSchema.findOne({ category: collection }).lean()
  const ogImage = sampleProduct?.images?.[0] || '/logo.png'

  return {
    title: `${categoryName}`,
    description: `Explore our premium ${categoryName} collection. Shop top-quality watches, jewelry sets, and luxury perfumes at Zevora.`,
    alternates: {
      canonical: `/collections/${collection}`,
    },
    openGraph: {
      title: `${categoryName} | Zevora`,
      description: `Discover the best ${categoryName} products at Zevora. Elegant designs and fast delivery.`,
      url: `/collections/${collection}`,
      type: 'website',
      siteName: 'Zevora',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${categoryName} Collection - Zevora`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${categoryName} | Zevora`,
      description: `Shop premium ${categoryName} products at Zevora. Elegant designs and fast delivery.`,
      images: [ogImage],
    },
  }
}

const page = async ({params, searchParams}: {params: Promise<{collection: string}>, searchParams: Promise<{sort?: StringDecoder}>}) => {

  const {collection} = (await params)
  const {sort} = (await searchParams)

  await connectDB()

  const sortMap: Record<string, any> = {
  'date-old-new': { createdAt: 1 },
  'date-new-old': { createdAt: -1 },
  'price-low-high': { price: 1 },
  'price-high-low': { price: -1 },
}


  const filter = collection == "all" ? {} : {category: collection}

  const sortOption = sortMap[sort ?? "date-new-old"]

  const res = await ProductSchema.find(filter).sort(sortOption).lean()

  const products = JSON.parse(JSON.stringify(res))


  return (
    <main className='pt-30 px-3 max-w-7xl mx-auto'>
      <h1 className={`${serif.className} capitalize text-4xl my-10`}>{collection.replaceAll("-", " ")}</h1>
      <div className='flex justify-between items-center'>
        <div>
            <label className="text-zinc-500 text-sm inline-block mr-4">Sort By:</label>
            <SortSelect />
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
