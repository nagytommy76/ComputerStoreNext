'use client'
import { styled } from '@mui/material/styles'
import Image from 'next/image'

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

export const StyledImage = styled(Image)(({ theme }) => ({
   width: '100%',
   objectFit: 'cover',
   [`@media (max-width: ${theme.breakpoints.values.sm}px)`]: {
      display: 'none',
   },
}))
