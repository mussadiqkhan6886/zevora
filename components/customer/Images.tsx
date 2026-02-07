'use client';

import Image from 'next/image'
import React, { useState } from 'react'

const Images = ({
  images,
  name,
}: {
  images: string[]
  name: string
}) => {
  const [activeImage, setActiveImage] = useState(images[0])

  return (
    <div className="flex flex-col-reverse lg:flex-row gap-6">
      
      <div className="flex flex-row lg:flex-col gap-4">
        {images.map((item, i) => (
          <button
            key={i}
            onClick={() => setActiveImage(item)}
            className={`w-20 h-20 border overflow-hidden ${
              activeImage === item ? 'border-black' : 'border-zinc-200'
            }`}
          >
            <Image
              src={item}
              alt={`${name} thumbnail ${i}`}
              width={80}
              height={80}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>

      <div className="w-full max-w-[500px] aspect-square">
        <Image
          src={activeImage}
          alt={name}
          width={600}
          height={600}
          className="w-full h-full object-cover"
          priority
        />
      </div>
    </div>
  )
}

export default Images
