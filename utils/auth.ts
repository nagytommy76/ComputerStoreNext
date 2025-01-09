import NextAuth from 'next-auth'
import authConfig from './auth.config'
import CredentialsProvider from 'next-auth/providers/credentials'
import GoogleProvider from 'next-auth/providers/google'

import { compare } from 'bcrypt'
import dbConnect from '@DBConnect'
import UserModel from '@Models/User/User'
import SignupFormSchema from '@/Validators/SignupFormSchema'

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
            console.log(profile)

            return profile
         },
      }),
      CredentialsProvider({
         id: 'credentials',
         name: 'credentials',
         credentials: {
            email: {
               label: 'email',
               type: 'email',
               placeholder: 'email',
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

            await dbConnect()
            // Search for the user in the database
            const user = (await UserModel.findOne({ email }).select([
               '_id',
               'userName',
               'email',
               'password',
               'isAdmin',
               'isEmailConfirmed',
            ])) as {
               _id: string
               userName: string
               email: string
               password: string
               isAdmin: boolean
               isEmailConfirmed: boolean
            }

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
