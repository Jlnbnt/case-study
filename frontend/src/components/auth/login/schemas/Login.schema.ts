import { z } from 'zod'

export const LoginSchema = z.object({
  email: z
    .string()
    .min(1, { message: 'Champ requis.' })
    .email('Email invalide.'),
  password: z.string().min(1, { message: 'Champ requis.' }),
})
export type Login = z.infer<typeof LoginSchema>
