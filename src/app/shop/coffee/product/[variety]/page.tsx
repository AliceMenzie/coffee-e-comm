import Image from 'next/image'
import React from 'react'
import ProductItemCart from '@/components/products/product-item-cart'
import { getCoffeeProductById } from '@/lib/actions/server-utils'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Star } from 'lucide-react'
import EventCarousel from '@/components/event-carousel'

type Props = {
  params: {
    variety: string
  }
}

export default async function Page({ params }: Props) {
  const varietyId = params.variety
  const product = await getCoffeeProductById(varietyId)

  if (product) {
    return (
      <main className="flex flex-col ">
        <div className="py-4 px-8 flex flex-row-reverse flex-wrap sm:flex-nowrap">
          <div className=" flex flex-1 flex-row p-4 gap-10">
            <ProductItemCart product={product} />
          </div>
          {/* maybe later overflow-y-auto */}
          <div className="flex m-auto flex-col">
            <div className="w-[300px] sm:w-[300px] md:w-[400px]">
              <AspectRatio ratio={1 / 1} className="bg-muted">
                <Image
                  className="rounded-lg"
                  src={product.image}
                  alt={product.name}
                  priority
                  fill
                />
              </AspectRatio>
            </div>
            <section className="p-4 flex flex-col max-w-[50vw]">
              <div>
                <h3 className="font-semibold text-4xl">Customer Reviews</h3>
                <div className="text-sm">
                  <p className="flex items-center">
                    4.5 <Star size="14px" fill="black" />
                  </p>
                  <p className="">Based on 2 reviews</p>
                </div>
              </div>

              {product.reviews.map((review: any) => (
                <div
                  className="flex flex-col py-4 border-b-2   last:border-none"
                  key={review.id}
                >
                  <div className="flex gap-4">
                    <Avatar className="my-auto">
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="flex items-center font-semibold">
                        {review.rating} <Star size="14px" fill="black" />{' '}
                        <span className=" text-zinc-600 text-xs  px-2">
                          2 months ago
                        </span>
                      </p>
                      <p className="font-bold">{review.name || 'fred'}</p>
                    </div>
                  </div>
                  <p>{review.comment}</p>
                </div>
              ))}
            </section>
          </div>
        </div>
        <div className="h-96 w-full bg-zinc-500 text-white p-4">
          <h2 className="font-bold">Something else here</h2>
          <p>events</p>
          <p>or </p>
          <p>popular items</p>
        </div>
      </main>
    )
  }
}
