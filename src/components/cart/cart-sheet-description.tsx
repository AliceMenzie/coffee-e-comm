import React from 'react'
import CartProductItem from './cart-product-item'
import { SheetTitle, SheetDescription } from '../ui/sheet'
import useCartContext from '@/lib/hooks/useCartContext'
import EmptyCart from './empty-cart'

export default function CartSheetDescription() {
  const { pendingProduct, cart } = useCartContext()

  return (
    <SheetDescription
      className="flex flex-col justify-center items-start gap-8 py-8"
      asChild
    >
      <div>
        {cart.products.length > 0 ? <SheetTitle>Cart</SheetTitle> : null}

        <ul>
          {cart.products.length > 0 ? (
            <li className="flex flex-col gap-4">
              {cart.products.map((product) => (
                <CartProductItem
                  key={product.id + product.size}
                  product={product}
                />
              ))}
              <p>
                <span className="font-semibold">Total:</span> ${cart.total}
              </p>
            </li>
          ) : (
            <EmptyCart />
          )}
        </ul>
      </div>
    </SheetDescription>
  )
}
