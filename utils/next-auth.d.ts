import { JWT } from 'next-auth/jwt'

declare module 'next-auth' {
   /**
    * The shape of the user object returned in the OAuth providers' `profile` callback,
    * or the second parameter of the `session` callback, when using a database.
    */
   interface User {
      _id: string
      userName: string
      password: string
      isAdmin: boolean
      isEmailConfirmed: boolean
   }
}
declare module 'next-auth/jwt' {
   /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
   interface JWT {
      email: string
      userId: string
      userName: string
      isAdmin?: boolean
      exp?: number
      iat?: number
   }
}
