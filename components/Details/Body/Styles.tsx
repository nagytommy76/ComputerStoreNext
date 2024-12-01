'use client'
import { styled } from '@mui/material'
import Box from '@mui/material/Box'

export const BodySection = styled('section')(({ theme }) => ({
   minHeight: '55vh',
   display: 'flex',
   flexDirection: 'row' as const,
   gap: '1.7rem',
   marginBottom: '2rem',

   [`@media (max-width: ${theme.breakpoints.values.lg}px)`]: {
      flexDirection: 'column',
   },
}))

export const SyledBox = styled(Box)(({ theme }) => ({
   width: '100%',
   minHeight: '100px',
   padding: '1rem',
   borderRadius: 1,

   backgroundColor: theme.palette.secondary.main,
   whiteSpace: 'pre-wrap',

   [`@media (max-width: ${theme.breakpoints.values.sm}px)`]: {
      width: '100%',
   },
}))
