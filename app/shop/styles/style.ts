'use client'
import { styled } from '@mui/material/styles'
export const ShopContainerStyle = styled('section')(({ theme }) => ({
   width: '100%',
   minHeight: '100vh',
   marginTop: '100px',
   display: 'flex',
   flexDirection: 'row' as const,
   justifyContent: 'space-between',

   [`@media (max-width: ${theme.breakpoints.values.sm}px)`]: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
   },
}))
