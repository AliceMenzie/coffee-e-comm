'use server'

// import { unstable_cache } from 'next/cache'
// import { notFound } from 'next/navigation'
import prisma from './constants'

export const getCoffeeProducts = async () => {
  const coffeeProducts = await prisma.coffeeProducts.findMany({
    include: {
      price: true,
      coffeeProfile: true,
    },
  })

  return coffeeProducts
}
export const getCoffeeProductById = async (id: string) => {
  const coffeeProduct = await prisma.coffeeProducts.findUnique({
    where: {
      id: id,
    },
    include: {
      price: true,
      reviews: true,
    },
  })

  return coffeeProduct
}
