import Image from 'next/image'
import Button from '@components/button'

interface CustomProps {
	className?: string
}

export default function Hero({ className = '' }: CustomProps) {
	return (
		<div className={`${className}`}>
			<section className='pb-16 md:pb-28 pt-32 md:pt-48 flex flex-order justify-between items-center w-full'>
				<div className='lg:max-w-2xl flex flex-col gap-12 lg:pr-10 z-10'>
					<div className='flex flex-col gap-4 text-center lg:text-left'>
						<h1 className='text-header'>
							Decision Intelligence for Complex Well Projects
						</h1>
						<p className='text-body'>
							WIISE offers reservoir-specific consulting that transforms your
							well and completion data into high-impact decisions. We simulate
							scenarios using your actual reservoir conditions, providing
							data-backed insights to reduce investment risk, increase
							production, and identify the most effective strategy for your
							operation.
						</p>
					</div>
					<div className='flex flex-row gap-5 justify-center lg:justify-start'>
						<Button href='/contact'>Contact Us</Button>
					</div>
				</div>
				<div className='relative w-screen h-100 lg:h-125 flex items-center justify-center overflow-visible !important'>
					<Image
						src='/hero.png'
						width={834}
						height={556}
						alt='hero image'
						className='absolute h-[150%] w-screen object-cover overflow-visible !important'
						priority
					/>
				</div>
			</section>
		</div>
	)
}
