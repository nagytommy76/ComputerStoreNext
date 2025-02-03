import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'

export const CartSlideContainer = styled(Box)(({ theme }) => ({
   width: '400px',
   padding: '1rem',

   [`@media (max-width: ${theme.breakpoints.values.sm}px)`]: {
      width: '100vw',
   },
}))

export const CartBodySection = styled('section')(({}) => ({
   display: 'flex',
   flexDirection: 'column',
   gap: '1.5rem',
   marginBottom: '2rem',
}))

export const CartFooterSection = styled('footer')(({}) => ({
   display: 'flex',
   flexDirection: 'column',
}))
