import '@repo/design-system/styles/globals.css'
import { fonts } from '@repo/design-system/lib/fonts'
import { DesignSystemProvider } from '@repo/design-system/providers'
import type { ReactNode } from 'react'
import { Footer } from './components/footer'
import { Header } from './components/header'

type RootLayoutProperties = {
	readonly children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProperties) {
	return (
		<html lang='en' className={fonts} suppressHydrationWarning>
			<body>
				<DesignSystemProvider>
					<Header />
					{children}
					<Footer />
				</DesignSystemProvider>
			</body>
		</html>
	)
}
