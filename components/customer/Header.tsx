'use client';

import React from 'react'
import {Swiper, SwiperSlide} from "swiper/react"
import {Autoplay} from "swiper/modules"
import "swiper/css"
import { serif } from '@/lib/fonts';

const Header = () => {
  return (
    <header>

      <Swiper
        modules={[Autoplay]}
        slidesPerView={1}
        autoplay={{delay: 2500, disableOnInteraction: false}}
        loop
        className={`bg-main text-white text-[13px] ${serif.className}`}
      >
        <SwiperSlide className='py-2 text-center tracking-widest'>Delivery charges 190rs Free delivery for orders above 3000rs</SwiperSlide>
        <SwiperSlide className='py-2 text-center tracking-widest'>All products come with 1 year colour warranty</SwiperSlide>
      </Swiper>

      <div>
        <nav>

        </nav>
        <div>

        </div>
      </div>
    </header>
  )
}

export default Header
