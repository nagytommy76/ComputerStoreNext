'use server'
import { compare } from 'bcrypt'
// import { redirect } from 'next/navigation'

import dbConnect from '@DBConnect'
import UserModel from '@Models/User/User'
import SignupFormSchema from '@/Validators/SignupFormSchema'
// import { createSession } from '@/app/utils/Session'
import { signIn } from '@NextAuth'
import { AuthError } from 'next-auth'

export default async function loginAction(state: unknown, formData: FormData) {
   const email = formData.get('email')
   const password = formData.get('password')

   const validatedFields = SignupFormSchema().safeParse({
      email,
      password,
   })
   // If any form fields are invalid, return early
   if (!validatedFields.success) {
      return {
         errors: validatedFields.error.flatten().fieldErrors,
      }
   }
   await dbConnect()
   // Search for the user in the database
   const user = await UserModel.findOne({ email })

   if (!user) {
      return {
         errors: {
            email: 'Nincs ilyen felhasználó',
            password: '',
         },
      }
   }
   // Check user password
   if (await compare(password as string, user?.password as string)) {
      return {
         errors: {
            email: '',
            password: 'Hiba! Rossz a jelszóó',
         },
      }
   }
   // await createSession({
   //    email: user.email,
   //    userId: user._id,
   //    userName: user.userName,
   //    isAdmin: user.isAdmin,
   // })

   try {
      await signIn('credentials', {
         email: user.email,
         userId: user._id,
         userName: user.userName,
         isAdmin: user.isAdmin,
         redirectTo: '/',
      })
   } catch (error) {
      if (error instanceof AuthError) {
         switch (error.type) {
            case 'CredentialsSignin':
               return {
                  errors: {
                     email: '',
                     password: 'Hiba! Rossz a jelszó',
                  },
               }
            default: {
               return {
                  errors: {
                     email: '',
                     password: 'Valami más hiba',
                  },
               }
            }
         }
      }
   }

   // redirect('/')
   // } else {
   //    return {
   //       errors: {
   //          email: '',
   //          password: 'Hiba! Rossz a jelszó',
   //       },
   //    }
   // }
}
