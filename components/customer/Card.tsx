import { serif } from '@/lib/fonts'
import Image from 'next/image'
import Link from 'next/link'

type CardProps = {
  name: string
  price: number
  salePrice: number | null
  onSale: boolean
  images: string[]
  slug: string
  collectionSlug: string
  stock: number
}

const Card = ({
  name,
  price,
  salePrice,
  onSale,
  images,
  slug,
  collectionSlug,
  stock,
}: CardProps) => {

  if (stock <= 0) {
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
          <p className={`${onSale ? 'line-through text-[12px]' : 'text-sm'}`}>
            Rs.{price} PKR
          </p>
          {onSale && <p className="tracking-wider">Rs.{salePrice} PKR</p>}
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

      {onSale && (
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
