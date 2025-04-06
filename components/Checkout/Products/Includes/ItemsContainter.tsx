'use client'
import { useAppSelector } from '@/reduxStore/hooks'

import { ItemsContainer } from '../Styles'
import CartCard from '@/Navbar/Cart/CartCard/CartCard'

export default function ItemsContainter() {
   const cartItems = useAppSelector((state) => state.cart.cartItems)
   return (
      <ItemsContainer>
         {cartItems &&
            cartItems.map((item) => (
               <div key={item.itemId} style={{ width: '100%', height: '170px' }}>
                  <CartCard key={item.itemId} singleCartItem={item} />
               </div>
            ))}
      </ItemsContainer>
   )
}
