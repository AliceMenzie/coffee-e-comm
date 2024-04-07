import React, { Suspense } from 'react'
import Filter from '@/components/filter'
import H1 from '@/components/ui/H1'
import { getCoffeeProducts } from '@/lib/actions/server-utils'
import CoffeeWrapper from '@/components/products/coffee-wrapper'

export default async function Page() {
  const coffeeProducts = await getCoffeeProducts()
  return (
    <main className="flex flex-1 h-full flex-col">
      <div className="flex flex-col gap-2 p-10 text-center">
        <H1> Coffee </H1>
        <p className="italic">
          Discover the Perfect Brew: Our Coffee Collection
        </p>
      </div>
      <div className="flex flex-col md:flex-row flex-1 h-full">
        <Filter />
        <Suspense key={1} fallback={<div> Loading</div>}>
          <CoffeeWrapper coffeeProducts={coffeeProducts} />
        </Suspense>
      </div>
    </main>
  )
}
