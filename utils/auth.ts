import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

import dbConnect from '@DBConnect'
import UserModel from '@Models/User/User'
import SignupFormSchema from '@/Validators/SignupFormSchema'

export const { handlers, signIn, signOut, auth } = NextAuth({
   providers: [
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
            const email = credentials?.email
            const password = credentials?.password

            const validatedFields = SignupFormSchema().safeParse({
               email,
               password,
            })

            if (validatedFields.success) {
               await dbConnect()
               // Search for the user in the database
               const user = await UserModel.findOne({ email })

               if (!user) return null

               return user
            }
            return null
         },
      }),
   ],
   session: {
      strategy: 'jwt',
   },
   //    jwt: {
   //       secret: process.env.NEXTAUTH_SECRET || '',
   //       maxAge: Date.now() + 2 * 24 * 60 * 60 * 1000, // 2 nap * 24 óra * 1óra * 1 perc
   //    },
   pages: {
      signIn: '/login',
   },
})
