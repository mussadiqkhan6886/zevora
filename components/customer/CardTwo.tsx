import { serif } from '@/lib/fonts'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CardTwo = ({name, price, salePrice, onSale, images, slug}: {name: string, price: number, salePrice: number, onSale: boolean, images: string[], slug: string}) => {
  return (
    <Link href={slug} className='relative group mb-4'>
      <Image className='object-center object-cover w-full h-85' src={images[0]} alt={name} width={400} height={400} />
        {onSale && <div className='absolute bg-white rounded-full top-5 right-5 text-[12px] px-3 py-1 text-black'>Sale</div>}
      <h3 className={`${serif.className} text-base group-hover:underline  tracking-wider mt-2 px-2 text-black`}>{name}</h3>
      <div className='flex gap-5 text-black px-2 mt-1 items-center'>
        <p className={`${onSale ? "line-through text-[12px]" : "text-sm"}`}>Rs.{price} PKR</p>
        {onSale && <p className='tracking-wider'>Rs.{salePrice} PKR</p>}
      </div>
    </Link>
  )
}

export default CardTwo
