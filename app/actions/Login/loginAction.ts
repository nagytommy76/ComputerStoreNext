'use server'
import { compare } from 'bcrypt'
import dbConnect from '@DBConnect'
import { UserModel } from '@Models/User/User'
import SignupFormSchema /* { FormState } */ from '@/Validators/SignupFormSchema'
// import { encrypt } from '@/app/utils/Session'

export default async function loginAction(state: unknown, formData: FormData) {
   await dbConnect()

   const email = formData.get('email')
   const password = formData.get('password')

   const validatedFields = SignupFormSchema().safeParse({
      email,
      password,
   })

   // If any form fields are invalid, return early
   if (!validatedFields.success) {
      console.log(validatedFields.error.flatten().fieldErrors)
      return {
         errors: validatedFields.error.flatten().fieldErrors,
      }
   }

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

   if (await compare(password as string, user?.password as string)) {
      console.log('Be van lépve')
   }
   return {
      email,
      password,
   }
}
