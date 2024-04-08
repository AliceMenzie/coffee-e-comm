'use server'

import prisma from '@/lib/prisma'
// import { unstable_cache } from 'next/cache'
// import { notFound } from 'next/navigation'

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

export const getUserReviews = async (userId: string) => {
  const reviews = await prisma.reviews.findMany({
    where: {
      userId,
    },
    include: {
      coffeeProduct: true,
    },
  })

  return reviews
}

export const getOrderHistory = async (userId: string) => {
  const orderHistory = await prisma.orderHistory.findMany({
    where: {
      userId,
    },
    include: {
      OrderItems: {
        include: {
          coffeeProduct: true,
        },
      },
    },
  })

  return orderHistory
}
