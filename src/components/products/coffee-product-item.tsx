'use client'
import React from 'react'
import Image from 'next/image'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '../ui/button'
import { ShoppingCart, Star } from 'lucide-react'
import { CoffeeProductsInclude } from '@/lib/types'
import { SheetTrigger } from '../ui/sheet'
import useCartContext from '@/lib/hooks/useCartContext'
import Link from 'next/link'

type CoffeeProductItemProps = {
  product: CoffeeProductsInclude
}

export default function CoffeeProductItem({ product }: CoffeeProductItemProps) {
  const { handlePendingProduct } = useCartContext()
  return (
    <Card className="relative overflow-hidden flex flex-col flex-1 h-full">
      <Image width={240} height={240} src={product.image} alt={product.name} />
      <SheetTrigger asChild>
        <Button
          type="button"
          className="absolute top-2 left-2 p-2 "
          size={'icon'}
          variant={'outline'}
          onClick={(e) => {
            e.stopPropagation()
            e.nativeEvent.preventDefault()

            handlePendingProduct(product)
            return false
          }}
        >
          <ShoppingCart />
        </Button>
      </SheetTrigger>

      <CardHeader className="py-4">
        <CardTitle>{product.name}</CardTitle>
      </CardHeader>
      <CardContent className="h-full pb-2">
        <CardDescription>
          <span className="text-xs">from </span>${product.price?.regular}
        </CardDescription>
        <CardDescription className="text-xs">
          {/* keep for filter */}
          {/* {product?.coffeeProfile?.type} {product?.coffeeProfile?.origin}{' '}
          {product?.coffeeProfile?.flavour} */}
          {product.notes}
        </CardDescription>
      </CardContent>
      <CardFooter>
        <p className="text-sm">
          <span className="font-semibold flex items-center gap-1">
            4.9 <Star size="14px" />
          </span>
          58 reviews
        </p>
      </CardFooter>
    </Card>
  )
}
