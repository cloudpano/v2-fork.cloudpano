import { parseError } from '@repo/observability/error'
import { clsx } from 'clsx'
import type { ClassValue } from 'clsx'
import { toast } from 'sonner'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]): string {
	return twMerge(clsx(inputs))
}

export function capitalize(str: string) {
	return str.charAt(0).toUpperCase() + str.slice(1)
}

export function handleError(error: unknown): void {
	const message = parseError(error)

	toast.error(message)
}
