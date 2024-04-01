import React from 'react'
import CartSheet from '@/components/cart/cart-sheet'
import { Sheet, SheetTrigger } from '@/components/ui/sheet'
import { Button } from '../ui/button'
import { ShoppingCart } from 'lucide-react'

export default function Cart() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size={'icon'} variant={'link'}>
          <ShoppingCart />
        </Button>
      </SheetTrigger>
      <CartSheet />
    </Sheet>
  )
}
