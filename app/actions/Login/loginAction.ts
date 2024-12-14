'use server'
import dbConnect from '@DBConnect'
import SignupFormSchema, { FormState } from '@/Validators/SignupFormSchema'
// import { encrypt } from '@/app/utils/Session'

export default async function loginAction(formData: FormData, state: FormState) {
   await dbConnect()
   console.log(formData)
   console.log(state)
   const validatedFields = SignupFormSchema().safeParse({
      email: formData.get('email'),
      password: formData.get('password'),
   })

   // If any form fields are invalid, return early
   if (!validatedFields.success) {
      console.log(validatedFields.error.flatten().fieldErrors)
      return {
         errors: validatedFields.error.flatten().fieldErrors,
      }
   }

   return {
      errors: undefined,
   }
}
