import { SetStateAction, useContext } from 'react'
import { CheckoutContext } from '../../../Context/CheckoutContext'

import CreateUserDetails from '@/serverActions/User/CreateUserDetails'
import EditUserDetails from '@/serverActions/User/EditUserDetails'
import useErrors from './useErrors'

export default function useFormAction() {
   const { setErrorsHandler } = useErrors()
   const { email, isUserDetailsSet, authProvider, setIsUserDetailsSet } = useContext(CheckoutContext)

   async function formAction(
      formData: FormData,
      setSnackbar: (
         value: SetStateAction<{
            open: boolean
            message: string
            variant: 'error' | 'info' | 'success' | 'warning'
         }>
      ) => void
   ) {
      if (!isUserDetailsSet) {
         const data = await CreateUserDetails(email, authProvider, formData)
         if (data.status === 400) {
            setErrorsHandler(data.errors)
         } else {
            setIsUserDetailsSet(true)
            setSnackbar({
               open: true,
               message: 'Sikeres adat bevitel!',
               variant: 'success',
            })
         }
      } else {
         const data = await EditUserDetails(email, authProvider, formData)
         if (data.status === 400) {
            setErrorsHandler(data.errors)
         } else {
            setSnackbar({
               open: true,
               message: 'Sikeres adat módosítás!',
               variant: 'info',
            })
         }
      }
   }

   return formAction
}
