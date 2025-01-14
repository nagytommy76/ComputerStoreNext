import { NextAuthConfig } from 'next-auth'

export default {
   providers: [],
   session: {
      strategy: 'jwt',
   },
   pages: {
      signIn: '/login',
   },
   callbacks: {
      jwt({ token, user }) {
         if (user) {
            // User is available during sign-in
            token.id = user.id
            token.picture = user.picture as string
            token.name = user.name as string
            token.userId = user.userId as string
            token.userName = user.userName
            token.email = user.email as string
            token.isAdmin = user.isAdmin
            token.isEmailConfirmed = user.isEmailConfirmed
         }
         return token
      },
      async session({ session, token }) {
         session.user.userId = token.userId as string
         session.user.id = token.id as string
         session.user.userName = token.userName as string
         session.user.email = token.email as string
         session.user.isAdmin = token.isAdmin as boolean
         session.user.isEmailConfirmed = token.isEmailConfirmed as boolean
         session.user.picture = token.picture as string
         session.user.name = token.name as string

         return session
      },
   },
} satisfies NextAuthConfig
