'use client'
import { useContext } from 'react'
import useErrors from './Hooks/useErrors'
import useSnackbar from './Hooks/useSnackbar'
import useFormAction from './Hooks/useFormAction'

import { CheckoutContext } from '../../Context/CheckoutContext'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import SnackBar from '@/components/SnackBar/SnackBar'

import { AdressFromStyle, FormContainer } from './Styles'
import FormInputs from './FormInputs'

export default function AdressForm() {
   const { errors } = useErrors()
   const { setSnackbar, snackbar, closeSnackbar } = useSnackbar()
   const { isUserDetailsSet } = useContext(CheckoutContext)
   const formAction = useFormAction()

   return (
      <>
         <FormContainer>
            <AdressFromStyle action={(formData) => formAction(formData, setSnackbar)}>
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
         </FormContainer>
         <SnackBar
            snackbarOpen={snackbar.open}
            closeSnackbar={closeSnackbar}
            severity={snackbar.variant}
            message={snackbar.message}
         />
      </>
   )
}
