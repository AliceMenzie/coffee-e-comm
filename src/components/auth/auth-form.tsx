'use client'
import React from 'react'
import { Button } from '../ui/button'
import { Label } from '../ui/label'
import Link from 'next/link'
import { Input } from '../ui/input'
import { login } from '@/lib/actions/auth'

import { useFormState } from 'react-dom'

export default function AuthForm() {
//   const [logInError, dispatchLogIn] = useFormState(login, undefined)

  return (
    <form action={login} className="grid gap-4">
      <div className="grid gap-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          name="email"
          placeholder="m@example.com"
          required
        />
      </div>
      <div className="grid gap-2">
        <div className="flex items-center">
          <Label htmlFor="password">Password</Label>
          <Link
            href="/forgot-password"
            className="ml-auto inline-block text-sm underline"
          >
            Forgot your password?
          </Link>
        </div>
        <Input id="password" name="password" type="password" required />
      </div>
      <Button type="submit" className="w-full">
        Login
      </Button>
      {/* <Button variant="outline" className="w-full">
      Login with Google
    </Button> */}
    </form>
  )
}
