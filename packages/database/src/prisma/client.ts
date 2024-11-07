import { PrismaClient } from '@prisma/client'
import { z } from 'zod'

export const env = {
	NODE_ENV: z
		.enum(['development', 'production'])
		.optional()
		.default('development')
		.parse(process.env.NODE_ENV),
} as const

function createPrismaClient() {
	return new PrismaClient({
		errorFormat: 'pretty',
		log:
			env.NODE_ENV === 'development'
				? ['query', 'info', 'warn', 'error']
				: ['error'],
	})
}

const globalForPrisma = globalThis as unknown as {
	prisma: ReturnType<typeof createPrismaClient> | undefined
}

export const db = globalForPrisma.prisma ?? createPrismaClient()

if (env.NODE_ENV !== 'production') globalForPrisma.prisma = db
