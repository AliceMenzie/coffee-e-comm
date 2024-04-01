import React from 'react'
import ProductList from './product-list'
import ProductItem from './product-item'
import CoffeeProductItem from './coffee-product-item'
import { Sheet } from './ui/sheet'
import CartSheet from './cart/cart-sheet'

type CoffeeWrapperProps = {
  coffeeProducts: any[]
}

export default function CoffeeWrapper({ coffeeProducts }: CoffeeWrapperProps) {
  return (
    <>
      <Sheet>
        <ProductList>
          {coffeeProducts.map((product: any) => (
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
