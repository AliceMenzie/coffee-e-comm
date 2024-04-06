import { ShoppingCart } from 'lucide-react'
import React from 'react'

export default function EmptyCart() {
  return (
    <>
      <ShoppingCart className="" size="120px" />
      <p className="text-center pl-4 pt-2">Cart is empty </p>
    </>
  )
}
