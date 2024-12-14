import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

import loginAction from '@/serverActions/Login/loginAction'

import { LoginForm } from './Styles'

export default function Login() {
   return (
      <LoginForm component='form' action={loginAction} method='post'>
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
         <Button type='submit' variant='outlined'>
            Belépés
         </Button>
      </LoginForm>
   )
}
