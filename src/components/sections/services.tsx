import Reports from '@assets/reports'
import ServicesItem from '@components/services-item'
import Innovative from '@assets/innovative'
import Insights from '@assets/insights'

interface CustomProps {
	className?: string
}

export default function Services({ className = '' }: CustomProps) {
	return (
		<div className={`${className}`}>
			<section className='pt-22 md:pt-32 pb-22 md:pb-48 flex flex-col gap-15 justify-center items-center'>
				<div className='max-w-3xl flex flex-col gap-5 text-center'>
					<div>
						<h2 className='text-title3'>OUR PROCESS</h2>
						<h3 className='text-title1'>How we Contribute</h3>
					</div>
					<p className='text-body'>
						We simulate real-world scenarios against your actual well design and
						reservoir data, quantify performance KPIs, and deliver
						field-specific insights. This transforms complexity and generic
						promises into clarity and supports confident, high-impact decisions
						grounded in sensitivity analysis and technical validation.
					</p>
				</div>
				<div className='flex flex-wrap xl:flex-nowrap w-full justify-center gap-16'>
					<ServicesItem
						title='Actionable Engineering Insights'
						body='We deliver simulation-backed insights that reveal how acid or completion parameters impact production, efficiency, and recovery, before you execute.'
						className='flex gap-0 max-w-[100%] md:min-w-[33%] md:max-w-[40%] xl:min-w-0'
					>
						<Insights className='max-w-27 sm:max-w-none sm:w-[30%] h-fit md:max-h-50 md:w-full' />
					</ServicesItem>
					<ServicesItem
						title='Decision-Ready KPIs'
						body='We quantify uplift, skin, acid saved, sweep, and payback, enabling your team to compare options with hard performance metrics.'
						className='flex gap-0 max-w-[100%] md:min-w-[33%] md:max-w-[40%] xl:min-w-0'
					>
						<Innovative className='max-w-27 sm:max-w-none sm:w-[30%] h-fit md:max-h-50 md:w-full' />
					</ServicesItem>
					<ServicesItem
						title='Expertise in Reservoir-Completion Coupling'
						body='We test completion and stimulation sensitivity to your reservoir’s heterogeneity, flow dynamics, and completion constraints, transforming variability into confident design.'
						className='flex gap-0 max-w-[100%] md:min-w-[33%] md:max-w-[40%] xl:min-w-0'
					>
						<Reports className='max-w-27 sm:max-w-none sm:w-[30%] h-fit md:max-h-50 md:w-full' />
					</ServicesItem>
				</div>
			</section>
		</div>
	)
}
