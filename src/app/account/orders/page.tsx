import React from 'react'
import { getOrderHistory } from '@/lib/actions/server-utils'
import { auth } from '@/lib/auth'

export default async function Page() {
  const session = await auth()
  const orderHistory = await getOrderHistory(session?.user?.id)
  console.log(orderHistory)
  return (
    <div className="p-4 flex flex-col flex-1">
      <h2 className="text-xl pb-12">My Orders</h2>
      <ul className="flex flex-col gap-4">
        {orderHistory?.map((order) => (
          <li
            key={order.id}
            className="border p-4 rounded-md flex justify-between"
          >
            <div>
              <p>{JSON.stringify(order.updatedAt)} </p>
              <p>order id - {order.id}</p>
              <p>order status</p>
              <p>items</p>
              {order.OrderItems.map((item) => (
                <div key={item.id} className="flex justify-between gap-4 pb-4">
                  {/* {reviews.some(
                    (obj: any) =>
                      obj.hasOwnProperty('coffeeProductId') &&
                      obj.coffeeProductId === item.coffeeProduct.id
                  ) ? (
                    <Button size={'sm'} variant={'link'}>
                      View Review
                    </Button>
                  ) : (
                    <Button size={'sm'} variant={'outline'}>
                      Add New Review
                    </Button>
                  )} */}

                  <div className="flex">
                    <p>
                      {item.quantity} x {item.coffeeProduct.name}
                    </p>
                    <p>$Price - size</p>
                  </div>
                </div>
              ))}
              <p>total</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
