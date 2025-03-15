'use server'
import { z } from 'zod'
import dbConnect from '@DBConnect'
import UserModel from '@Models/User/User'
import GoogleUserModel from '@Models/User/GoogleUser'
import { revalidatePath } from 'next/cache'

import { extractFormData } from './UserDetails'

const schema = z.object({
   firstName: z.string().min(1),
   lastName: z.string().min(1),
   phone: z.string().regex(/^\+36(20|30|70)\d{7}$/, 'Helytelen telefonszám fromátum: +36(20|30|70)XXXXXXX'),
   address: z.object({
      zipCode: z.string().regex(/^(1[1-9]\d{2}|[2-9]\d{3})$/, 'Helytelen irányítószám! Formátum: 1111-9999'),
      city: z.string().min(1),
      street: z.string().min(1),
      houseNumber: z.string().min(1),
      floor: z.string(),
      door: z.string(),
   }),
})

export default async function CreateUserDetails(email: string, formData: FormData) {
   const userDetails = extractFormData(formData)
   const validatedFields = schema.safeParse(userDetails)

   if (!validatedFields.success) {
      return {
         errors: validatedFields.error.flatten().fieldErrors,
      }
   }

   await dbConnect()

   const foundUser = await UserModel.findOne({ email }).select(['userDetails'])
   if (!foundUser) {
      const foundGoogleUser = await GoogleUserModel.findOne({ email }).select(['userDetails'])
      foundGoogleUser.userDetails = validatedFields
      await foundGoogleUser.save()
   } else {
      foundUser.userDetails = validatedFields
      await foundUser.save()
   }

   revalidatePath('/checkout')

   return 200
}
