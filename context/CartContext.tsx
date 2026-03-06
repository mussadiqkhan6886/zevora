'use client'

import { CartItem } from '@/type'
import { createContext, useContext, useState, useMemo } from 'react'

type CartContextType = {
  cart: CartItem[]
  totalPrice: number
  addToCart: (item: CartItem) => void
  removeFromCart: (productId: string, variantLabel?: string) => void
  clearCart: () => void
  updateQuantity: (productId: string, variantLabel: string | undefined, action: 'increment' | 'decrement') => void
}

export const CartContext = createContext<CartContextType | null>(null)

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([])

  // 1. Calculate Total Price Dynamically
  const totalPrice = useMemo(() => {
    return cart.reduce((acc, item) => {
      const price = item.salePrice || item.price;
      return acc + price * item.quantity;
    }, 0);
  }, [cart]);

  // 2. Fixed Update Quantity Logic
  const updateQuantity = (productId: string, variantLabel: string | undefined, action: 'increment' | 'decrement') => {
    setCart(prev =>
      prev.map(item => {
        if (item.productId === productId && item.variant?.label === variantLabel) {
          const stockAvailable = item.variant?.stock ?? 999;
          
          if (action === 'increment') {
            if (item.quantity + 1 > stockAvailable) {
              alert(`Only ${stockAvailable} items available in stock!`);
              return item;
            }
            return { ...item, quantity: item.quantity + 1 };
          } else {
            // Prevent quantity from going below 1
            return { ...item, quantity: Math.max(1, item.quantity - 1) };
          }
        }
        return item;
      })
    );
  };

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
        return prev.map(p =>
          p === existing ? { ...p, quantity: newQuantity } : p
        )
      }

      if (item.quantity > stockAvailable) {
        alert(`Only ${stockAvailable} items available in stock!`)
        return prev
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
    <CartContext.Provider value={{ 
      cart, 
      totalPrice, 
      addToCart, 
      removeFromCart, 
      clearCart, 
      updateQuantity 
    }}>
      {children}
    </CartContext.Provider>
  )
}