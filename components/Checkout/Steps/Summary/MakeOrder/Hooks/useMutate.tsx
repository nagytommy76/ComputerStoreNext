import { useRouter } from 'next/navigation'
import { useContext } from 'react'
import { CheckoutContext } from '../../../../Context/CheckoutContext'

import { useMutation } from '@tanstack/react-query'
import { useAppSelector, useAppDispatch } from '@/reduxStore/hooks'
import { setToDefaultState } from '@/reduxStore/slices/Cart/CartSlice'

export default function useMutate() {
   const dispatch = useAppDispatch()
   const router = useRouter()

   const cartItems = useAppSelector((state) => state.cart.cartItems)
   const totalPrice = useAppSelector((state) => state.cart.totalPrice)
   const {
      authProvider,
      email,
      checkoutReducer: { paymentMethod, pickUpOption, deliveryPrice },
      checkoutDispatch,
   } = useContext(CheckoutContext)

   async function mutationFn() {
      return await fetch(`/api/order/make-order`, {
         method: 'POST',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify({
            cartItems,
            totalPrice,
            paymentMethod,
            pickUpOption,
            deliveryPrice,
            authProvider,
            email,
         }),
      })
   }

   return useMutation({
      mutationFn,
      onSuccess(data) {
         console.log(data.status)
         if (data.status === 200) {
            checkoutDispatch({ type: 'SET_TO_DEFAULT', payload: undefined })
            dispatch(setToDefaultState())
            router.push('/')
         }
      },
   })
}
