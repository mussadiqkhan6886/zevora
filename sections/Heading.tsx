import React from 'react'
import RotatingText from '../components/ui/RotatingText'

const Heading = () => {
  return (
    <div className=' px-3 mb-17'>
        <RotatingText
            texts={['Watches', 'Jewelry', 'Perfumes', 'Rings']}
            mainClassName="px-2 sm:px-2 text-6xl md:px-3 text-center max-w-xl mb-6 mx-auto"
            staggerFrom={"last"}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={2300}
        />
        <p className='text-center px-10 tracking-relaxed text-lg font-light'>At Zevora Official, we redefine luxury by offering an exquisite collection of premium watches, luxury <strong className="font-normal italic">perfumes</strong>, and <strong className="font-normal italic">designer jewelry </strong> at the most affordable prices in Pakistan. Whether you are looking for timeless<strong className="font-normal italic"> gold-plated jewelrys</strong>, durable <strong className="font-normal italic">stainless steel rings</strong>, or <strong className="font-normal italic">elegant bracelets</strong>, our curated selection caters to every style. Beyond accessories, we feature a trendy range of handbags designed for the modern woman. Based in Lahore and serving customers in Islamabad, Karachi, and all over Pakistan, Zevora is your <strong>trusted</strong> online shop for high-quality fashion essentials that combine elegance with exceptional value.</p>
    </div>
    
  )
}

export default Heading
