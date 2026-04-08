import { collections } from '@/lib/constants'
import { serif } from '@/lib/fonts'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { FiArrowRight } from 'react-icons/fi'

export const metadata: Metadata = {
  title: 'All Collections — Zevora Official',
  description:
    'Explore all premium collections at Zevora Official — watches, gold-plated jewelry sets, stainless steel rings, bracelets, earrings, bags & luxury perfumes. Shop online in Pakistan with cash on delivery.',
  alternates: {
    canonical: 'https://www.zevoraofficial.com/collections',
  },
  keywords: [
    'zevora collections',
    'watches jewelry perfumes pakistan',
    'online accessories collections pakistan',
    'buy jewelry watches online pakistan',
    'fashion collections pakistan',
    'watches in Pakistan',
    'buy watches online Pakistan',
    'jewelry online Pakistan',
    'affordable watches Lahore',
  ],

  openGraph: {
    title: 'All Collections | Watches, Jewelry & Perfumes — Zevora Official',
    description:
      'Browse all premium collections of watches, gold-plated jewelry sets, stainless steel rings, bracelets & luxury perfumes. Fast delivery across Pakistan.',
    url: 'https://www.zevoraofficial.com/collections',
    type: 'website',
    siteName: 'Zevora Official',
    images: [
      {
        url: 'https://www.zevoraofficial.com/all.jpg',
        width: 1200,
        height: 630,
        alt: 'Zevora Official Collections – Watches, Jewelry & Perfumes in Pakistan',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    site: '@zevoraofficial',
    creator: '@zevoraofficial',
    title: 'All Collections | Watches, Jewelry & Perfumes — Zevora Official',
    description:
      'Browse premium watches, gold-plated jewelry sets, stainless steel rings & luxury perfumes. Shop online in Pakistan with cash on delivery.',
    images: ['https://www.zevoraofficial.com/all.jpg'],
  },
}

const BASE_URL = 'https://www.zevoraofficial.com'

const collectionsJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: `${BASE_URL}/`,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Collections',
          item: `${BASE_URL}/collections`,
        },
      ],
    },
    {
      '@type': 'CollectionPage',
      '@id': `${BASE_URL}/collections`,
      name: 'All Collections — Zevora Official',
      description:
        'Explore all premium collections at Zevora Official including watches, jewelry sets, rings, bracelets, earrings, bags and luxury perfumes available online in Pakistan.',
      url: `${BASE_URL}/collections`,
      inLanguage: 'en-PK',
      isPartOf: {
        '@type': 'WebSite',
        '@id': `${BASE_URL}/#website`,
        name: 'Zevora Official',
        url: `${BASE_URL}/`,
      },
      publisher: {
        '@type': 'Organization',
        '@id': `${BASE_URL}/#organization`,
        name: 'Zevora Official',
        url: `${BASE_URL}/`,
        logo: {
          '@type': 'ImageObject',
          url: `${BASE_URL}/header-logo.png`,
        },
      },
    },
    {
      '@type': 'ItemList',
      '@id': `${BASE_URL}/collections#itemlist`,
      name: 'Zevora Official Product Collections',
      description:
        'All product collections available at Zevora Official Pakistan',
      numberOfItems: collections.length,
      itemListElement: collections.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        url: `${BASE_URL}${item.link}`,
      })),
    },
  ],
}

const Page = () => {
  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionsJsonLd) }}
      />
      <main className='pt-35 max-w-7xl mx-auto mb-14'>
        <h1 className={`${serif.className} text-5xl mb-10 ml-10 md:ml-1`}>
          Collections
        </h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {collections.map((item) => (
            <Link
              key={item.name}
              href={item.link}
              aria-label={`Shop ${item.name} collection at Zevora Official`}
            >
              <article className='flex flex-col items-center'>
                <Image
                  className='h-110 object-center object-cover'
                  src={item.image}
                  alt={`${item.name} collection — Zevora Official Pakistan`}
                  width={400}
                  height={400}
                  loading='lazy'
                />
                <h2
                  className={`${serif.className} flex items-center gap-2 mt-2 text-2xl`}
                >
                  {item.name} <FiArrowRight />
                </h2>
              </article>
            </Link>
          ))}
        </div>
      </main>
    </>
  )
}

export default Page