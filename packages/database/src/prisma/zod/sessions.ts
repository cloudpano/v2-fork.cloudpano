import * as z from 'zod'

export const sessionsSchema = z.object({
	id: z.string(),
	userId: z.string(),
	expiresAt: z.date(),
	ipAddress: z.string().nullish(),
	userAgent: z.string().nullish(),
})
