import { createContext, useReducer, useEffect } from 'react'
import CheckoutReducer from './CheckoutReducer'

import { checkoutData, type ICheckoutContext } from './Types'
import type { UserDetailsTypes } from '@/types/userTypes'

export const CheckoutContext = createContext<ICheckoutContext>({
   checkoutReducer: checkoutData,
   checkoutDispatch: function (): void {
      throw new Error('Function not implemented.')
   },
})

export default function CheckoutContextProvider({
   userDetails,
   children,
}: {
   userDetails?: UserDetailsTypes
   children: React.ReactNode
}) {
   const [checkoutReducer, checkoutDispatch] = useReducer(CheckoutReducer, checkoutData)

   useEffect(() => {
      if (!userDetails) return
      checkoutDispatch({ type: 'SET_USER_DETAILS', payload: userDetails })
   }, [userDetails])

   return (
      <CheckoutContext.Provider value={{ checkoutReducer, checkoutDispatch }}>
         {children}
      </CheckoutContext.Provider>
   )
}
