'use client'

import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'

const routes = [
  {
    label: 'Coffee',
    path: '/shop/coffee',
  },
  {
    label: 'Merch',
    path: '/shop/merch',
  },
  {
    label: 'Events',
    path: '/events',
  },
]

export default function Navbar() {
  const activePathname = usePathname()
  return (
    <nav className="p-6 bg-zinc-300">
      <ul className="flex place-content-center gap-4 font-semibold">
        {routes.map((route) => (
          <li key={route.path}>
            <Link
              href={route.path}
              className={cn(
                'rounded-sm px-2 py-1 hover:text-zinc-50 transition',
                {
                  'bg-zinc-400 text-white': route.path === activePathname,
                }
              )}
            >
              {route.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
