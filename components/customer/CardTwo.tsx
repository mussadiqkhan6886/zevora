import { serif } from '@/lib/fonts'
import { Variant } from '@/type'
import Image from 'next/image'
import Link from 'next/link'

type CardTwoProps = {
  name: string
  price: number
  salePrice?: number | null
  onSale?: boolean
  images: string[]
  slug: string
  collectionSlug: string
  variants: Variant[]
  hasVariants: boolean
}

const CardTwo = ({
  name,
  price,
  salePrice,
  onSale,
  images,
  slug,
  collectionSlug,
  variants,
  hasVariants,
}: CardTwoProps) => {

 const hasStock = hasVariants
  ? variants.some(v => v.stock > 0)
  : variants[0]?.stock > 0

const isSoldOut = !hasStock


  if (isSoldOut) {
    return (
      <div className="relative mb-4 opacity-60 cursor-not-allowed">
        <Image
          src={images?.[0] || '/placeholder.png'}
          alt={name}
          width={400}
          height={400}
          className="object-cover object-center w-full h-[340px]"
        />

        <div className="absolute bg-white rounded-full top-5 right-5 text-[12px] px-3 py-1 text-black">
          Sold Out
        </div>

        <h2
          className={`${serif.className} capitalize text-base text-center tracking-wider mt-2 px-2 text-black`}
        >
          {name}
        </h2>

        <div className="flex gap-5 text-black px-2 mt-1 items-center justify-center">
          <p className={`${onSale ? 'line-through text-[12px]' : 'text-sm'}`}>
            Rs.{price} PKR
          </p>
          {onSale && salePrice !== null && (
            <p className="tracking-wider">Rs.{salePrice} PKR</p>
          )}
        </div>
      </div>
    )
  }

  return (
    <Link
      href={`/collections/${collectionSlug}/${slug}`}
      className="relative group mb-4 block"
    >
      <Image
        src={images?.[0] || '/placeholder.png'}
        alt={name}
        width={400}
        height={400}
        className="object-cover object-center w-full h-[340px]"
      />

      {onSale && (
        <div className="absolute bg-white rounded-full top-5 right-5 text-[12px] px-3 py-1 text-black">
          Sale
        </div>
      )}

      <h2
        className={`${serif.className} capitalize text-base text-center tracking-wider mt-2 px-2 text-black group-hover:underline`}
      >
        {name}
      </h2>

      <div className="flex gap-5 text-black px-2 mt-1 items-center justify-center">
        <p className={`${onSale ? 'line-through text-[12px]' : 'text-sm'}`}>
          Rs.{price} PKR
        </p>
        {onSale && salePrice !== null && (
          <p className="tracking-wider">Rs.{salePrice} PKR</p>
        )}
      </div>
    </Link>
  )
}

export default CardTwo
