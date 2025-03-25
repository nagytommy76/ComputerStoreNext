import type { UserTypes } from '@/types/userTypes'
import { Schema, model, models } from 'mongoose'
import UserDBDefinitions from './userHelper'

const UserSchema = new Schema<UserTypes>({
   userName: { type: String, required: true, unique: true },
   password: {
      type: String,
      required: [true, 'Adjon meg egy jelszót!'],
      minlength: [6, 'a jelszó min. 6 karakter legyen!'],
   },
   email: {
      type: String,
      required: [true, 'Adjon meg egy email címet!'],
      unique: true,
      lowercase: true,
   },
   isAdmin: { type: Boolean, default: false },
   isEmailConfirmed: { type: Boolean, default: false },
   ...UserDBDefinitions,
}).add({
   provider: {
      type: String,
      default: 'credentials',
   },
})

const UserModel = models?.User || model<UserTypes>('User', UserSchema)
export default UserModel
