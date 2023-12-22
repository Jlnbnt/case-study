import { z } from 'zod'

export const RegisterSchema = z.object({
  firstName: z.string().min(1, { message: 'Champ requis.' }),
  lastName: z.string().min(1, { message: 'Champ requis.' }),
  email: z
    .string()
    .min(1, { message: 'Champ requis.' })
    .email('Email invalide.'),
  password: z.string().min(1, { message: 'Champ requis.' }),
})
export type Register = z.infer<typeof RegisterSchema>
