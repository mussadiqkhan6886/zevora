import { collections } from '@/lib/constants'
import { serif } from '@/lib/fonts'
import Image from 'next/image'
import Link from 'next/link'
import { FiArrowRight } from 'react-icons/fi'

const Page = () => {
  return (
    <main className='pt-35 max-w-7xl mx-auto mb-14'>
      <h1 className={`${serif.className} text-5xl mb-10 ml-10 md:ml-1`}>Collections</h1>
      <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {collections.map(item => (
            <Link key={item.name} href={item.link} aria-label={`Go to ${item.name} collection`}>
            <article className='flex flex-col items-center'>
                <Image className='h-110 object-center object-cover' src={item.image} alt={item.name} width={400} height={400} />
                <h2 className={`${serif.className} flex items-center gap-2 mt-2 text-2xl`}>{item.name} <FiArrowRight /></h2>
            </article>
            </Link>
        ))}
      </div>
    </main>
  )
}

export default Page
