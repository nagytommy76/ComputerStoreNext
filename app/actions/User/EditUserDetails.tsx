'use server'
import dbConnect from '@DBConnect'
import UserModel from '@Models/User/User'
import GoogleUserModel from '@Models/User/GoogleUser'
import { revalidatePath } from 'next/cache'

import { extractFormData } from './UserDetails'

export default async function EditUserDetails(email: string, formData: FormData) {
   const userDetails = extractFormData(formData)

   await dbConnect()
}
