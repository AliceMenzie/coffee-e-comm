'use client'
import type { Metadata } from 'next'
import { Inter as FontSans } from 'next/font/google'
import './globals.css'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { cn } from '@/lib/utils'
import { CartContextProvider } from '@/lib/contexts/CartContextProvider'

const inter = FontSans({ subsets: ['latin'] })
// const fontSans = FontSans({
//   subsets: ["latin"],
//   variable: "--font-sans",
// })

// export const metadata: Metadata = {
//   title: 'COFFEE',
//   description: 'great coffee, melbourne australia',
// }

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          inter.className,
          'flex flex-col max-w-screen-2xl min-h-screen mx-auto'
        )}
      >
        <CartContextProvider>
          <Header />
          {children}
        </CartContextProvider>
        <Footer />
      </body>
    </html>
  )
}
