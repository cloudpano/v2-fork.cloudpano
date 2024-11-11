import * as z from "zod"

export const usersSchema = z.object({
  id: z.number().int(),
  publicId: z.string(),
  name: z.string(),
  email: z.string().nullish(),
  emailVerified: z.date().nullish(),
  phone: z.string().nullish(),
  phoneVerified: z.date().nullish(),
  image: z.string().nullish(),
  createdAt: z.date(),
  updatedAt: z.date(),
})
