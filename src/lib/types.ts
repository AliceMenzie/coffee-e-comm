import { Prisma } from '.prisma/client'
// import prisma from "./prisma";

export type CoffeeProductsInclude = Prisma.CoffeeProductsGetPayload<{
  include: { price: true; coffeeProfile: true; reviews: true }
}>

export type FilterOptions = {
  [key: string]: { [key: string]: boolean }
}
