import { cn } from '@/lib/utils'
import React from 'react'

type ProductItemProps = {
  children: React.ReactNode
  className?: string
}

export default function ProductItem({ children, className }: ProductItemProps) {
  return <li className={cn(className)}>{children}</li>
}
