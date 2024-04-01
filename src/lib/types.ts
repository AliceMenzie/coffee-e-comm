export type CoffeeProduct = {
  id: string
  name: string
  image: string
  notes: string
  price: { regular: number; large: number }
  rating?: number
  reviews?: number
}
