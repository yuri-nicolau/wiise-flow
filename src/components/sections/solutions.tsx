import Image from 'next/image'

interface CustomProps {
	className?: string
}
export default function Solutions({ className = '' }: CustomProps) {
	return (
		<div className={`${className}`}>
			<section
				id='solution'
				className='py-10 md:py-28 flex flex-order gap-12 md:gap-24 lg:gap-0 justify-center items-center'
			>
				<div className='w-screen relative h-60 lg:h-75 lg:-left-16 lg:mx-[-32px] flex justify-center items-center overflow-visible !important'>
					<Image
						src={'/solutions.png'}
						fill
						alt='hero image'
						className='absolute w-100% object-cover overflow-visible !important'
					/>
				</div>
				<div className='flex flex-col gap-12 lg:pl-24 w-full'>
					<div className='flex flex-col gap-4 text-center items-center lg:items-start lg:text-left'>
						<h2 className='text-title1 lg:max-w-md'>
							Is Your Asset Strategy Leaving Value on the Table?
						</h2>
						<p className='text-body lg:max-w-lg'>
							Our experts can help you frame the problem and identify how a
							targeted simulation study could quantify the upside for your
							specific project.
						</p>
					</div>
					<div className='flex flex-col gap-6'>
						<div className='flex flex-row gap-4 items-center'>
							<Image
								src={'/solution01.png'}
								width={50}
								height={50}
								alt='hero image'
								className='object-cover'
							/>
							<p className='text-body'>
								Grounded in your field model, our parameter‑sensitivity
								acidizing simulations convert broad service‑provider claims into
								per‑well, decision‑ready guidance that enhances incremental oil
								and minimizes acid volumes.
							</p>
						</div>
						<div className='flex flex-row gap-4 items-center'>
							<Image
								src={'/solution02.png'}
								width={50}
								height={50}
								alt='hero image'
								className='object-cover'
							/>
							<p className='text-body'>
								Simulations applied to PACI completions enable precise
								evaluation of zonal control strategies, maximizing productivity
								and reducing uncertainty in completion design.
							</p>
						</div>
						<div className='flex flex-row gap-4 items-center'>
							<Image
								src={'/solution03.png'}
								width={50}
								height={50}
								alt='hero image'
								className='object-cover'
							/>
							<p className='text-body'>
								Simulating horizontal open hole gravel pack performance enables
								optimized designs that boost productivity, reduce failure risk,
								and support more confident completion decisions.
							</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}
