import { CartItemsType, StateType } from './Types'

export const checkProductExistsInTheCart = (productId: string, StateCartItems: CartItemsType[]) => {
   return StateCartItems.find((item: CartItemsType) => item.itemId === productId)
}

export const searchForStartingIndexInStateCartItems = (
   productId: string,
   StateCartItems: CartItemsType[]
) => {
   return StateCartItems.findIndex((item: CartItemsType) => item.itemId === productId)
}

export const calculateTotalPriceAndQuantity = (state: StateType /*stateCartItems?: CartItemsType[]*/) => {
   const result = {
      quantity: 0,
      price: 0,
   }
   state.cartItems.forEach((cartItem) => {
      result.price += cartItem.price * cartItem.quantity
      result.quantity += cartItem.quantity
   })
   state.totalQuantity = result.quantity
   state.totalPrice = result.price
}
