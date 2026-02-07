'use client'

import { CartItem } from '@/type'
import { createContext, useContext, useState } from 'react'

type CartContextType = {
  cart: CartItem[]
  addToCart: (item: CartItem) => void
  removeFromCart: (productId: string, variantLabel?: string) => void
  clearCart: () => void
}

export const CartContext = createContext<CartContextType | null>(null)

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([])

  const addToCart = (item: CartItem) => {
    setCart(prev => {
      const existing = prev.find(
        p =>
          p.productId === item.productId &&
          p.variant?.label === item.variant?.label
      )

      if (existing) {
        return prev.map(p =>
          p === existing
            ? { ...p, quantity: p.quantity + item.quantity }
            : p
        )
      }

      return [...prev, item]
    })
  }

  const removeFromCart = (productId: string, variantLabel?: string) => {
    setCart(prev =>
      prev.filter(
        p =>
          !(
            p.productId === productId &&
            p.variant?.label === variantLabel
          )
      )
    )
  }

  const clearCart = () => setCart([])

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  )
}
