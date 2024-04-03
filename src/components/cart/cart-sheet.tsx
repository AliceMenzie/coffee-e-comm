'use client'

import React from 'react'
import Link from 'next/link'
import { ShoppingCart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetClose,
  SheetFooter,
} from '../ui/sheet'
import useCartContext from '@/lib/hooks/useCartContext'
import CartProductItem from './cart-product-item'
import CartForm from './cart-form'
import Image from 'next/image'

export default function CartSheet() {
  const { pendingProduct, cart } = useCartContext()

  return (
    <SheetContent className="dev--blue overflow-scroll">
      {pendingProduct && (
        <>
          <SheetHeader>
            <SheetTitle>{pendingProduct?.name}</SheetTitle>
            <SheetDescription asChild>
              <>
                <div className="flex gap-4">
                  <Image
                    width={100}
                    height={100}
                    src={pendingProduct.image}
                    alt={pendingProduct.name}
                  />
                  <p>{pendingProduct.notes}</p>
                </div>
                <CartForm />
              </>
            </SheetDescription>
          </SheetHeader>
        </>
      )}
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
              <>
                <ShoppingCart className="" size="120px" />
                <p className="text-center pl-4 pt-2">Cart is empty </p>
              </>
            )}
          </ul>
        </div>
      </SheetDescription>
      <SheetFooter className="flex flex-col  sm:flex-col gap-4">
        <Button>
          <Link href="/checkout">Go to checkout</Link>
        </Button>
        <SheetClose asChild>
          <Button variant={'outline'} type="submit">
            Keep Shopping
          </Button>
        </SheetClose>
      </SheetFooter>
    </SheetContent>
  )
}
