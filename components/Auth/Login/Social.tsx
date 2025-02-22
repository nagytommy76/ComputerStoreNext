'use client'
import { signIn } from 'next-auth/react'
import Image from 'next/image'
import GoogleIcon from '@images/google.png'
import FacebookIcon from '@images/facebook.png'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'

import { SocialContainer } from './Styles'

const WIDTH_HEIGHT = 60

export default function Social() {
   const logIn = (provider: 'google' | 'facebook') => {
      signIn(provider, { redirectTo: '/' })
   }

   return (
      <SocialContainer>
         <Button size='large' onClick={() => logIn('google')}>
            <Image src={GoogleIcon} alt='google' width={WIDTH_HEIGHT} height={WIDTH_HEIGHT} />
         </Button>
         <Tooltip title='A funkció fejlesztés alatt'>
            <Button size='large' onClick={() => console.log('Fejlesztés alatt')}>
               <Image src={FacebookIcon} alt='facebook' width={WIDTH_HEIGHT} height={WIDTH_HEIGHT} />
            </Button>
         </Tooltip>
      </SocialContainer>
   )
}
