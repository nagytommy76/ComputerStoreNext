import { styled } from '@mui/material/styles'

import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'

export const CartCardStyle = styled(Card)(({}) => ({
   position: 'relative',
   width: '100%',
   height: '140px',

   display: 'flex',
   flexDirection: 'row',
   justifyContent: 'space-between',
   alignItems: 'center',
}))

export const CardActionsStyle = styled(CardActions)(({}) => ({
   padding: '1rem 0',

   display: 'flex',
   flexDirection: 'row',
   justifyContent: 'space-between',
}))
