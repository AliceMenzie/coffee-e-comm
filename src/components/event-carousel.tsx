'use client'

import Autoplay from 'embla-carousel-autoplay'
import React from 'react'
import Image from 'next/image'
import { Card, CardContent } from './ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from './ui/carousel'

const eventsImages = [
  'https://images.unsplash.com/photo-1541167760496-1628856ab772',
  'https://images.unsplash.com/photo-1462917882517-e150004895fa',
  'https://images.unsplash.com/photo-1515560570411-00a0026e6086',
]

export default function EventCarousel() {
  return (
    <Carousel
      plugins={[Autoplay({ delay: 5000 })]}
      className="m-auto  max-w-[80vw]"
    >
      <CarouselContent>
        {eventsImages.map((image, index) => (
          <CarouselItem key={index}>
            <Card className="border-none">
              <CardContent className="flex aspect-video">
                <Image
                  className="rounded-2xl"
                  src={image}
                  alt="event"
                  height={500}
                  width={1280}
                  sizes="(max-width: 1280px) 100vw, 1280px"
                />
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className=" ml-4" />
      <CarouselNext className=" mr-4" />
    </Carousel>
  )
}
