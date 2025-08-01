import Link from 'next/link'
import type { ReactNode } from 'react'
import React from 'react'

interface CustomProps {
	body: string
	children: ReactNode
	link: string
	className?: string
}

export default function WIISEItem({
	body,
	children,
	link,
	className = '',
}: CustomProps) {
	const childrenArray = React.Children.toArray(children)

	return (
		<Link
			className={`flex flex-col items-center text-center ${className}`}
			href={link}
			target='_blank'
			rel='noopener noreferrer'
		>
			<div className='w-full relative rounded-xl bg-card hover:scale-110 transition-transform duration-300'>
				{childrenArray[0]}
				<div className='flex flex-col m-2 p-2 h-auto items-center justify-center rounded-lg bg-white'>
					{childrenArray[1]}
					<p className='!text-black text-body'>{body}</p>
				</div>
			</div>
		</Link>
	)
}
