import Login from '@/components/Auth/Login/Login'
import { LoginContainer, LoginPage, StyledImage } from './Styles'
import LoginImage from '@images/login.jpg'

export default function page() {
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
