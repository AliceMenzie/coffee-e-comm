import { Button } from '@/components/ui/button'
import H1 from '@/components/ui/H1'
import { auth } from '@/lib/auth'
import Link from 'next/link'
import React from 'react'

const accountOptions = [
  {
    label: 'My Orders',
    path: '/account/orders',
  },
  {
    label: 'My Reviews',
    path: '/account/reviews',
  },
  {
    label: 'Settings',
    path: '/account/settings',
  },
]

export default async function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await auth()
  return (
    <main className="flex flex-1 min-h-[70vh]">
      <div className="flex flex-col p-4 border-r-2">
        <section className="pb-8">
          <H1 className="text-xl">Account</H1>
          <p>{session?.user?.email}</p>
        </section>
        <ul className="flex flex-1 flex-col gap-4 justify-between">
          <div className="flex flex-col gap-2">
            {accountOptions.map((option) => (
              <li key={option.label}>
                <Button variant={'secondary'}>
                  <Link href={option.path}>{option.label}</Link>
                </Button>
              </li>
            ))}
          </div>
          <div className="flex flex-col gap-2">
            <li>
              <Button variant={'outline'}>
                <Link href={'###'}>Sign out</Link>
              </Button>
            </li>
          </div>
        </ul>
      </div>
      <div className="flex flex-1">{children}</div>
    </main>
  )
}
