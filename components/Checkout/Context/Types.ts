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

export interface ISetPickUpOption {
   type: 'SET_PICKUP_OPTION'
   payload: 'inStore' | 'toHomeGLS' | 'foxPost'
}

export type ICheckoutAction = ISetUserDetails | ISetDetailField | ISetPickUpOption

export interface ICheckoutState {
   userDetails: UserDetailsTypes
   pickUpOption: 'inStore' | 'toHomeGLS' | 'foxPost'
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
   pickUpOption: 'inStore',
}
