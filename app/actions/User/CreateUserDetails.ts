'use server'
import dbConnect from '@DBConnect'
import UserModel from '@Models/User/User'
import GoogleUserModel from '@Models/User/GoogleUser'
import { revalidatePath } from 'next/cache'

import { extractFormData, validatedFormData } from './UserDetails'
import AddressForm from '@/Validators/AddressForm'
import type { ProviderType } from '@/types/userTypes'

export default async function CreateUserDetails(
   email: string,
   authProvider: ProviderType,
   formData: FormData
) {
   const userDetails = extractFormData(formData)
   const validatedFields = AddressForm().safeParse(userDetails)
   if (!validatedFields.success) {
      return {
         errors: validatedFields.error.flatten().fieldErrors,
         status: 400,
      }
   }

   try {
      await dbConnect()

      switch (authProvider) {
         case 'google':
            const googleUser = await GoogleUserModel.findOne({ email }).select(['userDetails'])
            googleUser.userDetails = validatedFormData(validatedFields)
            await googleUser.save()
            break
         default:
            const user = await UserModel.findOne({ email }).select(['userDetails'])
            user.userDetails = validatedFormData(validatedFields)
            await user.save()
            break
      }
      revalidatePath('/checkout')

      return {
         errors: null,
         status: 200,
      }
   } catch (error) {
      return {
         errors: error || null,
         status: 500,
      }
   }
}
