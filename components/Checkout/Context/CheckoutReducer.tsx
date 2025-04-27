import type { ICheckoutAction, ICheckoutState } from './Types'
import { checkoutData } from './Types'

export default function FriendReducer(state: ICheckoutState, { payload, type }: ICheckoutAction) {
   switch (type) {
      case 'SET_USER_DETAILS':
         return {
            ...state,
            userDetails: payload,
         }
      case 'SET_DETAIL_FIELD':
         return {
            ...state,
            userDetails: {
               ...state.userDetails,
               [payload.field]: payload.value,
               address: {
                  ...state.userDetails.address,
                  [payload.field]: payload.value,
               },
            },
         }
      case 'SET_PICKUP_OPTION':
         return {
            ...state,
            pickUpOption: payload,
            deliveryPrice:
               (payload === 'inStore' && 0) ||
               (payload === 'toHomeGLS' && 990) ||
               (payload === 'foxPost' && 880) ||
               0,
         }
      case 'SET_PAYMENT_METHOD':
         return {
            ...state,
            paymentMethod: payload,
         }
      case 'SET_TO_DEFAULT':
         return checkoutData
      default:
         return state
   }
}
