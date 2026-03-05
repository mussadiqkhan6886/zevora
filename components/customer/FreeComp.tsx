'use client';

import { lavish } from '@/lib/fonts';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const FreeComp = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [once, setOnce] = useState(true)

  useEffect(() => {
    const hasSeenPopup = sessionStorage.getItem('free-gift-popup');

    if (!hasSeenPopup) {
      setShowPopup(true);
      sessionStorage.setItem('free-gift-popup', 'true');
    }
  }, []);

  useEffect(() => {
    setTimeout(() => {
        setOnce(false)
    }, 1400);
  }, [])


  if(!showPopup){
    return null
  }


  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/10 backdrop-blur-sm">
      
      <div className="relative max-w-3xl w-[90%] rounded-xl  shadow-2xl animate-fadeIn">
        
        <button
          onClick={() => setShowPopup(false)}
          className="absolute top-3 right-3 z-10 text-black bg-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-gray-200"
        >
          ✕
        </button>

        <div className="relative h-[400px] flex items-center justify-center text-center px-6">
          
          <Image
            src="/gift.webp"
            alt="Free Gift"
            fill
            className="object-cover"
            priority
          />

          <div className="absolute inset-0 bg-black/10" />

          <div className="relative z-10 text-white">
            <h2 className={`${lavish.className} text-6xl md:text-8xl mb-4`}>
              Get a Free Gift
            </h2>
            <p className="text-lg uppercase md:text-xl font-light">
              On orders above <span className="font-bold">PKR 5,000</span>
            </p>
          </div>

          {once && <Image
            src="/confetti.gif"
            alt="Confetti"
            width={250}
            height={250}
            className="object-cover pointer-events-none absolute bottom-0  "
          />}
          {once && <Image
            src="/confetti.gif"
            alt="Confetti"
            width={250}
            height={250}
            className="object-cover pointer-events-none absolute right-10 top-0  "
          />}
          {once && <Image
            src="/confetti.gif"
            alt="Confetti"
            width={250}
            height={250}
            className="object-cover pointer-events-none absolute -left-20 -top-20 "
          />}
        </div>
      </div>
    </div>
  );
};

export default FreeComp;
