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
   ])) as {
      _id: string
      userName: string
      email: string
      password: string
      isAdmin: boolean
      isEmailConfirmed: boolean
   }
   return user
}
