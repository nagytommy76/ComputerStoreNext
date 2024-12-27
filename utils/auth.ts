import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { SignJWT, jwtVerify } from 'jose'
import { MongoDBAdapter } from '@auth/mongodb-adapter'

import { compare } from 'bcrypt'
import dbConnect from '@DBConnect'
import UserModel from '@Models/User/User'
import SignupFormSchema from '@/Validators/SignupFormSchema'

const secretKey = process.env.SESSION_SECRET
const encodedKey = new TextEncoder().encode(secretKey)

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
         authorize: async (credentials, request) => {
            const validatedFields = SignupFormSchema().safeParse({
               email: credentials?.email,
               password: credentials?.password,
            })
            const email = validatedFields.data?.email
            const password = validatedFields.data?.password

            if (validatedFields.success) {
               await dbConnect()
               // Search for the user in the database
               const user = await UserModel.findOne({ email })

               if (!user || !user.password) return null

               if (!(await compare(password as string, user.password as string))) {
                  return null
               }
               // request
               return user
            }
            return null
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
            token
         }
         return token
      },
      async session({ session, token }) {
         console.log(token)
         session.user.test = 'Kurva anyádat'
         return session
      },
   },
   jwt: {
      async encode(params, expirationTime: string | number | Date = '7d'): Promise<string> {
         // console.log(params)
         return new SignJWT(params.token)
            .setProtectedHeader({ alg: 'HS256' })
            .setIssuedAt()
            .setExpirationTime(expirationTime)
            .sign(encodedKey)
      },
   },
   pages: {
      signIn: '/login',
   },
})

// type JWTPayload = {
//    email: string
//    userId: string
//    userName: string
//    isAdmin?: boolean
//    exp?: number
//    iat?: number
// }
