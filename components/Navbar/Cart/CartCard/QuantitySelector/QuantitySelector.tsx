import React from 'react'
import { useAppDispatch } from '@/reduxStore/hooks'
import { decreaseItemQty, increaseItemQty } from '@/reduxStore/slices/Cart/CartSlice'

import IconButton from '@mui/material/IconButton'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import { Container, QuantityStyle } from './Style'

export default function QuantitySelector({ quaintity, id }: { quaintity: number; id: string }) {
   const dispatch = useAppDispatch()
   const decrease = () => {
      if (quaintity !== 1) dispatch(decreaseItemQty(id))
   }
   const increase = () => dispatch(increaseItemQty(id))
   return (
      <Container>
         <IconButton disabled={false} onClick={decrease} color='error' aria-label='decrease' size='small'>
            <RemoveIcon />
         </IconButton>
         <QuantityStyle>{quaintity} db</QuantityStyle>
         <IconButton disabled={false} onClick={increase} color='success' aria-label='increase' size='small'>
            <AddIcon />
         </IconButton>
      </Container>
   )
}
