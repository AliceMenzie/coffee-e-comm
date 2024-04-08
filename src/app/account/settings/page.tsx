import { Button } from '@/components/ui/button'
import React from 'react'

export default function Page() {
  return (
    <>
      <div className="p-4 flex flex-col flex-1">
        <h2 className="text-xl pb-12">Settings</h2>
        <p>change password</p>

        <Button className="max-w-32" variant={'destructive'}>
          Delete Account
        </Button>
      </div>
    </>
  )
}
