import Button from '@components/button'
import Database from '../assets/database'
import File from '../assets/file'

interface CustomProps {
	className?: string
}
export default function Deliverables({ className = '' }: CustomProps) {
	return (
		<div className={`${className}`}>
			<section
				id='deliverables'
				className='pb-16 pt-8 flex flex-order gap-8 justify-between items-center w-full'
			>
				<div className='flex flex-col text-center lg:text-left gap-12 lg:pr-10 lg:w-[50%] lg:max-w-4xl'>
					<div className='flex flex-col gap-4'>
						<h2 className='text-header'>Our Deliverables</h2>
						<p className='text-body lg:max-w-lx'>
							Our team will aid you by consulting services{' '}
							<strong>tailored to your reservoir</strong> and{' '}
							<strong>operational needs</strong>, providing simulation-based
							insights for intelligent completions (e.g., PACI‑3, ICVs), gravel
							pack systems, and acid stimulation.
							<br />
							<br />
							Each engagement includes a decision-focused report with all
							essential KPIs, sensitivity results, and guidance for confident
							execution.
							<br />
							<br />
							We adapt to the most common well designs and challenges faced in
							pre-salt and deepwater operations.
							<br />
							<br />
							Contact our team to explore how we can support your next decision.
						</p>
					</div>
					<div className='flex flex-row gap-5 justify-center lg:justify-start'>
						<Button href='/contact'>Contact Us</Button>
					</div>
				</div>
				<div className='lg:w-[45%] flex flex-col gap-8 items-center justify-center overflow-visible'>
					<div
						className={
							'bg-card flex pl-9 rounded-2xl w-full justify-between flex-row text-left'
						}
					>
						<div className='w-full flex flex-col gap-4 mr-8 md:mr-16 py-12'>
							<div className='flex flex-row items-center gap-4'>
								<Database className='min-w-8 md:w-8 h-auto' />
								<h3 className='text-title2'>
									Expert Guidance Throughout the Process
								</h3>
							</div>
							<p className='text-body'>
								During our consulting service, you’ll have direct access to our
								technical team, ensuring alignment, clarification of results,
								and support until your objectives are met.
							</p>
						</div>
					</div>
					<div
						className={
							'bg-card flex pl-9 rounded-2xl w-full justify-between flex-row text-left'
						}
					>
						<div className='flex flex-col gap-4 mr-8 md:mr-16 py-12'>
							<div className='flex flex-row items-center gap-3'>
								<File className='min-w-8 md:w-8 h-auto' />
								<h3 className='text-title2'>
									Decision-Focused Technical Reports
								</h3>
							</div>
							<p className='text-body'>
								Each report is tailored to your specific case, delivering
								detailed KPIs and performance parameters that support confident
								decision-making.
							</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}
