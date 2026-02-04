import { serif } from '@/lib/fonts'
import React from 'react'

const About = () => {
  return (
    <section className='bg-main text-white flex items-center justify-center flex-col py-15 my-10'>
      <h4 className={`${serif.className} text-4xl text-center`}>ZEVORA</h4>
      <p className='max-w-4xl mx-auto text-center py-10'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit aperiam nostrum suscipit a odit qui illo consequatur necessitatibus vitae voluptatum modi, nobis, sed quisquam quaerat quibusdam reiciendis cum nam dolore.lorem Lorem ip</p>
      <p className='font-bold text-lg'>80k Satisfied Customers</p>
    </section>
  )
}

export default About
