import { redirect } from 'next/navigation'
import Login from '@/components/Auth/Login/Login'
import { LoginContainer, LoginPage, StyledImage } from './Styles'
import LoginImage from '@images/login.jpg'

import { verifySession } from '@/utils/DataAccessLayer/DataAccessLayer'

export default async function page() {
   const session = await verifySession()
   const isAuth = session.isAuth
   if (isAuth === true) return redirect('/')

   return (
      <LoginPage>
         <LoginContainer>
            <Login />
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
