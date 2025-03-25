import { NextAuthConfig } from 'next-auth'
import dbConnect from '@DBConnect'
import GoogleUserModel from '@/models/User/GoogleUser'
import UserModel from '@/models/User/User'

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
            token.provider = user.provider
         }
         return token
      },
      async session({ session, token }) {
         session.user.userId = token.userId
         session.user.id = token.id as string
         session.user.userName = token.userName
         session.user.email = token.email
         session.user.isAdmin = token.isAdmin as boolean
         session.user.isEmailConfirmed = token.isEmailConfirmed as boolean
         session.user.picture = token.picture as string
         session.user.name = token.name as string
         session.user.provider = token.provider
         return session
      },
      async signIn({ account, profile }) {
         // Both register and signin users
         if (account?.provider === 'google') {
            await dbConnect()
            // 1. Check if th user (email) exists in your database
            const foundUser = await UserModel.findOne({ email: profile?.email })

            if (foundUser) return true
            const foundGoogleUser = await GoogleUserModel.findOne({ email: profile?.email })
            // 2. If it doesn't exist, create it -> google_user mongoDB

            if (!foundGoogleUser) {
               const googleUser = new GoogleUserModel({
                  name: profile?.name,
                  family_name: profile?.family_name,
                  given_name: profile?.given_name,
                  email: profile?.email,
                  picture: profile?.picture,
                  isEmailConfirmed: profile?.email_verified,
                  providerAccountId: account?.providerAccountId,
                  provider: account?.provider,
               })
               await googleUser.save()
            }
         }
         return true
      },
   },
} satisfies NextAuthConfig
