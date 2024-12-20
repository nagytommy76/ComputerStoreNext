import Link from 'next/link'
import { verifySession } from '@/utils/DataAccessLayer/DataAccessLayer'

import Button from '@mui/material/Button'

import ProfileMenu from '../Menu/ProfileMenu'

export default async function Links() {
   const session = await verifySession()
   const isAuth = session.isAuth
   const isAdmin = session.isAdmin
   const userName = session.userName || 'Profil'

   if (!isAuth)
      return (
         <Link href={'/login'}>
            <Button color='inherit' size='large'>
               Belépés
            </Button>
         </Link>
      )

   if (isAuth)
      return (
         <>
            <ProfileMenu userName={userName} />
            {isAdmin && isAdmin === true && (
               <Button color='inherit' size='large'>
                  Admin oldal
               </Button>
            )}
         </>
      )
}
