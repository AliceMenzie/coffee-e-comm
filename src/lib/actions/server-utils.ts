'use server'

// import { unstable_cache } from 'next/cache'
// import { notFound } from 'next/navigation'
import prisma from '@/lib/prisma'
import { auth } from '../auth'
import { redirect } from 'next/navigation'

export async function checkAuth() {
  const session = await auth()
  if (session?.user) {
    redirect('/') // Redirect to home page if user is already logged in
  }

  if (!session?.user) {
    redirect('/login')
  }

  return session
}

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
