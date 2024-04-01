import React from 'react'
import Image from 'next/image'
import { Card, CardContent, CardDescription, CardTitle } from '../ui/card'
import { CartProduct } from '@/lib/contexts/CartContextProvider'

type CartProductItemProps = {
  product: CartProduct
}

export default function CartProductItem({ product }: CartProductItemProps) {
  return (
    <Card className="flex overflow-hidden min-w-[17rem] max-w-[24rem] p-0">
      <Image
        className="flex-1 object-cover"
        width={100}
        height={100}
        src={product.image as string}
        alt={product.name as string}
      />
      <CardContent className="flex flex-col flex-1 justify-center content-center p-4">
        <CardTitle>{product.name}</CardTitle>
        <CardDescription>quantity: {product.quantity}</CardDescription>
        <CardDescription>size: {product.size}</CardDescription>
        <CardDescription>$ {product.price}</CardDescription>
        <CardDescription>{product.bean}</CardDescription>
      </CardContent>
    </Card>
  )
}
