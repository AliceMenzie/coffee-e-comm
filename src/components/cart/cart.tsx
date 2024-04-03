'use client'
import React from 'react'
import CartSheet from '@/components/cart/cart-sheet'
import { Sheet, SheetTrigger } from '@/components/ui/sheet'
import { Button } from '../ui/button'
import { ShoppingCart } from 'lucide-react'
import useCartContext from '@/lib/hooks/useCartContext'

export default function Cart() {
  const { cart } = useCartContext()
  const productCount = cart.products.reduce(
    (acc, product) => acc + product.quantity,
    0
  )
  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className="relative">
          <Button size={'icon'} variant={'link'}>
            <ShoppingCart />
          </Button>
          {productCount > 0 && (
            <div className="absolute bottom-0 right-0 h-4 w-4 rounded-full bg-zinc-800 text-xs text-white flex place-content-center items-center">
              {productCount}
            </div>
          )}
        </div>
      </SheetTrigger>
      <CartSheet />
    </Sheet>
  )
}
