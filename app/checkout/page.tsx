import { UserDetailsTypes } from '@/types/userTypes'
import { auth } from '@NextAuth'
import { Metadata } from 'next'

import StepsContainer from '@Checkout/Steps/StepsContainer'
import Products from '@Checkout/Products/Products'
import { CheckoutContainer } from '@Checkout/Styles'

export const metadata: Metadata = {
   title: 'Computer Store | Rendelés leadása',
   description: 'Checkout page',
}

async function getUserDetails(email: string) {
   const data = await fetch(`${process.env.APP_URL}/api/user-details?email=${email}`, {
      method: 'GET',
   })
   const response = (await data.json()) as Promise<{
      user: { userDetails: UserDetailsTypes | undefined; name?: string; userName?: string; email: string }
   }>
   return await response
}

export default async function page() {
   const session = await auth()
   const { user } = await getUserDetails(session?.user?.email || '')

   return (
      <CheckoutContainer>
         <StepsContainer
            provider={session?.user?.provider}
            userDetails={user.userDetails}
            email={user.email}
         />
         <Products />
      </CheckoutContainer>
   )
}
