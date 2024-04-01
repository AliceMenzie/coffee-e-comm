'use client'

import CartProductItem from '@/components/cart/cart-product-item'
import H1 from '@/components/ui/H1'
import useCartContext from '@/lib/hooks/useCartContext'
import React from 'react'

export default function page() {
  const { cart } = useCartContext()
  return (
    <div className="flex flex-col p-4 gap-8">
      <H1>Checkout</H1>
      <div>
        {cart.products.map((product) => {
          return <CartProductItem key={product.id} product={product} />
        })}
      </div>
    </div>
  )
}