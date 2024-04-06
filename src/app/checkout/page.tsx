'use client'

import CartProductItem from '@/components/cart/cart-product-item'
import H1 from '@/components/ui/H1'
import useCartContext from '@/lib/hooks/useCartContext'
import React from 'react'

export default function Page() {
  const { cart } = useCartContext()
  return (
    <main className="dev--red flex flex-col p-4 gap-8">
      <H1>Checkout</H1>
      <div className="dev--red flex flex-col gap-4">
        {cart.products.map((product) => {
          return <CartProductItem key={product.id} product={product} />
        })}
      </div>
    </main>
  )
}
