import * as z from 'zod'

export const accountsSchema = z.object({
	id: z.string(),
	accountId: z.string(),
	providerId: z.string(),
	userId: z.string(),
	accessToken: z.string().nullish(),
	refreshToken: z.string().nullish(),
	idToken: z.string().nullish(),
	expiresAt: z.date().nullish(),
	password: z.string().nullish(),
})
