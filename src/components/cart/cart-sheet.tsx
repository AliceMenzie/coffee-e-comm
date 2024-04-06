'use client'

import React from 'react'
import {
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from '../ui/sheet'
import useCartContext from '@/lib/hooks/useCartContext'
import CartForm from './cart-form'
import PendingProductDetails from './pending-product-details'
import CartSheetDescription from './cart-sheet-description'
import CartSheetFooter from './cart-sheet-footer'
import { usePathname } from 'next/navigation'

export default function CartSheet() {
  const { pendingProduct } = useCartContext()

  const activePathname = usePathname()

  return (
    <SheetContent className="dev--blue overflow-scroll">
      {!activePathname.includes('/shop/coffee/product/') && pendingProduct && (
        <>
          <SheetHeader>
            <SheetTitle>{pendingProduct?.name}</SheetTitle>
            <SheetDescription asChild>
              <div>
                <PendingProductDetails />
                <CartForm />
              </div>
            </SheetDescription>
          </SheetHeader>
        </>
      )}
      <CartSheetDescription />
      <CartSheetFooter />
    </SheetContent>
  )
}
