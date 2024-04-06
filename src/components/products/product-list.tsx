import React from 'react'

type ProductListProps = {
  children: React.ReactNode
}

export default function ProductList({ children }: ProductListProps) {
  return (
    <ul className="w-full grid grid-cols-[repeat(auto-fill,15rem)] gap-4 justify-center py-8">
      {children}
    </ul>
  )
}
