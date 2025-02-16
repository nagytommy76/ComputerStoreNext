import { styled } from '@mui/material/styles'

export const ProductContainerStyle = styled('div')(({ theme }) => ({
   width: '80%',
   minHeight: '100%',
   display: 'flex',
   flexDirection: 'column',
   justifyContent: 'space-between',

   [`@media (max-width: ${theme.breakpoints.values.sm}px)`]: {
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
   },
}))

export const CardGridContainerStyle = styled('div')(({ theme }) => ({
   minHeight: '100vh',
   display: 'grid',
   width: '85%',
   rowGap: '3rem',
   columnGap: '2rem',
   justifyContent: 'center',
   gridAutoRows: '380px',
   gridTemplateColumns: 'repeat(auto-fill, minmax(225px, 1fr))',

   [`@media (max-width: ${theme.breakpoints.values.sm}px)`]: {
      width: '100%',
      gridTemplateColumns: 'none',
   },
}))
