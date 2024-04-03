import { createContext, useEffect, useState } from 'react'
import { CoffeeProductsInclude } from '@/lib/types'

const initialCart = {
  products: [],
  total: 0,
}

export type CartProduct = {
  id: string
  quantity: number
  price: number
  size: string
  bean: string
  name: string
  image: string
  notes: string
}

type TCart = {
  products: CartProduct[]
  total: number
}

type CartContextType = {
  cart: TCart
  pendingProduct: CoffeeProductsInclude | null
  handleAddToCart: (product: CartProduct) => void
  handlePendingProduct: (product: CoffeeProductsInclude) => void
  handleRemoveFromCart: (product: CartProduct) => void
}

type CartContextProviderProps = {
  children: React.ReactNode
}

export const CartContext = createContext<CartContextType | null>(null)

export const CartContextProvider = ({ children }: CartContextProviderProps) => {
  const [pendingProduct, setPendingProduct] =
    useState<CoffeeProductsInclude | null>(null)
  const [cart, setCart] = useState<TCart>(
    () => JSON.parse(sessionStorage.getItem('weHaveCoffeeCart')!) || initialCart
  )

  useEffect(() => {
    sessionStorage.setItem('weHaveCoffeeCart', JSON.stringify(cart))
  }, [cart])

  const handlePendingProduct = (product: CoffeeProductsInclude) => {
    setPendingProduct(product)
  }

  const handleAddToCart = (product: CartProduct) => {
    const existingProduct = cart.products.find(
      (item) => item.id === product.id && item.size === product.size
    )
    if (existingProduct) {
      const updatedProducts = cart.products.map((item) => {
        if (item.id === product.id && item.size === product.size) {
          return { ...item, quantity: item?.quantity + 1 }
        }
        return item
      })

      setCart({
        ...cart,
        products: updatedProducts,
        total: cart.total + product.price!,
      })
      setPendingProduct(null)
      return
    }
    setCart({
      ...cart,
      products: [...cart.products, product],
      total: cart.total + product.price!,
    })
    setPendingProduct(null)
  }

  const handleRemoveFromCart = (product: CartProduct) => {
    const productToRemove = cart.products.find(
      (item) => item.id === product.id && item.size === product.size
    )
    if (!productToRemove) return

    if (productToRemove.quantity > 1) {
      const updatedProducts = cart.products.map((item) => {
        if (item.id === product.id && item.size === product.size) {
          return { ...item, quantity: item.quantity - 1 }
        }
        return item
      })

      setCart({
        ...cart,
        products: updatedProducts,
        total: cart.total - productToRemove.price!,
      })
      return
    }

    const updatedProducts = cart.products.filter(
      (item) =>
        (item.id !== productToRemove.id &&
          item.size === productToRemove.size) ||
        item.size !== productToRemove.size
    )

    setCart({
      ...cart,
      products: updatedProducts,
      total: cart.total - productToRemove.price!,
    })
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        pendingProduct,
        handleAddToCart,
        handlePendingProduct,
        handleRemoveFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
