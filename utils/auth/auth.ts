import NextAuth from 'next-auth'
import authConfig from './auth.config'
import CredentialsProvider from 'next-auth/providers/credentials'
import GoogleProvider from 'next-auth/providers/google'

import { compare } from 'bcrypt'
import SignupFormSchema from '@/Validators/SignupFormSchema'

import getUserByEmail from './auth.helper'

export const { handlers, signIn, signOut, auth } = NextAuth({
   ...authConfig,
   providers: [
      GoogleProvider({
         clientId: process.env.GOOGLE_CLIENT_ID as string,
         clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
         authorization: {
            params: {
               prompt: 'consent',
               access_type: 'offline',
               response_type: 'code',
            },
         },
         async profile(profile) {
            const foundUser = await getUserByEmail(profile.email)

            const profileObject = { ...profile }

            if (foundUser) {
               profileObject.userId = foundUser._id.toString()
               profileObject.userName = foundUser.userName
               profileObject.email = foundUser.email
               profileObject.isAdmin = foundUser.isAdmin
               profileObject.isEmailConfirmed = foundUser.isEmailConfirmed
               profileObject.provider = foundUser.provider
            }
            return profileObject
         },
      }),
      CredentialsProvider({
         id: 'credentials',
         name: 'credentials',
         credentials: {
            email: {
               label: 'E-mail cím',
               type: 'email',
               placeholder: 'E-mail cím',
            },
            password: {
               label: 'Jelszó',
               type: 'password',
               placeholder: 'Jelszó',
            },
         },
         authorize: async (credentials) => {
            const validatedFields = SignupFormSchema().safeParse({
               email: credentials?.email,
               password: credentials?.password,
            })
            const email = validatedFields.data?.email
            const password = validatedFields.data?.password
            if (!validatedFields.success) return null

            const user = await getUserByEmail(email)

            if (!user || !user.password) return null

            if (!(await compare(password as string, user.password as string))) {
               return null
            }
            return user
         },
      }),
   ],
   // https://authjs.dev/guides/extending-the-session
})
