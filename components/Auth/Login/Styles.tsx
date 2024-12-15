'use client'
import { styled } from '@mui/material/styles'

export const LoginForm = styled('form')(({ theme }) => ({
   width: '450px',
   height: '380px',
   borderRadius: '4px',
   padding: '1.7rem',
   backgroundColor: theme.palette.secondary.main,

   display: 'flex',
   flexDirection: 'column',
   justifyContent: 'space-around',
}))
