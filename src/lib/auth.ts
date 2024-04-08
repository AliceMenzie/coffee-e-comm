import NextAuth, { NextAuthConfig } from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import prisma from './prisma'
import bcrypt from 'bcryptjs'
// import { withAuth } from 'next-auth/middleware'
import { NextResponse } from 'next/server'
import { AuthSchema, TAuthSchema } from './validations'

const config = {
  pages: {
    signIn: '/auth/login',
  },
  //   default
  session: {
    maxAge: 30 * 24 * 60 * 60,
    strategy: 'jwt',
  },
  providers: [
    Credentials({
      async authorize(credentials) {
        // validations
        const validatedCredentials = AuthSchema.safeParse(credentials)
        if (!validatedCredentials.success) {
          return null
        }

        const { email, password } = validatedCredentials.data

        const user = await prisma.users.findUnique({
          where: {
            email: email as string,
          },
        })
        if (!user) {
          return null
        }

        const isMatch = await bcrypt.compare(password, user.hashedPassword)
        // const isMatch = password === user.hashedPassword

        if (!isMatch) {
          return null
        }

        return user
      },
    }),
  ],
  callbacks: {
    authorized: async ({ request, auth }) => {
      const isLoggedIn = Boolean(auth?.user)
      const isAccessingAccount = request.nextUrl.pathname.includes('/account')

      if (!isLoggedIn && isAccessingAccount) {
        return NextResponse.redirect(
          new URL('/auth/login', request.nextUrl).toString()
        )
      }
      if (!isLoggedIn && !isAccessingAccount) {
        return true
      }

      if (isLoggedIn && isAccessingAccount) {
        return true
        // Response.redirect(new URL('/user/settings', request.nextUrl).toString())
      }

      if (isLoggedIn && !isAccessingAccount) {
        if (
          request.nextUrl.pathname === '/auth/login' ||
          request.nextUrl.pathname === '/auth/signup'
        ) {
          return NextResponse.redirect(new URL('/', request.nextUrl).toString())
        }
        return true
      }

      return false
    },
    jwt: async ({ token, user }) => {
      if (user) {
        // on sign in
        token.userId = user.id
      }

      return token
    },
    session: ({ session, token }) => {
      session.user.id = token.userId
      // session.user.hasAccess = token.hasAccess;

      return session
    },
  },
} satisfies NextAuthConfig

export const {
  auth,
  signIn,
  signOut,
  handlers: { GET, POST },
} = NextAuth(config)
