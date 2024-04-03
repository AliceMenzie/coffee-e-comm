import Link from 'next/link'
import Image from 'next/image'
import { User } from 'lucide-react'
import Cart from './cart/cart'
// bg-[#bdc29d]
// bg-[#d3d7b5]
// [#8e936d]

export default function Header() {
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
            <Cart />
          </li>
        </ul>
      </div>

      <nav className="p-6 bg-zinc-300">
        <ul className="flex place-content-center gap-4">
          <li>
            <Link href="/shop/coffee">Coffee</Link>
          </li>
          <li>
            <Link href="/shop/merch">Merch</Link>
          </li>
          <li>
            <Link href="#">Events</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
