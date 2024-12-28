import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

import { compare } from 'bcrypt'
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
   session: {
      strategy: 'jwt',
   },
   // https://authjs.dev/guides/extending-the-session
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
   pages: {
      signIn: '/login',
   },
})
