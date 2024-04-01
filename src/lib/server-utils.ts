// import 'server-only'
'use server'

import { unstable_cache } from 'next/cache'
import { notFound } from 'next/navigation'
import prisma from './data'

export const getCoffeeProducts = async () => {
  const coffeeProducts = await prisma.coffeeProduct.findMany({
    include: {
      price: true,
      //   reviews: true,
    },
  })
  //   event.findMany({
  //     where: {
  //       city: city === 'all' ? undefined : capitalize(city),
  //     },
  //     orderBy: {
  //       date: 'asc',
  //     },
  //     take: 6,
  //     skip: (page - 1) * 6,
  //   })

  //   return {
  //     events,
  //     totalCount,
  //   };

  return coffeeProducts
}
export const getCoffeeProductById = async (id: string) => {
  const coffeeProduct = await prisma.coffeeProduct.findUnique({
    where: {
      id: id,
    },
    include: {
      price: true,
      reviews: true,
    },
  })
  //   console.log('byId', coffeeProduct)

  return coffeeProduct
}

// export const fetchProduct = async (id: string) => {

//   return await getCoffeeProductById(id)
// }
