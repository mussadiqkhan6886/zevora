import CardTwo from '@/components/customer/CardTwo'
import { products } from '@/lib/constants'
import { serif } from '@/lib/fonts'
import React from 'react'

const page = async ({params}: {params: {collection: Promise<string>}}) => {

    const slug = (await (await params).collection)
    const category = (await (await params).collection).replace("-", " ")
    
    const filtered = products.filter(product => {
        if(category === "all"){
            return true
        }else if(category === "best selling"){
            return product.hotSeller
        }
        else{
            return product.category === category
        }
    })


  return (
    <main className='pt-35 max-w-7xl mx-auto'>
      <h1 className={`${serif.className} capitalize text-2xl md:text-4xl my-10`}>{category}</h1>
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
        <p className="text-sm text-zinc-500">{filtered.length} products</p>
      </div>
      <section className='grid gap-6 grid-col-2 md:grid-cols-3 lg:grid-cols-4 my-10'>
        {filtered.map((item, i) => (
            <CardTwo key={i} collectionSlug={slug} {...item} />
        ))}
      </section>
    </main>
  )
}

export default page
