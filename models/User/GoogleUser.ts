import type { GoogleUserTypes } from '@/types/userTypes'
import { Model, Schema, model, models } from 'mongoose'
import UserDBDefinitions from './userHelper'

const GoogleUserSchema = new Schema<GoogleUserTypes>({
   name: String,
   family_name: String,
   given_name: String,
   email: String,
   isEmailConfirmed: Boolean,
   picture: String,
   providerAccountId: String,
   provider: String,
   ...UserDBDefinitions,
})

const GoogleUserModel =
   (models?.GoogleUser as Model<GoogleUserTypes>) || model<GoogleUserTypes>('GoogleUser', GoogleUserSchema)

export default GoogleUserModel
