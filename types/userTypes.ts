import { ObjectId } from 'mongoose'

export type ProviderType = 'google' | 'facebook' | 'credentials'

export type GoogleUserTypes = {
   name: string
   family_name: string
   given_name: string
   email: string
   picture: string
   isEmailConfirmed: boolean
   providerAccountId: string
   provider: ProviderType
   cartItems: CartItemsType[]
   userDetails: UserDetailsTypes
   orders: UserOrders
}
export type UserTypes = {
   userName: string
   email: string
   password: string
   isAdmin: boolean
   isEmailConfirmed: boolean
   cartItems: CartItemsType[]
   userDetails: UserDetailsTypes
   orders: UserOrders
   _id: string
   provider: ProviderType
   iat?: number
   exp?: number
}

export type UserDetailsTypes = {
   firstName: string
   lastName: string
   phone: string
   address: {
      zipCode: string
      city: string
      street: string
      houseNumber: string
      floor?: string
      door?: string
   }
}

export type UserOrders = {
   _id?: ObjectId | string
   orderedAt: Date
   totalPrice: number
   paymentMethod: string
   payedAt?: number
   deliveryType?: string
   deliveryPrice?: number
   products?: {
      productID: ObjectId | string
      productName: string
      productQty: number
      productImage: string
      productPrice: number
   }[]
}[]

export type CartItemsType = {
   itemId: string
   productType: string
   quantity: number
   displayImage: string
   displayName: string
   price: number
}
