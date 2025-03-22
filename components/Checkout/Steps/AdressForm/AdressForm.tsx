'use client'
import { useContext, useRef } from 'react'
import CreateUserDetails from '@/serverActions/User/CreateUserDetails'
import useErrors from './Hooks/useErrors'

import { CheckoutContext } from '../../Context/CheckoutContext'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

import InputField from './InputField'
import { FormControlRow, AdressFromStyle } from './Styles'

export default function AdressForm() {
   const { errors, setErrorsHandler } = useErrors()
   const formRef = useRef<HTMLFormElement>(null)
   const {
      checkoutReducer: { userDetails },
      email,
      isUserDetailsSet,
      setIsUserDetailsSet,
   } = useContext(CheckoutContext)

   return (
      <AdressFromStyle
         ref={formRef}
         action={async (formData) => {
            formRef.current?.reset()
            if (!isUserDetailsSet) {
               const data = await CreateUserDetails(email, formData)
               if (data !== 200) {
                  setErrorsHandler(data.errors)
               } else setIsUserDetailsSet(true)
            } else {
               console.log('Módosítás')
            }
         }}
      >
         <Typography variant='h4'>Számlázási adatok</Typography>
         <FormControlRow>
            <InputField id='firstName' label='Vezetéknév' value={userDetails.firstName} />
            <InputField id='lastName' label='Keresztnev' value={userDetails.lastName} />
         </FormControlRow>
         <FormControlRow>
            <InputField
               id='phone'
               label='Telefonszám'
               value={userDetails.phone}
               errorHelperText={errors.phone}
            />
            <InputField
               id='zipCode'
               label='Irányítószám'
               value={userDetails.address.zipCode}
               errorHelperText={errors.zipCode}
            />
         </FormControlRow>
         <FormControlRow>
            <InputField id='city' label='Város' value={userDetails.address.city} />
            <InputField id='street' label='Utca' value={userDetails.address.street} />
         </FormControlRow>
         <FormControlRow>
            <InputField id='houseNumber' label='Házszám' value={userDetails.address.houseNumber} />
            <InputField id='floor' label='Emelet' value={userDetails.address.floor} required={false} />
            <InputField id='door' label='Ajtó' value={userDetails.address.door} required={false} />
         </FormControlRow>
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
   )
}
