'use client'

import { ModeToggle } from '@repo/design-system/components/mode-toggle'
import Link from 'next/link'
import type { ReactNode } from 'react'
import {Button} from "@repo/design-system/components/ui/button";
import CloudPanoLogo from "@repo/design-system/components/branding/cloudpano-logo";
import {Card} from "@repo/design-system/components/ui/card";
import {usePathname} from "next/navigation";
import authBgDesktopSrc from "@repo/design-system/components/branding/auth-background-desktop.svg"



const AuthLayout = ({ children }: { children: ReactNode }) => {
	const pathname = usePathname()
	const isLoginPage = pathname === '/sign-in'

	return (
		<div
			className="h-dvh w-dvw relative overflow-auto bg-no-repeat
    bg-[width:100%_auto] lg:bg-[length:100%_auto]  md:bg-center-top"
			style={{
				backgroundImage: `url(${authBgDesktopSrc.src})`,
			}}
		>
				<nav className="flex justify-between items-center py-8 mx-5 lg:mx-14 overflow-hidden">
					<CloudPanoLogo className='text-white'/>
					<Button asChild variant='outline' className='text-white text-lg font-normal p-7'>
						<Link href={isLoginPage ? '/sign-up' : '/sign-in'}>
							{isLoginPage ? 'Sign Up' : 'Login'}
						</Link>
					</Button>
					<div className='absolute bottom-4 right-4'>
						<ModeToggle />
					</div>
				</nav>

				<div className='md:container relative  flex-col items-center justify-center lg:max-w-none px-4 lg:px-0'>
					<div className='lg:p-8 lg:pt-0 flex flex-col items-center justify-center'>
						<Card className='w-full lg:w-1/3 p-5 lg:p-12 flex justify-center items-center'>
							{children}
						</Card>
					</div>
				</div>
			</div>

		)
	}
export default AuthLayout
