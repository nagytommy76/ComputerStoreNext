'use server'
import dbConnect from '@DBConnect'
import UserModel from '@Models/User/User'
import GoogleUserModel from '@Models/User/GoogleUser'
import { revalidatePath } from 'next/cache'

export default async function CreateUserDetails(email: string, formData: FormData) {
   const userDetails = {
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      phone: formData.get('phone'),
      address: {
         zipCode: formData.get('zipCode'),
         city: formData.get('city'),
         street: formData.get('street'),
         houseNumber: formData.get('houseNumber'),
         floor: formData.get('floor'),
         door: formData.get('door'),
      },
   }

   await dbConnect()

   const foundUser = await UserModel.findOne({ email }).select(['userDetails'])
   if (!foundUser) {
      const foundGoogleUser = await GoogleUserModel.findOne({ email }).select(['userDetails'])
      foundGoogleUser.userDetails = userDetails
      await foundGoogleUser.save()
   }

   // foundUser.userDetails = userDetails
   // await foundUser.save()
   revalidatePath('/checkout')

   return 200
}
