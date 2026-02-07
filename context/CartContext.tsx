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

    const stockAvailable = item.variant?.stock ?? 999

    if (existing) {
      const newQuantity = existing.quantity + item.quantity
      if (newQuantity > stockAvailable) {
        alert(`Only ${stockAvailable} items available in stock!`)
        return prev
      }
      // merge quantity safely
      return prev.map(p =>
        p === existing ? { ...p, quantity: newQuantity } : p
      )
    }

    if (item.quantity > stockAvailable) {
      alert(`Only ${stockAvailable} items available in stock!`)
      return prev
    }

    // Add new item
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
