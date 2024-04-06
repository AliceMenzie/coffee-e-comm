'use client'
import useCartContext from '@/lib/hooks/useCartContext'
import { CoffeeProductsInclude } from '@/lib/types'
import React, { useEffect } from 'react'
import CartForm from '../cart/cart-form'
import H1 from '../ui/H1'
import { Button } from '../ui/button'

type Props = {
  product: CoffeeProductsInclude
}

export default function ProductItemCart({ product }: Props) {
  const { pendingProduct, handlePendingProduct } = useCartContext()

  useEffect(() => {
    handlePendingProduct(product)
  }, [handlePendingProduct, pendingProduct, product])

  return (
    <section className="flex flex-col flex-1">
      <div>
        <H1>{product.name}</H1>
        <p>{product.notes}</p>
        <div className="text-sm py-4 text-zinc-600 font-semibold">
          <p>{product?.coffeeProfile?.flavour}</p>
          <p>{product?.coffeeProfile?.strength}</p>
          <p>{product?.coffeeProfile?.type}</p>
          <p>{product?.coffeeProfile?.origin}</p>
        </div>
      </div>
      <CartForm />
      <Button className="mt-2" variant={'secondary'}>
        Checkout
      </Button>
    </section>
  )
}
