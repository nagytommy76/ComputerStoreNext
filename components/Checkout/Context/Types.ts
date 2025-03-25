import type { ProviderType, UserDetailsTypes } from '@/types/userTypes'
import type { Dispatch, SetStateAction } from 'react'

export interface ISetUserDetails {
   type: 'SET_USER_DETAILS'
   payload: UserDetailsTypes
}
export interface ISetDetailField {
   type: 'SET_DETAIL_FIELD'
   payload: { field: string; value: string }
}
export interface ISetProvider {
   type: 'SET_PROVIDER'
   payload: { field: string; value: ProviderType }
}

export type ICheckoutAction = ISetUserDetails | ISetDetailField | ISetProvider

export interface ICheckoutState {
   userDetails: UserDetailsTypes
}

// CONTEXT
export interface ICheckoutContext {
   authProvider: ProviderType
   isUserDetailsSet: boolean
   email: string
   checkoutReducer: ICheckoutState
   setIsUserDetailsSet: Dispatch<SetStateAction<boolean>>
   checkoutDispatch: React.Dispatch<ICheckoutAction>
}

export const checkoutData: ICheckoutState = {
   userDetails: {
      firstName: '',
      lastName: '',
      phone: '',
      address: {
         zipCode: '',
         city: '',
         street: '',
         houseNumber: '',
         floor: '',
         door: '',
      },
   },
}
