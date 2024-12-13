'use client'
import { styled } from '@mui/material/styles'
import Image from 'next/image'
import Paper from '@mui/material/Paper'

export const LoginPage = styled('section')(({ theme }) => ({
   minHeight: '80vh',
   display: 'grid',
   gridTemplateColumns: 'repeat(2, 50%)',
   alignItems: 'center',
   justifyContent: 'center',

   [`@media (max-width: ${theme.breakpoints.values.sm}px)`]: {
      gridTemplateColumns: 'repeat(1, 95%)',
   },
}))

export const LoginContainer = styled('div')({
   display: 'flex',
   flexDirection: 'row',
   alignItems: 'center',
   justifyContent: 'center',
})

export const LoginForm = styled(Paper)({
   width: '450px',
   height: '350px',
   borderRadius: '4px',
   padding: '1.3rem',

   display: 'flex',
   flexDirection: 'column',
   justifyContent: 'space-around',
})

export const StyledImage = styled(Image)(({ theme }) => ({
   width: '100%',
   objectFit: 'cover',
   [`@media (max-width: ${theme.breakpoints.values.sm}px)`]: {
      display: 'none',
   },
}))
