import { collections } from '@/lib/constants'
import { serif } from '@/lib/fonts'
import Image from 'next/image'
import Link from 'next/link'
import { FiArrowRight } from 'react-icons/fi'

export const metadata: Metadata = {
  title: 'Collections',
  description:
    'Explore all premium collections of watches, jewelry sets, and luxury perfumes at Zevora. Browse categories and discover timeless designs.',
  alternates: {
    canonical: '/collections',
  },

  openGraph: {
    title: 'Collections | Zevora',
    description:
      'Browse all premium collections of watches, jewelry sets, and luxury perfumes. Find your perfect style.',
    url: '/collections',
    type: 'website',
    siteName: 'Zevora',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Zevora Collections – Watches, Jewelry & Perfumes',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Collections | Zevora',
    description:
      'Browse premium collections of watches, jewelry sets, and luxury perfumes. Find your perfect style.',
    images: ['/logo.png'],
  },
}

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
