'use client'

import { useCart } from '@/hooks/useCart'
import { productType } from '@/type'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FiX } from 'react-icons/fi'

const AddToCartButton = ({ product }: { product: productType }) => {
  const { addToCart, cart } = useCart()

  const hasVariants = product.hasVariants && product.variants?.length > 0

  const [selectedVariant, setSelectedVariant] = useState<{
    label: string
    stock: number
  } | null>(null)

  const [quantity, setQuantity] = useState(1)
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("Add To Cart")
  const [popUp, setPopUp] = useState(false)
  const [flag, setFlag] = useState(false)

  const baseFinalPrice = product.onSale && product.salePrice
    ? product.salePrice
    : product.price

  const finalPrice = baseFinalPrice

  const addToCartHandler = () => {
    setFlag(true)
   

    if (hasVariants && !selectedVariant) {
      setPopUp(true)
      return
    }
    setLoading(true)
    addToCart({
      productId: product._id,
      name: product.name,
      slug: product.slug,
      image: product.images[0],

      variant: selectedVariant ?? {
        label: product.variants[0].label,
        stock: product.variants[0].stock
      },

      price: product.price,
      salePrice: product.salePrice ?? null,
      onSale: Boolean(product.onSale),

      finalPrice,
      quantity,
    })

    console.log(cart)
    setLoading(false)
    setStatus("Added")
  }

  useEffect(() => {
    setTimeout(() => {
      setStatus("Add To Cart")
      setFlag(false)
    }, 1500)

  }, [cart, flag])


  return (
    <>
    {popUp && (
      <div className='fixed inset-0 bg-black/30 flex items-center justify-center z-50'>
        <div className='p-10 bg-white relative cursor-pointer'>
          <FiX onClick={() => setPopUp(false)} className='absolute top-4 right-4' />
          <h2 className='text-3xl font-semibold'>Please Select Variant</h2>
        </div>
      </div>
    )}
      {/* VARIANTS (RINGS / SIZES) */}
      {hasVariants && product.category.includes('ring') && (
        <div>
          <h3 className="font-semibold mb-2">Sizes</h3>
          <div className="flex gap-3 flex-wrap">
            {product.variants.map(
              (v: { label: string; stock: number }) => (
                <button
                  key={v.label}
                  disabled={v.stock <= 0}
                  onClick={() =>
                    setSelectedVariant({ label: v.label, stock: v.stock })
                  }
                  className={`px-5 py-1 rounded-full border text-sm font-semibold
                    ${
                      selectedVariant?.label === v.label
                        ? 'bg-black text-white'
                        : 'hover:bg-black hover:text-white'
                    }
                    ${
                      v.stock <= 0
                        ? 'line-through opacity-40 cursor-not-allowed'
                        : ''
                    }
                  `}
                >
                  {v.label}
                </button>
              )
            )}
          </div>
        </div>
      )}

      {/* QUANTITY */}
      <div>
        <p className="text-sm font-medium mb-1">Quantity</p>
        <div className="flex items-center w-max border px-1 py-2 gap-4">
          <button className=' px-4 py-1'
            onClick={() => setQuantity(q => Math.max(1, q - 1))}
          >
            −
          </button>
          <span>{quantity}</span>
          <button className=' px-4 py-1' onClick={() => setQuantity(q => q + 1)}>+</button>
        </div>
      </div>

      {/* CTA */}
      <div className="flex flex-col gap-3 mt-4">
        <button
          onClick={addToCartHandler}
          disabled={loading || status === "Added"}
          className="w-full py-3 disabled:opacity-70 bg-black text-white not-disabled:hover:bg-white not-disabled:hover:text-black not-disabled:cursor-pointer border border-black transition"
        >
          {loading ? <p className='animate-bounce'>Loading...</p>  : status}
        </button>

        <Link
          href="/checkout"
          onClick={addToCartHandler}
          className="w-full text-center py-3 border border-black hover:bg-black hover:text-white transition"
        >
          Buy it now
        </Link>
      </div>
    </>
  )
}

export default AddToCartButton
