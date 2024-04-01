import { createContext, useState } from 'react'
import { CoffeeProduct } from '@/lib/types'

const initialCart = {
  products: [],
  total: 0,
}

// const ex = {
//     products: [{ id: 1, quantity: 1, size: 'regular', bean: 'wholebean' }],
//     total: 0,
//   }

export type CartProduct = {
  id: string | undefined
  quantity: number | undefined
  price: number | undefined
  size: string | undefined
  bean: string | undefined
  name: string | undefined
  image: string | undefined
}

type TCart = {
  products: CartProduct[]
  total: number
}

type CartContextType = {
  cart: TCart
  pendingProduct: CoffeeProduct | null
  handleAddToCart: (product: CartProduct) => void
  handlePendingProduct: (product: CoffeeProduct) => void
}

type CartContextProviderProps = {
  children: React.ReactNode
}

export const CartContext = createContext<CartContextType | null>(null)

export const CartContextProvider = ({ children }: CartContextProviderProps) => {
  const [pendingProduct, setPendingProduct] = useState<CoffeeProduct | null>(
    null
  )
  const [cart, setCart] = useState<TCart>(initialCart)
  const handlePendingProduct = (product: CoffeeProduct) => {
    setPendingProduct(product)
  }

  const handleAddToCart = (product: CartProduct) => {
    setCart({ ...cart, products: [...cart.products, product] })
    setPendingProduct(null)
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        pendingProduct,
        handleAddToCart,
        handlePendingProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
