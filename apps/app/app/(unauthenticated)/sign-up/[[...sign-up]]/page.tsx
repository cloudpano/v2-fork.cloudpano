import { createMetadata } from '@repo/design-system/lib/metadata'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import Link from "next/link";
import { env } from '@repo/env'
const title = 'Become a Member'
const description = 'Make tours for free in five minutes. No credit card required.'
const SignUp = dynamic(() => import('@clerk/nextjs').then((mod) => mod.SignUp))

export const metadata: Metadata = createMetadata({ title, description })

const SignUpPage = () => (
	<div className='flex flex-col w-full'>
		<div className='flex flex-col space-y-2'>
			<h1 className='font-semibold text-4xl tracking-tight text-[#496174]'>{title}</h1>
			<p className='text-muted-foreground text-sm'>{description}</p>
		</div>
		<SignUp
			appearance={{
				layout: {
					socialButtonsVariant: 'iconButton',
					socialButtonsPlacement: 'bottom',
				},
				elements: {
					header: 'hidden',
					footer: '[&>*:nth-child(2)]:hidden bg-transparent',
					cardBox: 'shadow-none border-none rounded-none w-full',
					rootBox: 'shadow-none w-full',
					socialButtonsIconButton: 'border-none outline-none',
					card: 'px-1 rounded-none w-full',
					formButtonPrimary: 'rounded-md bg-[#59C1C9] border-none p-3 hover:bg-[#61D6DF]',
					footerAction: 'mx-0 w-full text-left bg-transparent',
				},
			}}
		/>
		<p className='px-8 mt-2 text-center text-muted-foreground text-sm'>
			By clicking continue, you agree to our{' '}
			<Link
				href={new URL(
					'/legal/terms',
					env.NEXT_PUBLIC_WEB_URL,
				).toString()}
				className='underline underline-offset-4 hover:text-primary'
			>
				Terms of Service
			</Link>{' '}
			and{' '}
			<Link
				href={new URL(
					'/legal/privacy',
					env.NEXT_PUBLIC_WEB_URL,
				).toString()}
				className='underline underline-offset-4 hover:text-primary'
			>
				Privacy Policy
			</Link>
			.
		</p>
	</div>
)

export default SignUpPage
