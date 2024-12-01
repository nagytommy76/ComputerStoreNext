'use client'
import React from 'react'
import { StyledCartSection, StyledNumberInput } from './Styles'

import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import IconButton from '@mui/material/IconButton'

export default function AddToCart() {
   return (
      <StyledCartSection>
         <StyledNumberInput
            fullWidth
            error={false}
            type='text'
            id='qty'
            variant='filled'
            label='Darab'
            value={1}
            onChange={() => {}}
         />
         <IconButton
            size='large'
            onClick={() => {
               console.log('KLIKK KORÁRBA')
            }}
            color='primary'
            aria-label='add to shopping cart'
         >
            <AddShoppingCartIcon fontSize='large' />
         </IconButton>
      </StyledCartSection>
   )
}
