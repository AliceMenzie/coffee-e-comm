import { Button } from '@/components/ui/button'
import { getCoffeeProductById } from '@/lib/server-utils'
import React from 'react'

type Props = {
  params: {
    variety: string
  }
}

export default async function page({ params }: Props) {
  const varietyId = params.variety
  // fetch data with id
  const product = await getCoffeeProductById(varietyId)
  console.log('product', product)

  if (product) {
    return (
      <div className="dev--red">
        <div>
          <section>
            {/* image */}
            <h1>{product.name}</h1>

            <img
              height={200}
              width={200}
              src={product.image}
              alt={product.name}
            />
            <p>{product.notes}</p>
          </section>
          <section>
            {/* selection */}
            <p>{product.price?.regular}</p>
            <p>{product.price?.large}</p>
            {/* quantity */}
            <Button>Add to Cart</Button>
          </section>
        </div>
        <section>
          <h3>Reviews</h3>
          {product.reviews.map((review: any) => (
            <div key={review.id}>
              <p>{review.rating}</p>
              <p>{review.comment}</p>
            </div>
          ))}
          {/* leave a review form */}
        </section>
      </div>
    )
  }
}
