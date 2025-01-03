'use server'
import { redirect } from 'next/navigation'

import { signOut } from '@NextAuth'

export default async function logoutAction() {
   try {
      await signOut()
      redirect('/')
   } catch (error) {
      console.log(error)
   }
}
