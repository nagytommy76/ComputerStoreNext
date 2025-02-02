import type { CartItemsType } from '@/types/userTypes'

export type IncomingTypes = {
   _id: string
   productType: string
   displayName: string
   displayImage: string
   price: number
   itemQuantity: number
}

export type StateType = {
   totalQuantity: number
   totalPrice: number
   cartItems: CartItemsType[]
}

export const initialState: StateType = {
   totalQuantity: 0,
   totalPrice: 0,
   cartItems: [],
}
