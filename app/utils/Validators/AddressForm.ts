import { SafeParseSuccess, z } from 'zod'

export default function AddressForm() {
   return z.object({
      firstName: z.string().min(1),
      lastName: z.string().min(1),
      phone: z
         .string()
         .regex(/^\+36(1|20|30|70)\d{7}$/, 'Helytelen telefonszám fromátum: +36(1|20|30|70)XXXXXXX'),
      zipCode: z.string().regex(/^(1[1-9]\d{2}|[2-9]\d{3})$/, 'Helytelen irányítószám! Formátum: 1111-9999'),
      city: z.string().min(1),
      street: z.string().min(1),
      houseNumber: z.string().min(1),
      floor: z.string(),
      door: z.string(),
   })
}

// export type ZodAddressFormType = z.infer<ReturnType<typeof AddressForm>>
export type ZodAddressFormType = SafeParseSuccess<{
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
