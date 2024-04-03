'use client'

import { FilterContextProvider } from '@/lib/contexts/FilterContextProvider'

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <FilterContextProvider>{children}</FilterContextProvider>
    </>
  )
}
