import { createMetadata } from '@repo/design-system/lib/metadata'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'

const title = 'Sign In'
const description = 'Or use your email or phone to login'
const SignIn = dynamic(() => import('@clerk/nextjs').then((mod) => mod.SignIn))

export const metadata: Metadata = createMetadata({ title, description })

const SignInPage = () => (
	<div className='flex flex-col w-full'>
		<div className='flex flex-col space-y-2'>
			<h1 className='font-semibold text-4xl tracking-tight text-[#496174]'>{title}</h1>
			<p className='text-muted-foreground text-sm'>{description}</p>
		</div>
		<SignIn
			appearance={{
				layout: {
					socialButtonsVariant: 'iconButton',
				},
				elements: {
					header: 'hidden',
					footer: '[&>*:nth-child(2)]:hidden bg-transparent',
					cardBox: 'shadow-none border-none w-full',
					rootBox: 'shadow-none w-full',
					socialButtons: 'flex flex-row border-none outline-none grid-rows-none',
					socialButtonsIconButton: 'p-0',
					card: 'px-1 rounded-none w-full',
					footerAction: 'mx-0 w-full text-left bg-transparent',
					formButtonPrimary: 'rounded-md bg-[#59C1C9] border-none p-3 hover:bg-[#61D6DF]',
				},
			}}
		/>
	</div>
)

export default SignInPage
