import { serif } from '@/lib/fonts'
import { Variant } from '@/type'
import Image from 'next/image'
import Link from 'next/link'

type CardProps = {
  name: string
  images: string[]
  slug: string
  collectionSlug: string
  variants: Variant[]
}

const Card = ({
  name,
  images,
  slug,
  collectionSlug,
  variants,
}: CardProps) => {

  const isOnSale = variants.find(item => item.onSale)

  if ((variants[0].attributes.size === null && variants[0].attributes.volume === null) && variants[0].stock <= 0) {
    return (
      <div className="relative opacity-60 cursor-not-allowed">
        <Image
          src={images[0]}
          alt={name}
          width={400}
          height={400}
          className="w-full h-[350px] object-cover"
        />

        <div className="absolute bg-white rounded-full top-5 right-5 text-[12px] px-3 py-1 z-40 text-black">
          Out Of Stock
        </div>

        <h3 className={`${serif.className} text-base text-center tracking-wider mt-2 px-2 text-white`}>
          {name}
        </h3>

        <div className="flex gap-5 text-white px-2 mt-1 items-center justify-center">
          <p className={`${isOnSale?.onSale ? 'line-through text-[12px]' : 'text-sm'}`}>
            Rs.{variants[0].price} PKR
          </p>
          {isOnSale?.onSale && <p className="tracking-wider">Rs.{isOnSale?.price} PKR</p>}
        </div>
      </div>
    )
  }

  return (
    <Link href={`/${collectionSlug}/${slug}`} className="relative group">
      <Image
        src={images[0]}
        alt={name}
        width={400}
        height={400}
        className="w-full h-[350px] object-cover"
      />

      {isOnSale && (
        <div className="absolute bg-white rounded-full top-5 right-5 text-[12px] px-3 py-1 z-40 text-black">
          Sale
        </div>
      )}

      <h3
        className={`${serif.className} text-base text-center tracking-wider mt-2 px-2 text-white group-hover:underline`}
      >
        {name}
      </h3>

      <div className="flex gap-5 text-white px-2 mt-1 items-center justify-center">
        <p className={`${onSale ? 'line-through text-[12px]' : 'text-sm'}`}>
          Rs.{price} PKR
        </p>
        {onSale && <p className="tracking-wider">Rs.{salePrice} PKR</p>}
      </div>
    </Link>
  )
}

export default Card
