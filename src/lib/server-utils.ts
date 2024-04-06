'use server'

// import { unstable_cache } from 'next/cache'
// import { notFound } from 'next/navigation'
import prisma from '@/lib/prisma'

export const getCoffeeProducts = async () => {
  const coffeeProducts = await prisma.coffeeProducts.findMany({
    include: {
      price: true,
      reviews: true,
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
      coffeeProfile: true,
    },
  })

  return coffeeProduct
}
