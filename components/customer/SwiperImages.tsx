import Image from 'next/image'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'

import "swiper/css"
import "swiper/css/pagination"

const SwiperImages = ({images}: {images: string[]}) => {
  return (
    <Swiper
    modules={[Pagination]}
    pagination={{clickable: true}}
    >
      {images.map(image => (
        <SwiperSlide>
            <Image src={image} alt={"images"} width={400} className='w-full' height={400} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default SwiperImages
