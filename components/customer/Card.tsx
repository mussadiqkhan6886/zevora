import { serif } from '@/lib/fonts'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Card = ({name, price, salePrice, onSale, image, link}: {name: string, price: number, salePrice: number, onSale: boolean, image: string, link: string}) => {
  return (
    <Link href={link} className='relative'>
      <Image src={image} alt={name} width={400} height={400} />
        {onSale && <div className='absolute bg-white rounded-full top-5 right-5 text-[12px] px-3 py-1 text-black'>Sale</div>}
      <h3 className={`${serif.className} text-base  tracking-wider mt-2 px-2 text-white`}>{name}</h3>
      <div className='flex gap-5 text-white px-2 mt-1 items-center'>
        <p className={`${onSale ? "line-through text-[12px]" : "text-sm"}`}>Rs.{price} PKR</p>
        {onSale && <p className='tracking-wider'>Rs.{salePrice} PKR</p>}
      </div>
    </Link>
  )
}

export default Card
