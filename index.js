#!/usr/bin/env node

const { execSync } = require('node:child_process')

const args = process.argv.slice(2)
const opts = { stdio: 'inherit' }
const url = 'https://github.com/haydenbleasel/next-forge'

if (args.length !== 2 || args[0] !== 'init' || !args[1].trim()) {
	process.exit(1)
}

try {
	const projectName = args[1]
	const isWindows = process.platform === 'win32'

	execSync(
		`pnpm create next-app@latest ${projectName} --example ${url}`,
		opts,
	)
	execSync(
		`cd ${projectName} && ${isWindows ? '.\\scripts\\setup.bat' : './scripts/setup.sh'}`,
		opts,
	)
} catch (_error) {
	process.exit(1)
}
