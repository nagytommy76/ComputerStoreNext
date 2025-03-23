import { SafeParseSuccess } from 'zod'

export function extractFormData(formData: FormData) {
   return {
      firstName: formData.get('firstName') as string,
      lastName: formData.get('lastName') as string,
      phone: formData.get('phone') as string,
      zipCode: formData.get('zipCode') as string,
      city: formData.get('city') as string,
      street: formData.get('street') as string,
      houseNumber: formData.get('houseNumber') as string,
      floor: formData.get('floor') as string,
      door: formData.get('door') as string,
   }
}

export function validatedFormData(
   validatedFields: SafeParseSuccess<{
      firstName: string
      lastName: string
      phone: string
      zipCode: string
      city: string
      street: string
      houseNumber: string
      floor: string
      door: string
   }>
) {
   return {
      firstName: validatedFields.data.firstName,
      lastName: validatedFields.data.lastName,
      phone: validatedFields.data.phone,
      address: {
         zipCode: validatedFields.data.zipCode,
         city: validatedFields.data.city,
         street: validatedFields.data.street,
         houseNumber: validatedFields.data.houseNumber,
         floor: validatedFields.data.floor,
         door: validatedFields.data.door,
      },
   }
}
