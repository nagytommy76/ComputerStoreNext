'use server'
import { signOut } from '@NextAuth'
import { redirect } from 'next/navigation'

export default async function logoutAction() {
   try {
      await signOut({ redirectTo: '/' })
   } catch (error) {
      console.log(error)
   } finally {
      redirect('/')
   }
}
