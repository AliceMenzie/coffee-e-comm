import { exampleCoffeedata as products } from '../src/lib/data'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log(`Start seeding ...`)
  // await prisma.coffeeProduct.deleteMany({});


  for (const product of products) {
    const result = await prisma.coffeeProduct.upsert({
      where: { id: product.id.toString() },
      update: {},
      create: {
        name: product.name,
        notes: product.notes,
        image: product.image,
        price: {
          create: {
            regular: 2,
            large: 5,
          },
        },
        reviews: {
          create: [
            { rating: 5, comment: 'This is the best coffee I have ever had!' },
            { rating: 4, comment: 'nice' },
          ],
        },
      },
    })
    console.log(`Created event with id: ${result.id}`)
  }

  // const result = await prisma.coffeeProduct.upsert({
  //   where: { id: '1' },
  //   update: {},
  //   create: {
  //     name: 'name of product',
  //     notes: 'spicy yet sweet, with a hint of chocolate',
  //     image: '###',
  //     price: {
  //       create: {
  //         regular: 2,
  //         large: 5,
  //       },
  //     },
  //     reviews: {
  //       create: [
  //         { rating: 5, comment: 'This is the best coffee I have ever had!' },
  //         { rating: 4, comment: 'nice' },
  //       ],
  //     },
  //   },
  // })

  console.log(`Seeding finished.`)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
