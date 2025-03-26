'use client'
import { useContext, useRef } from 'react'
import CreateUserDetails from '@/serverActions/User/CreateUserDetails'
import EditUserDetails from '@/serverActions/User/EditUserDetails'
import useErrors from './Hooks/useErrors'
import useSnackbar from './Hooks/useSnackbar'

import { CheckoutContext } from '../../Context/CheckoutContext'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import SnackBar from '@/components/SnackBar/SnackBar'

import { AdressFromStyle } from './Styles'
import FormInputs from './FormInputs'

export default function AdressForm() {
   const { errors, setErrorsHandler } = useErrors()
   const { setSnackbar, snackbar, closeSnackbar } = useSnackbar()
   const formRef = useRef<HTMLFormElement>(null)
   const { email, isUserDetailsSet, authProvider, setIsUserDetailsSet } = useContext(CheckoutContext)

   return (
      <>
         <AdressFromStyle
            ref={formRef}
            action={async (formData) => {
               formRef.current?.reset()
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
            }}
         >
            <Typography variant='h4'>Számlázási adatok</Typography>
            <FormInputs errors={errors} />
            {isUserDetailsSet ? (
               <Button sx={{ marginTop: '1rem' }} type='submit' variant='contained'>
                  Módosítás
               </Button>
            ) : (
               <Button sx={{ marginTop: '1rem' }} type='submit' variant='contained'>
                  Bevitel
               </Button>
            )}
         </AdressFromStyle>
         <SnackBar
            snackbarOpen={snackbar.open}
            closeSnackbar={closeSnackbar}
            severity={snackbar.variant}
            message={snackbar.message}
         />
      </>
   )
}
