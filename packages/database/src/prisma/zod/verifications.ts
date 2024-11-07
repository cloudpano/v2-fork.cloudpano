import * as z from 'zod'

export const verificationsSchema = z.object({
	id: z.string(),
	identifier: z.string(),
	value: z.string(),
	expiresAt: z.date(),
})
