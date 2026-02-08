import { serif } from '@/lib/fonts'
import Link from 'next/link'
import React from 'react'
import { FiFacebook, FiInstagram } from 'react-icons/fi'

const Footer = () => {
  return (
    <footer className='border-t border-zinc-300 bg-zinc-100'>
      <div className='flex flex-col justify-center items-center py-10'>
        <p className={`${serif.className} text-lg`}>Subscribe to Our Socials</p>
        <div className='flex gap-4 pt-5'>
          <FiInstagram className='text-xl' />
          <FiFacebook className='text-xl' />
        </div>
      </div>
      <div className='border-t flex gap-4 flex-wrap items-center justify-center border-zinc-300 py-5 text-[12px] text-zinc-600'>
        <p>&copy; {new Date().getFullYear()}, <Link href={"/"}>ZEVORA</Link></p>
        <Link href={"/return-refund-policy"}>Refund Policy</Link>
        <Link href={"/privacy-policy"}>Privacy Policy</Link>
        <Link href={"/terms-service"}>Terms Of Service</Link>
        <Link href={"/shipping-policy"}>Shipping Policy</Link>
        <Link href={"/contact-information"}>Contact Information</Link>
      </div>
    </footer>
  )
}

export default Footer
