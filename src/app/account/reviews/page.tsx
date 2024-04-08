import { Button } from '@/components/ui/button'
import { getUserReviews } from '@/lib/actions/server-utils'
import { auth } from '@/lib/auth'
import React from 'react'

export default async function Page() {
  const session = await auth()
  const reviews = await getUserReviews(session?.user.id)

  return (
    <div className="p-4 flex flex-col flex-1">
      <h2 className="text-xl pb-12">My Reviews</h2>
      <ul className="flex flex-col gap-4">
        {reviews?.map((review) => (
          <li
            key={review.id}
            className="border p-4 rounded-md flex justify-between"
          >
            <div>
              <p>
                <span className="font-bold text-zinc-600">Rating </span>{' '}
                {review.rating}
              </p>
              <p>
                <span className="font-bold text-zinc-600">Comment </span>{' '}
                {review.comment}
              </p>
              <p>
                <span className="font-bold text-zinc-600">Coffee Name</span>
                {review.coffeeProduct.name}
              </p>
              <p>
                <span className="font-bold text-zinc-600">Order Id </span>
              </p>
              <p>
                <span className="font-bold text-zinc-600">Price </span> $
                {/* {review.coffeeProduct.price} */}
                {/* quantity price */}
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p>{JSON.stringify(review.updatedAt)}</p>
              <Button>Edit</Button>
              <Button variant={'secondary'}>Delete</Button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
