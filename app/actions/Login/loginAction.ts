'use server'
import { redirect } from 'next/navigation'
import { signIn } from '@NextAuth'
import { AuthError } from 'next-auth'

import SignupFormSchema from '@/Validators/SignupFormSchema'

export default async function loginAction(state: unknown, formData: FormData) {
   const validatedFields = SignupFormSchema().safeParse({
      email: formData.get('email'),
      password: formData.get('password'),
   })
   // If any form fields are invalid, return early
   if (!validatedFields.success) {
      return {
         errors: validatedFields.error.flatten().fieldErrors,
      }
   }
   const { email, password } = validatedFields.data

   try {
      await signIn('credentials', {
         email,
         password,
         redirectTo: '/',
         redirect: true,
      })
   } catch (error) {
      if (error instanceof AuthError) {
         switch (error.type) {
            case 'CredentialsSignin':
               return {
                  errors: {
                     email: '',
                     password: 'Hibás belépési adatokat adtál meg!',
                  },
               }
            default: {
               return {
                  errors: {
                     email: '',
                     password: `Egyéb hiba: ${error.message}`,
                  },
               }
            }
         }
      }
   } finally {
      redirect('/')
   }
}
