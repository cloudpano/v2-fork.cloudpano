import { withContentCollections } from '@content-collections/next'
import { env } from '@repo/env'
import { config, withAnalyzer, withSentry } from '@repo/next-config'
import type { NextConfig } from 'next'

let nextConfig: NextConfig = {
	...config,
	webpack: (config, { isServer }) => {
		if (isServer) config.ignoreWarnings = [{ module: /opentelemetry/ }]

		config.module = {
			...config.module,
			exprContextCritical: false,
			unknownContextCritical: false,
		}

		return config
	},
}

if (process.env.NODE_ENV === 'production') {
	nextConfig.redirects = async () => [
		{
			source: '/legal',
			destination: '/legal/privacy',
			statusCode: 301,
		},
	]
}

if (env.VERCEL) nextConfig = withSentry(nextConfig)

if (env.ANALYZE === 'true') nextConfig = withAnalyzer(nextConfig)

export default withContentCollections(nextConfig)
