import React from 'react'
import Filter from '@/components/filter'
import H1 from '@/components/ui/H1'
import { getCoffeeProducts } from '@/lib/server-utils'
import CoffeeWrapper from '@/components/coffee-wrapper'

export default async function Page() {
  const coffeeProducts = await getCoffeeProducts()
  return (
    <div className="flex flex-1 h-full flex-col">
      <H1 className="self-center"> Coffee </H1>
      <div className="flex flex-col md:flex-row flex-1 h-full">
        <Filter />
        <CoffeeWrapper coffeeProducts={coffeeProducts} />
      </div>
    </div>
  )
}
