'use client'
import {
  Accordion,
  AccordionContent,
  AccordionTrigger,
} from '@radix-ui/react-accordion'
import React from 'react'
import { AccordionItem } from './ui/accordion'
import { Checkbox } from './ui/checkbox'

//     {/* Filterby */}
//     {/* type */}
//     {/* strength */}
//     {/* flavor */}
//     {/* origin */}
//     {/* roast */}

//     {/* Sortby */}
//     {/* price */}

const fiilterBy = [
  { option: 'type', values: ['espresso', 'filter', 'decaf'] },
  { option: 'strength', values: ['light', 'medium', 'dark'] },
  { option: 'flavor', values: ['fruity', 'nutty', 'chocolate'] },
  { option: 'origin', values: ['africa', 'south america', 'asia'] },
]

export default function Filter() {
  return (
    <div className="bg-zinc-100 md:w-1/5 flex flex-wrap gap-8 flex-1 p-8 md:flex-col ">
      <h2 className="flex-[100%]  md:flex-none   font-semibold">Filter By</h2>
      {fiilterBy.map((filter) => (
        <div key={filter.option} className="md:py-4 flex  flex-col gap-2">
          <p className="font-bold">{filter.option}</p>
          {filter.values.map((value: string) => (
            <div key={value} className="flex items-center space-x-2">
              <Checkbox id={value} />
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
