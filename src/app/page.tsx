import EventCarousel from '@/components/event-carousel'
import { Button } from '@/components/ui/button'
import H1 from '@/components/ui/H1'
import { imageCollection } from '@/lib/constants'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex-col flex-1">
      <H1 className="sr-only">we have coffee</H1>
      <section className="relative">
        <Image
          src={imageCollection[1]}
          className="object-cover z-0 max-h-[70vh]"
          alt="we have coffee"
          // fill
          height={500}
          width={1536}
          quality={50}
          sizes="(max-width: 1536px) 100vw, 1536px"
          priority
        />
        <div className="absolute bottom-4 z-10 w-full flex justify-center gap-[4%]">
          <Button size={'lg'} variant={'secondary'}>
            <Link href="/shop/coffee">shop coffee</Link>
          </Button>
          <Button size={'lg'} variant={'secondary'}>
            <Link href="/shop/merch">shop merch</Link>
          </Button>
        </div>
      </section>
      <section className="p-4">
        <EventCarousel />
      </section>
    </main>
  )
}
