import { cn } from '@/lib/utils'
import React from 'react'

type H1Props = {
  children: React.ReactNode
  className?: string
}

export default function H1({ children, className }: H1Props) {
  return <h1 className={cn('text-4xl font-semibold', className)}>{children}</h1>
}
