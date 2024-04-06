import React from 'react'

import Image from 'next/image'
import useCartContext from '@/lib/hooks/useCartContext'

export default function PendingProductDetails() {
  const { pendingProduct } = useCartContext()

  {
    return pendingProduct ? (
      <div className="flex gap-4">
        <Image
          width={100}
          height={100}
          src={pendingProduct?.image}
          alt={pendingProduct?.name}
        />
        <p>{pendingProduct?.notes}</p>
      </div>
    ) : (
      <div className="flex gap-4">
        <p>Error fetching product details</p>
      </div>
    )
  }
}
