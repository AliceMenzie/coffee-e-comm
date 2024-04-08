import Link from 'next/link'
import Image from 'next/image'
import CartHeaderTrigger from './cart/cart-header-trigger'
import Navbar from './header-nav'
import { auth } from '@/lib/auth'
import HeaderUserInfo, { HeaderLoginSignup } from './header-user-info'

// bg-[#bdc29d]
// bg-[#d3d7b5]
// [#8e936d]

export default async function Header() {
  const session = await auth()

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
          <li>{session?.user ? <HeaderUserInfo /> : <HeaderLoginSignup />}</li>
          <li>
            <CartHeaderTrigger />
          </li>
        </ul>
      </div>

      <Navbar />
    </header>
  )
}
