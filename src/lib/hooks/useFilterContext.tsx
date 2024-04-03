import React from 'react'
import { FilterContext } from '../contexts/FilterContextProvider'

export default function useFilterContext() {
  const context = React.useContext(FilterContext)
  if (!context) {
    throw new Error('useCartContext must be used within a CartContextProvider')
  }
  return context
}