import type { ProviderType } from '@/types/userTypes'
import dbConnect from '@DBConnect'
import UserModel from '@Models/User/User'

export default async function getUserByEmail(email?: string) {
   await dbConnect()
   const user = (await UserModel.findOne({ email }).select([
      '_id',
      'userName',
      'email',
      'password',
      'isAdmin',
      'isEmailConfirmed',
      'provider',
   ])) as {
      _id: string
      userName: string
      email: string
      password: string
      isAdmin: boolean
      isEmailConfirmed: boolean
      provider: ProviderType
   }
   return user
}
