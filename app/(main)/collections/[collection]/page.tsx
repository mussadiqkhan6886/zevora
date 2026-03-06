import CardTwo from '@/components/customer/CardTwo'
import SortSelect from '@/components/customer/SortSelect'
import { connectDB } from '@/lib/config/database'
import { collectionMetadata } from '@/lib/constants'
import { serif } from '@/lib/fonts'
import ProductSchema from '@/lib/models/ProductSchema'
import { productType } from '@/type'
import { Metadata } from 'next'
import React from 'react'

export const revalidate = 60;

export async function generateMetadata({ params }: { params: Promise<{ collection: string }> }) : Promise<Metadata>{
  const { collection } = await params
  const categoryName = collection.replaceAll('-', ' ')

  await connectDB()

  const sampleProduct = await ProductSchema.findOne({ category: collection }).lean()
  const ogImage = sampleProduct?.images?.[0] || '/header-logo.png'

  const desc = collectionMetadata.find(item => item.slug === categoryName)

  return {
    title: desc?.title,
    description: desc?.description,
    alternates: {
      canonical: `/collections/${collection}`,
    },
    openGraph: {
      title: `${categoryName} | Zevora Official`,
      description: `Discover the best ${categoryName} products at Zevora. Elegant designs and fast delivery.`,
      url: `/collections/${collection}`,
      type: 'website',
      siteName: 'Zevora Official',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${categoryName} Collection - Zevora Official`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${categoryName} | Zevora Official`,
      description: `Shop premium ${categoryName} products at Zevora. Elegant designs and fast delivery.`,
      images: [ogImage],
    },
  }
}

export const generateStaticParams = async () => {
  await connectDB()
  const categories = await ProductSchema.distinct("category")
  
  return categories.map((cat: string) => ({
    collection: cat
  }))
}

const page = async ({params, searchParams}: {params: Promise<{collection: string}>, searchParams: Promise<{sort?: string}>}) => {

  const {collection} = (await params)
  const {sort} = (await searchParams)

  await connectDB()

  const desc = collectionMetadata.find(item => item.slug === collection)

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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": desc?.title || collection,
  "description": desc?.description,
  "url": `https://www.zevoraofficial.com/collections/${collection}`,
  "mainEntity": {
    "@type": "ItemList",
    "numberOfItems": products.length,
    "itemListElement": products.map((product: any, index: number) => ({
      "@type": "ListItem",
      "position": index + 1,
      "url": `https://www.zevoraofficial.com/collections/${product.category}/${product.slug}`,
      "name": product.name,
      "image": product.images?.[0],
      // Adding price info here helps Google show a price range for the category
      "offers": {
        "@type": "Offer",
        "price": product.onSale ? product.salePrice : product.price,
        "priceCurrency": "PKR",
        "availability": "https://schema.org/InStock"
      }
    }))
  }
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.zevoraofficial.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Collections",
      "item": "https://www.zevoraofficial.com/collections"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": desc?.title || collection,
      "item": `https://www.zevoraofficial.com/collections/${collection}`
    }
  ]
};

  return (
    <main className='pt-20 lg:pt-30 px-3 max-w-7xl mx-auto'>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <h1 className={`${serif.className} capitalize text-4xl my-10 mb-7`}>{desc?.title}</h1>
      <p className='mb-8 text-zinc-700'>{desc?.description}</p>
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
