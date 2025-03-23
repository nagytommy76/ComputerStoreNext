'use server'
import dbConnect from '@DBConnect'
import UserModel from '@Models/User/User'
import GoogleUserModel from '@Models/User/GoogleUser'
import { revalidatePath } from 'next/cache'

import { extractFormData, validatedFormData } from './UserDetails'
import AddressForm from '@/Validators/AddressForm'

export default async function CreateUserDetails(email: string, formData: FormData) {
   const userDetails = extractFormData(formData)
   const validatedFields = AddressForm().safeParse(userDetails)
   if (!validatedFields.success) {
      return {
         errors: validatedFields.error.flatten().fieldErrors,
      }
   }

   await dbConnect()

   const foundUser = await UserModel.findOne({ email }).select(['userDetails'])
   if (!foundUser) {
      const foundGoogleUser = await GoogleUserModel.findOne({ email }).select(['userDetails'])
      foundGoogleUser.userDetails = validatedFormData(validatedFields)
      await foundGoogleUser.save()
   } else {
      foundUser.userDetails = validatedFormData(validatedFields)
      await foundUser.save()
   }

   revalidatePath('/checkout')

   return 200
}
