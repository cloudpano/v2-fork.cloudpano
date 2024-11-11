import { ThemeProvider as ThemeProviderRaw } from 'next-themes'
import type { ThemeProviderProps } from 'next-themes'

export function ThemeProvider(properties: ThemeProviderProps) {
	return (
		<ThemeProviderRaw
			attribute='class'
			defaultTheme='system'
			enableSystem
			disableTransitionOnChange
			{...properties}
		/>
	)
}
