import RotatingText from '@/components/ui/RotatingText'
import { serif } from '@/lib/fonts'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
    <section className='h-[100vh] sm:h-[110vh] lg:h-[120vh] xl:h-[110vh] md:px-4 relative'>
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
        <Image src="/hero.webp" width={1000} height={1000} priority fetchPriority='high' alt='hero' className='w-full h-[77vh] md:h-[90vh] object-cover object-center rounded-b-4xl' />
        <div className='absolute w-full flex flex-col sm:flex-row justify-start sm:justify-center items-start sm:items-center gap-4 left-1/2 top-1/2 ml-3 sm:ml-0 -translate-x-1/2 translate-y-[40%] sm:translate-y-[300%] lg:translate-y-[130%]'>
          <button>
            <Link className={`${serif.className} text-sm md:text-base px-6 py-2 font-semibold backdrop-blur-sm border rounded-full border-white bg-zinc-50/20 text-black text-center w-full block shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300`} href="/collections">
              Explore Collections
            </Link>
          </button>
          <button>
            <Link className={`${serif.className}  text-sm md:text-base px-6 py-2 font-semibold border rounded-full border-zinc-800 bg-ctr  text-white text-center w-full block shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300`} href="/collections/all">
              All Accessories
            </Link>
          </button>
        </div>
    </section>
  )
}

export default Hero
