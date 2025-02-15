'use client'
import { styled } from '@mui/material'

export const DetailsContainer = styled('section')(({ theme }) => ({
   minHeight: '100vh',
   width: '50%',
   margin: '110px auto 0 auto',

   [`@media (max-width: ${theme.breakpoints.values.sm}px)`]: {
      width: '95%',
      margin: '5rem auto',
   },
}))

export const HeadSection = styled('div')(({ theme }) => ({
   minHeight: '50vh',
   display: 'flex',
   flexDirection: 'row' as const,
   alignItems: 'stretch',
   justifyContent: 'center',
   gap: '1rem',

   [`@media (max-width: ${theme.breakpoints.values.sm}px)`]: {
      flexDirection: 'column',
      marginBottom: '1rem',
   },
}))
