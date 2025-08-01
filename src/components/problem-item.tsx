import Image from 'next/image'

interface CustomProps {
	title: string
	body: string
	imageSrc: string
	className?: string
}

export default function ProblemItem({
	title,
	body,
	imageSrc,
	className = '',
}: CustomProps) {
	return (
		<div
			className={`flex w-full flex-col items-center text-center ${className}`}
		>
			<div className='w-full relative min-h-[200px] rounded-xl overflow-clip border-[1.5px] border-border'>
				<Image src={imageSrc} fill alt={title} className='object-cover' />
			</div>
			<div className='flex flex-col gap-2 mt-8 h-auto mx-auto'>
				<h4 className='text-title2'>{title}</h4>
				<p className='text-body'>{body}</p>
			</div>
		</div>
	)
}
