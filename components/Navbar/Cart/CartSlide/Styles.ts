import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'

export const CartSlideContainer = styled(Box)(({ theme }) => ({
   overflow: 'hidden',
   width: '400px',
   height: '100%',
   padding: '1rem',

   [`@media (max-width: ${theme.breakpoints.values.sm}px)`]: {
      width: '100vw',
   },
}))

export const CartBodySection = styled('section')(({ theme }) => ({
   height: '100%',
   display: 'flex',
   flexDirection: 'column',
}))
