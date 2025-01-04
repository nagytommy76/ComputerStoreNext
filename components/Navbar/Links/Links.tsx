'use client'
import { useSession, SessionProvider } from 'next-auth/react'
import Link from 'next/link'
import Button from '@mui/material/Button'

import ProfileMenu from '../Menu/ProfileMenu'

function Links() {
   const { data: session } = useSession()

   console.log(session)

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
            <ProfileMenu userName={userName || session.user?.name || 'Profil'} />
            {isAdmin && isAdmin === true && (
               <Button color='inherit' size='large'>
                  Admin oldal
               </Button>
            )}
         </>
      )
}

export default function LinksWrapper() {
   return (
      <SessionProvider>
         <Links />
      </SessionProvider>
   )
}
