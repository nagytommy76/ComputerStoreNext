'use client'
import { useActionState } from 'react'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

import InfoBar from './InfoBar'
import loginAction from '@/serverActions/Login/loginAction'
import Social from './Social'

import { LoginForm } from './Styles'

export default function Login() {
   const [state, formAction, isPending] = useActionState(loginAction, undefined)
   return (
      <>
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
            <Social />
         </LoginForm>
         <InfoBar emailError={state?.errors?.email} passwordError={state?.errors?.password} />
      </>
   )
}
