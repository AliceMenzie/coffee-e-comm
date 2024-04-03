'use client'
import React from 'react'
import CoffeeProductItem from './coffee-product-item'
import { Sheet } from './ui/sheet'
import CartSheet from './cart/cart-sheet'
import useFilterContext from '@/lib/hooks/useFilterContext'
import ProductItem from './product-item'
import ProductList from './product-list'
import { anyTrue } from '@/lib/utils'
import { CoffeeProductsInclude } from '@/lib/types'

type CoffeeWrapperProps = {
  coffeeProducts: CoffeeProductsInclude[]
}

export default function CoffeeWrapper({ coffeeProducts }: CoffeeWrapperProps) {
  const { filter } = useFilterContext()

  const filteredProducts = coffeeProducts.filter((product) => {
    if (!anyTrue(filter)) {
      return coffeeProducts
    }

    const { type, strength, flavour, origin } = filter

    return (
      (product.coffeeProfile?.strength &&
        strength[product.coffeeProfile.strength]) ||
      (product.coffeeProfile?.origin && origin[product.coffeeProfile.origin]) ||
      (product.coffeeProfile?.type && type[product.coffeeProfile.type]) ||
      (product.coffeeProfile?.flavour &&
        flavour[product.coffeeProfile.flavour]) ||
      ''
    )
  })

  return (
    <>
      <Sheet>
        <ProductList>
          {filteredProducts.map((product: any) => (
            <ProductItem className="relative w-60 h-[26rem]" key={product.id}>
              <CoffeeProductItem product={product} />
            </ProductItem>
          ))}
        </ProductList>
        <div>
          <CartSheet />
        </div>
      </Sheet>
    </>
  )
}
