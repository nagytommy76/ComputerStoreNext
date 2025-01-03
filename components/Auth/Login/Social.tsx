'use client'
import { signIn } from 'next-auth/react'

import Image from 'next/image'
import GoogleIcon from '@images/google.png'
import FacebookIcon from '@images/facebook.png'
import Button from '@mui/material/Button'

import { SocialContainer } from './Styles'

const WIDTH_HEIGHT = 60

export default function Social() {
   const logIn = (provider: 'google' | 'facebook') => {
      signIn(provider, { callbackUrl: '/' })
   }

   return (
      <SocialContainer>
         <Button size='large' title='Google bejelentkezés' onClick={() => logIn('google')}>
            <Image src={GoogleIcon} alt='google' width={WIDTH_HEIGHT} height={WIDTH_HEIGHT} />
         </Button>
         <Button size='large' title='Facebook bejelentkezés' onClick={() => logIn('facebook')}>
            <Image src={FacebookIcon} alt='facebook' width={WIDTH_HEIGHT} height={WIDTH_HEIGHT} />
         </Button>
      </SocialContainer>
   )
}
