import { Prisma } from '@prisma/client'

export type CoffeeProductsInclude = Prisma.CoffeeProductsGetPayload<{
  include: { price: true; coffeeProfile: true }
}>

export type FilterOptions = {
  [key: string]: { [key: string]: boolean }
}
