import { DefaultSession } from 'next-auth'

declare module 'next-auth' {
   interface session {
      user: {
         email: string
         userId: string
         userName: string
         isAdmin?: boolean
         exp?: number
         iat?: number
      } & DefaultSession['user']
   }
}
