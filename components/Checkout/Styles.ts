'use client'
import { styled } from '@mui/material/styles'

export const CheckoutContainer = styled('section')(({ theme }) => ({
   minHeight: '100vh',
   margin: '0 auto 0 auto',

   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',
   width: '100%',

   [`@media (max-width: ${theme.breakpoints.values.sm}px)`]: {
      flexDirection: 'column',
   },
}))

export const StepsContainerStyle = styled('div')(({ theme }) => ({
   width: '50%',
   height: '100vh',
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
   justifyContent: 'center',

   [`@media (max-width: ${theme.breakpoints.values.sm}px)`]: {
      width: '100%',
   },
}))
