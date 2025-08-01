import type { ReactNode } from 'react'

interface CustomProps {
	title: string
	body: string
	children?: ReactNode
	className?: string
}

export default function ServicesItem({
	title,
	body,
	children,
	className = '',
}: CustomProps) {
	return (
		<div
			className={`flex w-full flex-col items-center text-center ${className}`}
		>
			<div className='w-full relative rounded-xl overflow-clip'>
				<div className='w-full h-auto flex justify-center'>{children}</div>
			</div>
			<div className='flex flex-col gap-2 mt-8 h-auto mx-auto'>
				<h4 className='text-title2'>{title}</h4>
				<p className='text-body'>{body}</p>
			</div>
		</div>
	)
}
