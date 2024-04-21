'use server'

import { AuthError } from 'next-auth'
import { signIn, signOut } from '../auth'

export async function login(formData: unknown) {
  if (!(formData instanceof FormData)) {
    return {
      message: 'Invalid form data.',
    }
  }

  try {
    await signIn('credentials', formData)
  } catch (error: any) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin': {
          return {
            message: 'Invalid credentials.',
          }
        }
        default: {
          return {
            message: 'Error. Could not sign in.',
          }
        }
      }
    }

    throw error // nextjs redirects throws error, so we need to rethrow it
  }
}

export async function logOut() {
  await signOut({ redirectTo: '/' })
}
