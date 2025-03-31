import { useState } from 'react'

export interface IErrorFields {
   firstName?: undefined | string[]
   lastName?: undefined | string[]
   phone?: undefined | string[]
   zipCode?: undefined | string[]
   city?: undefined | string[]
   street?: undefined | string[]
   houseNumber?: undefined | string[]
   floor?: undefined | string[]
   door?: undefined | string[]
}

export default function useErrors() {
   const [errors, setErrors] = useState<IErrorFields>({
      firstName: undefined,
      lastName: undefined,
      phone: undefined,
      zipCode: undefined,
      city: undefined,
      street: undefined,
      houseNumber: undefined,
   })

   function setErrorsHandler(errors: IErrorFields | null) {
      if (!errors) return
      setErrors({
         firstName: errors.firstName,
         lastName: errors.lastName,
         phone: errors.phone,
         zipCode: errors.zipCode,
         city: errors.city,
         street: errors.street,
         houseNumber: errors.houseNumber,
      })
   }

   return { errors, setErrorsHandler }
}
