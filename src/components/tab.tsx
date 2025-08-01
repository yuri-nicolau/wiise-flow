import Link from 'next/link'
import type { ReactNode } from 'react'

interface CustomProps {
	href: string
	children: ReactNode
	className?: string
}

export default function Tab({ children, ...props }: CustomProps) {
	return (
		<Link
			className='text-foreground text-lg font-normal leading-[1.6] md:text-base hover:text-card-secondary'
			{...props}
		>
			{children}
		</Link>
	)
}
