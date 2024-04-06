'use client'
import React from 'react'
import Image from 'next/image'
import { Card, CardContent, CardDescription, CardTitle } from '../ui/card'
import { CartProduct } from '@/lib/contexts/CartContextProvider'
import { Button } from '../ui/button'
import { Minus, Plus } from 'lucide-react'
import useCartContext from '@/lib/hooks/useCartContext'

type CartProductItemProps = {
  product: CartProduct
}

export default function CartProductItem({ product }: CartProductItemProps) {
  const { handleRemoveFromCart, handleAddToCart } = useCartContext()

  return (
    <Card className="flex overflow-hidden min-w-[17rem] max-w-[24rem] p-0">
      <Image
        className="flex-1 object-cover"
        width={100}
        height={100}
        src={product.image}
        alt={product.name}
      />
      <CardContent className="flex flex-col flex-1 justify-center content-center p-4">
        <CardTitle>{product.name}</CardTitle>
        <CardDescription className="font-semibold">
          {product.size}
        </CardDescription>
        <CardDescription className="font-semibold flex items-center gap-2">
          <Button
            size={'iconXS'}
            variant={'outline'}
            onClick={() => handleRemoveFromCart(product)}
          >
            <Minus size={'14px'} />
          </Button>
          {product.quantity}
          <Button
            size={'iconXS'}
            variant={'outline'}
            onClick={() => handleAddToCart(product)}
          >
            <Plus size={'14px'} />
          </Button>
        </CardDescription>

        <CardDescription>$ {product.price}</CardDescription>
        <CardDescription>{product.bean}</CardDescription>
      </CardContent>
    </Card>
  )
}
