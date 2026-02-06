import { serif } from '@/lib/fonts'
import Image from 'next/image'
import Link from 'next/link'

const Card = ({name, price, salePrice, onSale, images, slug, collectionSlug}: {name: string, price: number, salePrice: number | null, onSale: boolean, images: string[], slug: string, collectionSlug: string}) => {
  return (
    <Link href={`${collectionSlug}/${slug}`} className='relative group'>
      <Image src={images[0]} alt={"images"} width={400} className='w-full' height={400} />
        {onSale && <div className='absolute bg-white rounded-full top-5 right-5 text-[12px] px-3 py-1 z-40 text-black'>Sale</div>}
      <h3 className={`${serif.className} text-base  tracking-wider mt-2 px-2 text-white group-hover:underline`}>{name}</h3>
      <div className='flex gap-5 text-white px-2 mt-1 items-center'>
        <p className={`${onSale ? "line-through text-[12px]" : "text-sm"}`}>Rs.{price} PKR</p>
        {onSale && <p className='tracking-wider'>Rs.{salePrice} PKR</p>}
      </div>
    </Link>
  )
}

export default Card
