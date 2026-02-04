'use client';

import React, { useRef, useEffect } from 'react';
import Card from './Card';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';

import 'swiper/css';
import 'swiper/css/navigation';

const WatchesSection = ({ watchesList }: { watchesList: any[] }) => {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);
  const swiperRef = useRef<any>(null);

  useEffect(() => {
    if (swiperRef.current && prevRef.current && nextRef.current) {
      swiperRef.current.params.navigation.prevEl = prevRef.current;
      swiperRef.current.params.navigation.nextEl = nextRef.current;
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, []);

  return (
    <section className="relative w-full">
      
      {/* Swiper */}
      <Swiper
        modules={[Navigation]}
        spaceBetween={24}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        breakpoints={{
          0: { slidesPerView: 1.1 },
          480: { slidesPerView: 1.4 },
          640: { slidesPerView: 2.4 },
          768: { slidesPerView: 3.4 },
          1024: { slidesPerView: 4.4 },
        }}
      >
        {watchesList.map((item, index) => (
          <SwiperSlide key={index}>
            <Card {...item} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation */}
      <div className="flex items-center justify-center gap-4 mt-6">
        <button
          ref={prevRef}
          aria-label="Previous"
          className="swiper-btn"
        >
          <FiArrowLeft />
        </button>
        <button
          ref={nextRef}
          aria-label="Next"
          className="swiper-btn"
        >
          <FiArrowRight />
        </button>
      </div>
    </section>
  );
};

export default WatchesSection;
