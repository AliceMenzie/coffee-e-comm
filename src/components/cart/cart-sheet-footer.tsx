import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import { SheetFooter, SheetClose } from '../ui/sheet'

export default function CartSheetFooter() {
  return (
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
  )
}
