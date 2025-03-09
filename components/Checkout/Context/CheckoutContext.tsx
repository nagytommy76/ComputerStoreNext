import { createContext, useReducer, useEffect, useState } from 'react'
import CheckoutReducer from './CheckoutReducer'

import { checkoutData, type ICheckoutContext } from './Types'
import type { UserDetailsTypes } from '@/types/userTypes'

export const CheckoutContext = createContext<ICheckoutContext>({
   isUserDetailsSet: false,
   email: '',
   checkoutReducer: checkoutData,
   checkoutDispatch: function (): void {
      throw new Error('Function not implemented.')
   },
})

export default function CheckoutContextProvider({
   userDetails,
   children,
   email,
}: {
   userDetails?: UserDetailsTypes
   children: React.ReactNode
   email: string
}) {
   const [checkoutReducer, checkoutDispatch] = useReducer(CheckoutReducer, checkoutData)
   const [isUserDetailsSet, setIsUserDetailsSet] = useState(false)

   useEffect(() => {
      if (userDetails) {
         setIsUserDetailsSet(true)
         checkoutDispatch({ type: 'SET_USER_DETAILS', payload: userDetails })
      }
   }, [userDetails])

   return (
      <CheckoutContext.Provider value={{ checkoutReducer, checkoutDispatch, isUserDetailsSet, email }}>
         {children}
      </CheckoutContext.Provider>
   )
}
