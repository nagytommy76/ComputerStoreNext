import type { ICheckoutAction, ICheckoutState } from './Types'

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
      default:
         return state
   }
}
