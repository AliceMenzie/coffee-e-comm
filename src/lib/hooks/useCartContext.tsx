import React from 'react'
import { CartContext } from '../contexts/CartContextProvider'

export default function useCartContext() {
  const context = React.useContext(CartContext)
  if (!context) {
    throw new Error('useCartContext must be used within a CartContextProvider')
  }
  return context
}
