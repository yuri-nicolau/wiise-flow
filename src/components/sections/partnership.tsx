import PartnershipImage from '@assets/partnership'

interface CustomProps {
	className?: string
}
export default function Partnership({ className = '' }: CustomProps) {
	return (
		<div className={`${className}`}>
			<section className='pb-8 pt-10 flex justify-center items-center flex-order'>
				<PartnershipImage className='w-[130%] md:w-[50%] h-auto lg:ml-[-64px] lg:mr-[-32px]' />
				<div className='max-w-md flex flex-col gap-5 text-center'>
					<h2 className='text-title2'>Partnership with Petrobras</h2>
					<p className='text-body'>
						Our foundational methodology was proven through a strategic joint
						development with Petrobras, one of the world's leading deepwater
						operators.
					</p>
				</div>
			</section>
		</div>
	)
}
