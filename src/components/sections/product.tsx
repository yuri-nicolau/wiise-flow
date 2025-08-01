import Image from 'next/image'
import Button from '@components/button'

interface CustomProps {
	className?: string
}
export default function Product({ className = '' }: CustomProps) {
	return (
		<div className={`${className}`}>
			<section className='py-28 flex flex-order justify-between items-center w-full'>
				<div className='lg:max-w-2xl flex flex-col gap-12 lg:pr-10 z-10'>
					<div className='flex flex-col gap-4 text-center lg:text-left'>
						<h2 className='text-header'>Optimize your Well Projects</h2>
						<p className='text-body'>
							Contact our Team to know more about our web consulting services
							and how we can help increase decision-making and productivity
							within your Well Projects.
						</p>
					</div>
					<div className='flex flex-row gap-5 justify-center lg:justify-start'>
						<Button href='/contact'>Contact Us</Button>
					</div>
				</div>
				<div className='relative w-screen h-125 flex items-center justify-center overflow-visible'>
					<Image
						src='/product.png'
						width={834}
						height={556}
						alt='hero image'
						className='absolute h-[100%] w-full overflow-visible !important object-cover'
						priority
					/>
				</div>
			</section>
		</div>
	)
}
