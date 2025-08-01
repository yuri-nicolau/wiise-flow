import InsightLogo from '../assets/insight-logo'
import RockLabLogo from '../assets/rocklab-logo'
import WIISEDataLogo from '../assets/wiise-data-logo'
import WIISEFlowLogo from '../assets/wiise-flow-logo'
import WIISERockLogo from '../assets/wiise-rock-logo'
import WIISEVisionLogo from '../assets/wiise-vision-logo'
import WisdomLogo from '../assets/wisdom-logo'
import WIISEItem from '@components/wiise-item'
import ZonalFlowLogo from '../assets/zonalflow-logo'

interface CustomProps {
	className?: string
}
export default function WIISEs({ className = '' }: CustomProps) {
	return (
		<div className={`${className}`}>
			<section className='pt-[120px] pb-[60px] md:py-[120px] flex flex-col gap-[60px] justify-center items-center'>
				<div className='max-w-2xl flex flex-col gap-5 text-center'>
					<div>
						<h2 className='text-title3'>THE PROBLEMS WE SOLVE</h2>
						<h3 className='text-title1'>Which WIISE do you belong to?</h3>
					</div>
					<p className='text-body'>Discover our solutions</p>
				</div>
				<div className='flex flex-wrap gap-6 xl:flex-nowrap justify-center'>
					<WIISEItem body='Well Integrity' link='https://wiisedata.com'>
						<WIISEDataLogo className='mx-10 mt-8 mb-6' />
					</WIISEItem>
					<WIISEItem body='Geosciences' link='https://wiisevision.com'>
						<WIISEVisionLogo className='mx-10 mt-8 mb-6' />
					</WIISEItem>
					<WIISEItem body='Well Productivity' link='https://wiiseflow.com'>
						<WIISEFlowLogo className='mx-10 mt-8 mb-6' />
					</WIISEItem>
					<WIISEItem body='Digital Rocks' link='https://wiiserock.com'>
						<WIISERockLogo className='mx-10 mt-8 mb-6' />
					</WIISEItem>
				</div>
			</section>
		</div>
	)
}
