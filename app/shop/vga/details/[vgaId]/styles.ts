'use client'
import { styled } from '@mui/material'

export const DetailsContainer = styled('section')(({ theme }) => ({
   minHeight: '100vh',
   width: '50%',
   margin: '1.5rem auto 0 auto',

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

   [`@media (max-width: ${theme.breakpoints.values.sm}px)`]: {
      flexDirection: 'column',
      marginBottom: '1rem',
   },
}))

export const BodySection = styled('section')(({ theme }) => ({
   minHeight: '55vh',
   display: 'flex',
   flexDirection: 'row' as const,
   [`@media (max-width: ${theme.breakpoints.values.sm}px)`]: {
      flexDirection: 'column',
   },
}))
