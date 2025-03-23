import { useContext } from 'react'
import { CheckoutContext } from '../../Context/CheckoutContext'

import InputField from './InputField'
import { FormControlRow } from './Styles'
import type { IErrorFields } from './Hooks/useErrors'

export default function FormInputs({ errors }: { errors: IErrorFields }) {
   const {
      checkoutReducer: { userDetails },
   } = useContext(CheckoutContext)

   return (
      <>
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
      </>
   )
}
