import Link from 'next/link'
import { verifySession } from '@/utils/DataAccessLayer/DataAccessLayer'

import NavMenu from '../Menu/NavMenu'
import Button from '@mui/material/Button'

export default async function Links() {
   const session = await verifySession()
   const isAuth = session.isAuth
   const isAdmin = session.isAdmin
   const userName = session.userName || 'Profil'

   if (!isAuth)
      return (
         <NavMenu>
            <Link href={'/login'}>
               <Button color='inherit' size='large'>
                  Belépés
               </Button>
            </Link>
         </NavMenu>
      )

   if (isAuth)
      return (
         <NavMenu>
            <>
               <Button color='inherit' size='large'>
                  {userName}
               </Button>
               {isAdmin && isAdmin === true && (
                  <Button color='inherit' size='large'>
                     Admin oldal
                  </Button>
               )}
            </>
         </NavMenu>
      )
}
