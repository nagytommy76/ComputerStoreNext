'use client'
import { styled } from '@mui/material/styles'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'

export const RatingContainer = styled('div')({
   display: 'flex',
   flexDirection: 'column',
   margin: '2rem auto',
})

export const StyledCard = styled(Card)(({ theme }) => ({
   width: '100%',
   minHeight: 350,

   display: 'flex',
   flexDirection: 'row',
   justifyContent: 'center',

   [`@media (max-width: ${theme.breakpoints.values.sm}px)`]: {
      flexDirection: 'column',
      alignItems: 'center',
   },
}))
export const StyledCardContent = styled(CardContent)(({}) => ({
   flex: 1,
}))
