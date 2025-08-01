import Image from 'next/image'
import Button from '@components/button'

interface CustomProps {
	className?: string
}
export default function CallToAction({ className = '' }: CustomProps) {
	return (
		<div className={`${className}`}>
			<section className='py-28 flex justify-between items-center w-full'>
				<div className='max-w-xl flex flex-col gap-12 pr-10'>
					<h2 className='text-title1'>Contact our Experts!</h2>
				</div>
				<div className='flex flex-col gap-6'>
					<Button href='/'>Contact Us</Button>
					<div className='flex flex-row gap-1'>
						<Image
							src={'/placeholder7.png'}
							width={26}
							height={26}
							className='object-cover max-w-[400px]'
							alt='hero image'
						/>
						<p className='text-highlight'>
							Join the 10,000 users in our newsletter
						</p>
					</div>
				</div>
			</section>
		</div>
	)
}
