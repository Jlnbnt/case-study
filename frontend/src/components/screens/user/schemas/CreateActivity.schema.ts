import { z } from 'zod'

export const CreateActivitySchema = z.object({
  category: z.string().min(1, { message: 'Champ requis.' }),
  city: z.string().min(1, { message: 'Champ requis.' }),
  price: z.preprocess(
    (value) =>
      typeof value === 'string' ? Number(value.replace(',', '.')) : value,
    z
      .number({ invalid_type_error: 'Doit être un nombre valide.' })
      .positive({ message: 'Doit être une valeur positive.' }),
  ),
  description: z.string().optional(),
  imageUrl: z.string().optional(),
})
export type CreateActivity = z.infer<typeof CreateActivitySchema>
