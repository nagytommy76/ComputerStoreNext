'use client'
import { useAppSelector } from '@/reduxStore/hooks'

import BackgroundImage from '@images/AdressBackG.jpg'
import { ProductContainer, ProductImage } from './Styles'

export default function Products() {
   const cartItems = useAppSelector((state) => state.cart.cartItems)
   const totalPrice = useAppSelector((state) => state.cart.totalPrice)

   return (
      <ProductContainer>
         <ProductImage src={BackgroundImage} alt='background' width={900} height={1500} />
         <h1>SDADSSDASDA</h1>
      </ProductContainer>
   )
}
