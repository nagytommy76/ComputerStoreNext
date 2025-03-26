'use server'
import dbConnect from '@DBConnect'
import UserModel from '@Models/User/User'
import GoogleUserModel from '@Models/User/GoogleUser'

import { extractFormData, validatedFormData } from './UserDetails'
import AddressForm, { type ZodAddressFormType } from '@/Validators/AddressForm'
import type { ProviderType } from '@/types/userTypes'
import type { Model } from 'mongoose'

export default async function EditUserDetails(email: string, authProvider: ProviderType, formData: FormData) {
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
            await ModifyUserDetails(GoogleUserModel, email, validatedFields)
            break
         default:
            await ModifyUserDetails(UserModel, email, validatedFields)
            break
      }

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

async function ModifyUserDetails(UserModel: Model<any>, email: string, validatedFields: ZodAddressFormType) {
   return await UserModel.updateOne(
      {
         email,
      },
      {
         $set: {
            userDetails: validatedFormData(validatedFields),
         },
      }
   )
}
