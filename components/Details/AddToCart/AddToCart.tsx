'use client'
import { useState } from 'react'
import { useAppDispatch } from '@/reduxStore/hooks'
import { addToCart } from '@/reduxStore/slices/Cart/CartSlice'

import { StyledCartSection, StyledNumberInput } from './Styles'

import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import IconButton from '@mui/material/IconButton'

export default function AddToCart({
   manufacturer,
   price,
   type,
   productType,
   productId,
   pictureUrl,
}: {
   manufacturer: string
   type: string
   price: number
   productType: string
   pictureUrl: string
   productId: string
}) {
   const [quantity, setQuantity] = useState(1)
   const dispatch = useAppDispatch()
   const handleAddToCart = () =>
      dispatch(
         addToCart({
            _id: productId,
            displayImage: pictureUrl,
            displayName: manufacturer + ' ' + type,
            itemQuantity: quantity,
            productType,
            price: price,
         })
      )

   return (
      <StyledCartSection>
         <StyledNumberInput
            fullWidth
            error={false}
            type='text'
            id='qty'
            variant='filled'
            label='Darab'
            value={quantity}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
               setQuantity(Number(event.target.value))
            }}
         />
         <IconButton size='large' onClick={handleAddToCart} color='primary' aria-label='add to shopping cart'>
            <AddShoppingCartIcon fontSize='large' />
         </IconButton>
      </StyledCartSection>
   )
}
