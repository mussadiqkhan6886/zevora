import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CheckoutHeader = () => {
  return (
    <header className='flex items-center justify-center py-6 border-b'>
      <Link href={"/"}><Image src={"/logo.png"} alt='checkout page header logo' width={130} height={130} /></Link>
    </header>
  )
}

export default CheckoutHeader
