import Link from 'next/link'
import Button from '@mui/material/Button'

import ProfileMenu from '../Menu/ProfileMenu'
import { auth } from '@NextAuth'

export default async function Links() {
   const session = await auth()

   if (!session)
      return (
         <Link href={'/login'}>
            <Button color='inherit' size='large'>
               Belépés
            </Button>
         </Link>
      )
   const userName = session.user?.userName
   const isAdmin = session.user?.isAdmin

   if (session)
      return (
         <>
            <ProfileMenu userName={userName || ''} />
            {isAdmin && isAdmin === true && (
               <Button color='inherit' size='large'>
                  Admin oldal
               </Button>
            )}
         </>
      )
}
