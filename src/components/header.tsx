import Link from 'next/link'
import Image from 'next/image'
import { User } from 'lucide-react'
import CartHeaderTrigger from './cart/cart-header-trigger'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
// bg-[#bdc29d]
// bg-[#d3d7b5]
// [#8e936d]

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

export default function Header() {
  const activePathname = usePathname()

  return (
    <header className="flex flex-col bg-zinc-300">
      <div className="flex  justify-between p-4">
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="logo"
            width={100}
            height={100}
            className="h-24 w-24"
          />
        </Link>

        <ul className="flex place-content-center place-items-center p-2 gap-4">
          <li>
            <Link href="/login">
              <User />
            </Link>
          </li>
          <li>
            <CartHeaderTrigger />
          </li>
        </ul>
      </div>

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
    </header>
  )
}
