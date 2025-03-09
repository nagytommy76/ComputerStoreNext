'use server'
import dbConnect from '@DBConnect'
import UserModel from '@Models/User/User'
import GoogleUserModel from '@Models/User/GoogleUser'

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

   const foundUser = await UserModel.findOne({ email }).select(['userDetails', 'email', 'userName'])
   if (!foundUser) {
      const foundGoogleUser = await GoogleUserModel.findOne({ email }).select([
         'userDetails',
         'email',
         'name',
      ])
   }
}
