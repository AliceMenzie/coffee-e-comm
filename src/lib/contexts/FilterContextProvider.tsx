'use client'
import { createContext, useState } from 'react'
import { CheckedState } from '@radix-ui/react-checkbox'
import { FilterOptions } from '../types'
import { filterOptions } from '../constants'


type FilterContextType = {
  filter: FilterOptions
  handleFilter: (
    event: CheckedState,
    value: string,
    filterOption: string
  ) => void
}

type FilterContextProviderProps = {
  children: React.ReactNode
}

export const FilterContext = createContext<FilterContextType | null>(null)

export const FilterContextProvider = ({
  children,
}: FilterContextProviderProps) => {
  const [filter, setFilter] = useState(filterOptions)

  const handleFilter = (
    event: CheckedState,
    value: string,
    filterOption: string
  ) => {
    setFilter((prevFilters: any) => ({
      ...prevFilters,
      [filterOption]: {
        ...prevFilters[filterOption],
        [value]: event,
      },
    }))
  }

  return (
    <FilterContext.Provider value={{ filter, handleFilter }}>
      {children}
    </FilterContext.Provider>
  )
}
