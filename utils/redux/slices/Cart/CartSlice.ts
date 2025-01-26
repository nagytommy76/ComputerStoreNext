import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CartItemsType, IncomingTypes, initialState } from './Types'
import {
   checkProductExistsInTheCart,
   searchForStartingIndexInStateCartItems,
   calculateTotalPriceAndQuantity,
} from './Helpers'

const CartSlice = createSlice({
   name: 'cart',
   initialState,
   reducers: {
      addToCart: (state, action: PayloadAction<IncomingTypes>) => {
         const singleCartItem: CartItemsType = {
            itemId: action.payload._id,
            productType: action.payload.productType,
            displayName: action.payload.displayName,
            displayImage: action.payload.displayImage,
            price: action.payload.price,
            quantity: action.payload.itemQuantity,
         }
         const foundElementIndex = searchForStartingIndexInStateCartItems(action.payload._id, state.cartItems)
         const foundCartItemInState = checkProductExistsInTheCart(action.payload._id, state.cartItems)
         if (foundElementIndex >= 0 && foundCartItemInState !== undefined) {
            //  Ha true akkor van ilyen elem és át kell írni a quantity-t
            // Megkeresni az ID alapján és annak a qty-jét módosítani
            singleCartItem.quantity = foundCartItemInState.quantity + action.payload.itemQuantity
            state.cartItems.splice(foundElementIndex, 1, singleCartItem)
            calculateTotalPriceAndQuantity(state)
         } else {
            // Ha false, hozzáadni az objectet, a user által küldött qty-vel
            state.cartItems.push(singleCartItem)
            calculateTotalPriceAndQuantity(state)
         }
      },
   },
})

export const { addToCart } = CartSlice.actions

export default CartSlice.reducer
