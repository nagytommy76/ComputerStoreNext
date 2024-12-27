'use client'
import { useActionState } from 'react'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

import Fade from '@mui/material/Fade'
import Alert from '@mui/material/Alert'

import loginAction from '@/serverActions/Login/loginAction'

import { LoginForm } from './Styles'

export default function Login() {
   const [state, formAction, isPending] = useActionState(loginAction, undefined)
   return (
      <LoginForm action={formAction}>
         <Typography variant='h4' align='center'>
            Bejelentkezés
         </Typography>
         <TextField type='email' id='email' name='email' label='Email cím' variant='outlined' fullWidth />
         <TextField
            type='password'
            id='password'
            name='password'
            label='Jelszó'
            variant='outlined'
            fullWidth
         />
         <Button disabled={isPending} type='submit' variant='outlined'>
            Belépés
         </Button>
         <Fade in={state?.errors?.password ? true : false}>
            <Alert severity='error'>
               <p>{state?.errors?.password}</p>
               <p>{state?.errors?.email}</p>
            </Alert>
         </Fade>
      </LoginForm>
   )
}
