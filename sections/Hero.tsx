import RotatingText from '@/components/ui/RotatingText'
import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <section className='h-[100vh] sm:h-[110vh] lg:h-[120vh] xl:h-[110vh] md:px-4'>
         <RotatingText
              texts={['Watches', 'Jewelry', 'Perfumes', 'Rings']}
              mainClassName="px-6 sm:px-2 text-3xl min-[420px]:text-[36px] min-[466px]:text-3xl sm:text-[42px] md:text-6xl lg:text-[93px] md:px-3 text-center max-w-8xl mx-auto my-2 sm:my-5"
              staggerFrom={"last"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2300}
          />
        <Image src="/hero.webp" width={1000} height={1000} priority fetchPriority='high' alt='hero' className='w-full h-[77vh] md:h-[90vh] object-cover object-center' />
    </section>
  )
}

export default Hero
