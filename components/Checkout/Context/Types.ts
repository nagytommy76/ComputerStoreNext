import type { UserDetailsTypes } from '@/types/userTypes'

export interface ISetUserDetails {
   type: 'SET_USER_DETAILS'
   payload: UserDetailsTypes
}
export interface ISetDetailField {
   type: 'SET_DETAIL_FIELD'
   payload: { field: string; value: string }
}

export type ICheckoutAction = ISetUserDetails | ISetDetailField

export interface ICheckoutState {
   userDetails: UserDetailsTypes
}

// CONTEXT
export interface ICheckoutContext {
   isUserDetailsSet: boolean
   email: string
   checkoutReducer: ICheckoutState
   checkoutDispatch: React.Dispatch<ICheckoutAction>
}

export const checkoutData: ICheckoutState = {
   userDetails: {
      firstName: '',
      lastName: '',
      phone: '',
      address: {
         zipCode: 0,
         city: '',
         street: '',
         houseNumber: '',
         floor: '',
         door: '',
      },
   },
}
