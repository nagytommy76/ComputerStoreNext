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
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      jwt({ token, user, account, profile }) {
         // console.log(account)
         // console.log(profile)
         if (profile) {
            token.picture = profile.picture
            token.name = profile.name
         }

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
         console.log('token::: ', token)
         // console.log(user)
         session.user.userId = token.userId as string
         session.user.id = token.id as string
         session.user.userName = token.userName as string
         session.user.email = token.email as string
         session.user.isAdmin = token.isAdmin as boolean
         session.user.isEmailConfirmed = token.isEmailConfirmed as boolean
         session.user.picture = token.picture as string
         session.user.name = token.name as string
         // console.log(session)
         return session
      },
   },
} satisfies NextAuthConfig
