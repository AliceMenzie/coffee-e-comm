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
import { Button } from './ui/button'
import { ShoppingCart } from 'lucide-react'
import { CoffeeProduct } from '@/lib/types'
import { SheetTrigger } from './ui/sheet'
import useCartContext from '@/lib/hooks/useCartContext'

type CoffeeProductItemProps = {
  product: CoffeeProduct
}

export default function CoffeeProductItem({ product }: CoffeeProductItemProps) {
  const { handlePendingProduct } = useCartContext()
  return (
    <Card className="relative overflow-hidden flex flex-col flex-1 h-full">
      <Image width={240} height={240} src={product.image} alt={product.name} />
      <SheetTrigger asChild>
        <Button
          className="absolute top-2 left-2 p-2"
          size={'icon'}
          variant={'outline'}
          onClick={() => handlePendingProduct(product)}
        >
          <ShoppingCart />
        </Button>
      </SheetTrigger>

      <CardHeader>
        <CardTitle>{product.name}</CardTitle>
      </CardHeader>
      <CardContent className="h-full">
        <CardDescription>{product.notes}</CardDescription>
      </CardContent>
      <CardFooter>
        <p className="text-sm"> Rating: 4.9 - 58 reviews</p>
      </CardFooter>
    </Card>
  )
}