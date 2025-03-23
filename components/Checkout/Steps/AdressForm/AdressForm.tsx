'use client'
import { useContext, useRef, useState } from 'react'
import CreateUserDetails from '@/serverActions/User/CreateUserDetails'
import useErrors from './Hooks/useErrors'

import { CheckoutContext } from '../../Context/CheckoutContext'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import SnackBar from '@/components/SnackBar/SnackBar'

import { AdressFromStyle } from './Styles'
import FormInputs from './FormInputs'

export default function AdressForm() {
   const { errors, setErrorsHandler } = useErrors()
   const [snackbarOpen, setSnackbarOpen] = useState(false)
   const formRef = useRef<HTMLFormElement>(null)
   const { email, isUserDetailsSet, setIsUserDetailsSet } = useContext(CheckoutContext)

   return (
      <>
         <AdressFromStyle
            ref={formRef}
            action={async (formData) => {
               formRef.current?.reset()
               if (!isUserDetailsSet) {
                  const data = await CreateUserDetails(email, formData)
                  if (data !== 200) {
                     setErrorsHandler(data.errors)
                  } else {
                     setIsUserDetailsSet(true)
                     setSnackbarOpen(true)
                  }
               } else {
                  console.log('Módosítás')
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
            snackbarOpen={snackbarOpen}
            setSnackbarOpen={setSnackbarOpen}
            message='Sikeres adat bevitel!'
         />
      </>
   )
}
