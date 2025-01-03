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
            token.userName = user.userName
            token.email = user.email as string
            token.isAdmin = user.isAdmin
            token.isEmailConfirmed = user.isEmailConfirmed
         }
         return token
      },
      async session({ session, token }) {
         session.user.id = token.id as string
         session.user.userName = token.userName as string
         session.user.email = token.email as string
         session.user.isAdmin = token.isAdmin as boolean
         session.user.isEmailConfirmed = token.isEmailConfirmed as boolean
         return session
      },
   },
} satisfies NextAuthConfig
