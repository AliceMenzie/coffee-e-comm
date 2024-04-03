'use client'
import React from 'react'
import { Checkbox } from './ui/checkbox'
import useFilterContext from '@/lib/hooks/useFilterContext'
import { fiilterBy } from '@/lib/constants'

export default function Filter() {
  const { handleFilter } = useFilterContext()

  return (
    <div className="bg-zinc-100 md:w-1/5 flex flex-wrap gap-8 flex-1 p-8 md:flex-col ">
      <h2 className="flex-[100%]  md:flex-none font-semibold">Filter By</h2>
      {fiilterBy.map((filter) => (
        <div key={filter.option} className="md:py-4 flex  flex-col gap-2">
          <p className="font-bold">{filter.option}</p>
          {filter.values.map((value: string) => (
            <div key={value} className="flex items-center space-x-2">
              <Checkbox
                id={value}
                name={value}
                onCheckedChange={(event) =>
                  handleFilter(event, value, filter.option)
                }
              />
              <label
                htmlFor={value}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {value}
              </label>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}
