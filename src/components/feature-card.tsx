import type { ReactNode } from 'react'

interface CustomProps {
	title: string
	body: string
	children?: ReactNode
	gap?: number
	className?: string
}

export default function FeatureCard({
	title,
	body,
	children,
	className = '',
}: CustomProps) {
	return (
		<div
			className={`bg-background border-[1.5px] relative border-background-secondary shadow-sm flex flex-col px-4 h-auto pt-16 pb-4 gap-8 rounded-2xl w-full text-center justify-between ${className}`}
		>
			<div className='flex flex-col gap-4 pb-20 px-4'>
				<h3 className='text-title1'>{title}</h3>
				<p className='text-body'>{body}</p>
			</div>
			<div className='bg-gray-100 rounded-xl relative overflow-visible w-full aspect-[10/7]'>
				<div className='w-full h-auto object-cover absolute bottom-0'>
					<div className='w-full h-auto'>{children}</div>
				</div>
			</div>
		</div>
	)
}
