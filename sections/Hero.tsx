import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <section className='h-screen'>
        <Image src="/hero.png" fill alt='hero' className='w-full h-full object-cover object-top' />
    </section>
  )
}

export default Hero
