import { exampleCoffeedata as products } from '../src/lib/constants'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log(`Start seeding ...`)
  // await prisma.coffeeProduct.deleteMany({});

  for (const product of products) {
    const result = await prisma.coffeeProducts.upsert({
      where: { id: product.id.toString() },
      update: {},
      create: {
        name: product.name,
        notes: product.notes,
        image: product.image,
        price: {
          create: {
            regular: Math.floor(Math.random() * 8) + 2,
            large: Math.floor(Math.random() * 15) + 15,
          },
        },
        coffeeProfile: {
          create: {
            type: product.coffeeProfile.create.type,
            strength: product.coffeeProfile.create.strength,
            origin: product.coffeeProfile.create.origin,
            flavour: product.coffeeProfile.create.flavour,
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
