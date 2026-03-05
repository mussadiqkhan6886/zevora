'use client'
import React from 'react'
import { motion } from 'framer-motion'

const Heading = () => {
  return (
    <div className='px-3 max-w-7xl mx-auto md:mt-5 mb-17 overflow-hidden'>
      <motion.p 
        // Initial state: Hidden, blurred, and shifted left
        initial={{ opacity: 0, x: -50, filter: 'blur(10px)' }}
        // Final state when in view
        whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
        // Animation settings
        transition={{ 
          duration: 0.8, 
          ease: "easeOut",
          delay: 0.2 
        }}
        // Only trigger once
        viewport={{ once: true, amount: 0.5 }}
        className='text-justify md:text-center px-4 md:px-10 tracking-relaxed text-lg font-light leading-relaxed'
      >
        <span className="font-semibold">Zevora Official</span> redefines luxury with an exquisite collection of 
        premium watches, <strong className="font-normal italic">designer jewelry</strong>, and 
        luxury <strong className="font-normal italic">perfumes</strong> at Pakistan’s most affordable prices. 
        From timeless <strong className="font-normal italic">gold-plated pieces</strong> and durable 
        <strong className="font-normal italic"> stainless steel rings</strong> to elegant handbags, our curated 
        selection caters to every style. Based in <span className="font-medium">Lahore</span> and serving 
        Islamabad, Karachi, and all over <span className="font-medium">Pakistan</span>, Zevora is your 
        <strong> trusted</strong> destination for high-quality fashion that combines elegance with exceptional value.
      </motion.p>
    </div>
  )
}

export default Heading