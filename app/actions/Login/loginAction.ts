'use server'
import { compare } from 'bcrypt'
import { redirect } from 'next/navigation'

import dbConnect from '@DBConnect'
import UserModel from '@Models/User/User'
import SignupFormSchema from '@/Validators/SignupFormSchema'
import { createSession } from '@/app/utils/Session'

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
      await createSession({ email: user.email, userId: user._id, useName: user.userName })
      redirect('/')
   } else {
      return {
         errors: {
            email: '',
            password: 'Hiba! Rossz a jelszó',
         },
      }
   }
}
