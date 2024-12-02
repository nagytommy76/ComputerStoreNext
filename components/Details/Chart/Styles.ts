'use client'
import { styled } from '@mui/material/styles'

export const ChartSection = styled('section')({
   display: 'flex',
   alignItems: 'center',
   backgroundColor: `transparent`,
   maxWidth: '100%',
   minHeight: '320px',
   margin: '1rem auto',
})

export const ChartContainer = styled('div')(({ theme }) => ({
   backgroundColor: `${theme.palette.secondary.main}`,
   color: `${theme.palette.secondary.contrastText}`,
   fontSize: '1.05rem',
   padding: '.5rem 1rem',
   borderRadius: '5px',
}))
