import { createContext, useReducer, useEffect, useState } from 'react'
import CheckoutReducer from './CheckoutReducer'

import { checkoutData, type ICheckoutContext } from './Types'
import type { UserDetailsTypes } from '@/types/userTypes'

export const CheckoutContext = createContext<ICheckoutContext>({
   authProvider: 'credentials',
   isUserDetailsSet: false,
   email: '',
   checkoutReducer: checkoutData,
   setIsUserDetailsSet: function (): void {
      throw new Error('Function not implemented.')
   },
   checkoutDispatch: function (): void {
      throw new Error('Function not implemented.')
   },
})

export default function CheckoutContextProvider({
   userDetails,
   children,
   email,
   provider,
}: {
   userDetails?: UserDetailsTypes
   children: React.ReactNode
   email: string
   provider: 'google' | 'facebook' | 'credentials'
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
      <CheckoutContext.Provider
         value={{
            authProvider: provider,
            checkoutReducer,
            checkoutDispatch,
            setIsUserDetailsSet,
            isUserDetailsSet,
            email,
         }}
      >
         {children}
      </CheckoutContext.Provider>
   )
}
