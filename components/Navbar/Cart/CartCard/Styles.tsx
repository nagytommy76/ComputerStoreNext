import { styled } from '@mui/material/styles'

import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'

export const CartCardStyle = styled(Card)(({}) => ({
   position: 'relative',
   width: '100%',
   height: '140px',

   display: 'flex',
   flexDirection: 'row',
   alignItems: 'center',
}))

export const CardContentStyle = styled(CardContent)(({}) => ({
   height: '100%',
   padding: '.5rem .8rem',

   display: 'flex',
   flexDirection: 'column',
   justifyContent: 'space-between',

   ['&:last-child']: { paddingBottom: '0' },
}))

export const CardActionsStyle = styled(CardActions)(({}) => ({
   padding: '.4rem 0',

   display: 'flex',
   flexDirection: 'row',
   alignContent: 'space-between',
}))
