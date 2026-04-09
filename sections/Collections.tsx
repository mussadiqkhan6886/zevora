'use client';
import { useRef } from 'react';
import { motion, useTransform, useScroll } from 'framer-motion';
import { signature } from '@/lib/constants';
import { serif } from '@/lib/fonts';
import Image from 'next/image';
import Link from 'next/link';
import { FiArrowRight, FiArrowUpRight } from 'react-icons/fi';

const Collections = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  
  // 1. Monitor scroll progress of the container
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // 2. Map vertical scroll (0 to 1) to horizontal movement (-75% or similar)
  // We move it to the left as we scroll down
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-120%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-white">
      
      {/* 3. The Sticky Container: This stays in view while the parent scrolls */}
      <div className="sticky top-0 flex h-screen items-center overflow-hidden px-4 max-w-7xl mx-auto">
        
        <div className="w-full">
          {/* Header remains static or can be moved too */}
          <div className='flex justify-between items-center mb-12'>
              <h2 className={`${serif.className} text-3xl sm:text-[42px] leading-12 italic`}>
                  Explore Our <br /> Signature Collections
              </h2>
              <Link href={"/collections/all"} className='hidden border-b pb-1 uppercase font-light text-lg md:flex gap-2 items-center'>
                View All <FiArrowRight />
              </Link>
          </div>

          {/* 4. The Moving Track */}
          <motion.div style={{ x }} className="flex mb-12 gap-8">
            {signature.map((item) => (
              <Link 
                key={item.name} 
                className='group flex-shrink-0 w-[300px] md:w-[320px]' 
                href={item.link}
              >
                <article className='flex flex-col items-center'>
                  <div className="overflow-hidden w-full">
                    <Image 
                      className='h-110 group-hover:scale-105 transition-all duration-400 object-center object-cover' 
                      src={item.image} 
                      alt={item.name} 
                      width={400} 
                      height={400} 
                    />
                  </div>
                  <h2 className={`${serif.className} flex items-center gap-2 mt-3 text-2xl whitespace-nowrap`}>
                    {item.name} <FiArrowUpRight className='mt-1' />
                  </h2>
                </article>
              </Link>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Collections;