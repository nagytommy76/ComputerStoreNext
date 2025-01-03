'use client'
import { styled } from '@mui/material/styles'

export const LoginForm = styled('form')(({ theme }) => ({
   width: '450px',
   height: '450px',
   borderRadius: '4px',
   padding: '1.7rem',
   backgroundColor: theme.palette.secondary.main,

   display: 'flex',
   flexDirection: 'column',
   justifyContent: 'space-around',
}))

export const SocialContainer = styled('div')({
   width: '100%',
   margin: '.75rem 0',

   display: 'flex',
   flexDirection: 'row',
   justifyContent: 'center',
   gap: '1rem',
})
