import { products } from '@/lib/constants'
import { serif } from '@/lib/fonts'
import React from 'react'

const page = async ({params}: {params: {collection: Promise<string>}}) => {

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
      <h1 className={`${serif.className} capitalize text-3xl`}>{category}</h1>
      <div>
        <p>{filtered.length} products</p>
      </div>
      <section>

      </section>
    </main>
  )
}

export default page
