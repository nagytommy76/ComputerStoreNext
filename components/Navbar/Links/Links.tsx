import { auth } from '@NextAuth'
import Link from 'next/link'
import Button from '@mui/material/Button'

import ProfileMenu from '../Menu/ProfileMenu'

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
            <ProfileMenu
               userName={session.user?.name || userName || 'Profil'}
               profilePicture={session.user?.picture}
            />
            {isAdmin && isAdmin === true && (
               <Button color='inherit' size='large'>
                  Admin oldal
               </Button>
            )}
         </>
      )
}
