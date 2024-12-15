import { z } from 'zod'

export default function SignupFormSchema() {
   return z.object({
      email: z.string().email({ message: 'Kérlek adj meg egy valid e-mail címet' }).trim(),
      password: z
         .string()
         .min(6, { message: 'Legalább 6 karakter hosszúságú legyen! ' })
         // .regex(/[a-zA-Z]/, { message: 'Contain at least one letter.' })
         // .regex(/[0-9]/, { message: 'Contain at least one number.' })
         // .regex(/[^a-zA-Z0-9]/, {
         //    message: 'Contain at least one special character.',
         // })
         .trim(),
   })
}
