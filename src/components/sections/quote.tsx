import Image from 'next/image'

interface CustomProps {
	className?: string
}
export default function Quote({ className = '' }: CustomProps) {
	return (
		<div className={`${className}`}>
			<section className='px-6 md:px-12 lg:px-20 xl:px-28 py-12 sm:py-24 md:py-32 flex flex-col gap-28'>
				<div className='flex flex-order gap-[60px] justify-center items-center'>
					<div className='flex flex-row items-center gap-4 min-w-[200px]'>
						<Image
							src={'/rodrigo.jpg'}
							width={56}
							height={56}
							alt='hero image'
							className='shadow rounded-full'
						/>
						<div className='max-w-md flex flex-col text-left'>
							<h2 className='text-title2'>Rodrigo Dias</h2>
							<p className='text-body'>CEO - WIISE</p>
						</div>
					</div>
					<div className='max-w-[700px]'>
						<p className='text-title2'>
							« The development of our services covers several areas of
							expertise - computer simulations, optimization, artificial
							intelligence and software engineering. For WIISE, it is a unique
							opportunity to contribute to the creation of great impact,
							interdisciplinarity and high technological challenge. »
						</p>
					</div>
				</div>
			</section>
		</div>
	)
}
