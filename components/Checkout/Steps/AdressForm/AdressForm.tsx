'use client'
import CreateUserDetails from '@/serverActions/User/CreateUserDetails'

import { useContext } from 'react'
import { CheckoutContext } from '../../Context/CheckoutContext'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

import InputField from './InputField'
import { FormControlRow, AdressFromStyle } from './Styles'

export default function AdressForm() {
   const {
      checkoutReducer: { userDetails },
      email,
      isUserDetailsSet,
   } = useContext(CheckoutContext)
   const createUserDetailsWithEmail = CreateUserDetails.bind(null, email)

   return (
      <AdressFromStyle action={createUserDetailsWithEmail}>
         <Typography variant='h4'>Számlázási adatok</Typography>
         <FormControlRow>
            <InputField id='firstName' label='Vezetéknév' value={userDetails.firstName} />
            <InputField id='lastName' label='Keresztnev' value={userDetails.lastName} />
         </FormControlRow>
         <FormControlRow>
            <InputField id='phone' label='Telefonszám' value={userDetails.phone} />
            <InputField id='zipCode' label='Irányítószám' value={userDetails.address.zipCode} />
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
