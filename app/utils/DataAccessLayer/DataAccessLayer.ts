import 'server-only'

import { cookies } from 'next/headers'
import { decrypt } from '../Session'
import { cache } from 'react'

export const verifySession = cache(async () => {
   const cookie = (await cookies()).get('sessionToken')?.value
   const session = await decrypt(cookie)

   if (!session?.userId) {
      return {
         isAuth: null,
      }
   }

   return {
      isAuth: true,
      isAdmin: session.isAdmin as boolean,
      email: session.email as string,
      userId: session.userId as string,
      userName: session.userName as string,
   }
})
