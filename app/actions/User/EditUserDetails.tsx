'use server'
import dbConnect from '@DBConnect'
import UserModel from '@Models/User/User'
import GoogleUserModel from '@Models/User/GoogleUser'
import { revalidatePath } from 'next/cache'

import { extractFormData, validatedFormData } from './UserDetails'
import AddressForm from '@/Validators/AddressForm'
import type { ProviderType } from '@/types/userTypes'

export default async function EditUserDetails(email: string, authProvider: ProviderType, formData: FormData) {
   const userDetails = extractFormData(formData)
   const validatedFields = AddressForm().safeParse(userDetails)
   if (!validatedFields.success) {
      return {
         errors: validatedFields.error.flatten().fieldErrors,
      }
   }

   await dbConnect()

   switch (authProvider) {
      case 'google':
         await GoogleUserModel.updateOne(
            {
               email,
            },
            {
               $set: {
                  userDetails: validatedFormData(validatedFields),
               },
            }
         )
         break
      default:
         await UserModel.updateOne(
            {
               email,
            },
            {
               $set: {
                  userDetails: validatedFormData(validatedFields),
               },
            }
         )
         break
   }
   revalidatePath('/checkout')

   return 200
}
