import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import LoginImage from '@images/login.jpg'

import { LoginPage, LoginContainer, LoginForm, StyledImage } from './Styles'

export default function Login() {
   return (
      <LoginPage>
         <LoginContainer>
            <LoginForm component='form' action={''} method='post'>
               <Typography variant='h4' align='center'>
                  Bejelentkezés
               </Typography>
               <TextField id='email' name='email' label='Email cím' variant='outlined' fullWidth />
               <TextField id='password' name='password' label='Jelszó' variant='outlined' fullWidth />
               <Button type='submit' variant='outlined'>
                  Belépés
               </Button>
            </LoginForm>
         </LoginContainer>
         <StyledImage
            src={LoginImage.src}
            alt='login page image with a cpu cooler'
            width={1000}
            height={1200}
         />
      </LoginPage>
   )
}
