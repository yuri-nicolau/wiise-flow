import FeatureCard from '@components/feature-card'
import Image from 'next/image'

interface CustomProps {
	className?: string
}

export default function Features({ className = '' }: CustomProps) {
	return (
		<div className={`${className}`}>
			<div className='relative flex-grow max-w-[1760px] w-full'>
				<section
					id='features'
					className='py-16 md:py-28 flex flex-col gap-16 md:gap-[100px] justify-center items-center'
				>
					<div className='max-w-lg flex flex-col gap-5 text-center'>
						<h2 className='text-title1'>
							How Our Services Reaches More Accurate Solutions
						</h2>
						<p className='text-body'>Key Features and Technologies.</p>
					</div>
					<div className='grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] md:grid-cols-[repeat(auto-fit,minmax(420px,1fr))] w-full gap-8 align-items: stretch'>
						<FeatureCard
							title='Acid Design Tailored to Reservoir and Completion'
							body='We simulate the sensitivity of acid type, concentration, injection rate, and bbl/ft under your specific reservoir, completion and flow conditions. Using your actual completion design, we identify the most effective parameters to maximize wormhole reach, minimize total acid volume, and improve oil recovery.'
							className='h-full'
						>
							<Image
								src={'/feature01.png'}
								alt={'Feature 1'}
								width={689}
								height={546}
							/>
						</FeatureCard>
						<FeatureCard
							title='KPI-Based Scenario Ranking for Confident Execution'
							body='We compare acidizing scenarios using real field constraints and deliver decision-ready KPIs—including incremental oil, post-job skin, water cut change, acid saved, and payback—so your team can confidently select an enhanced stimulation plan and turn generic service-provider promises into field-specific results.'
							className='h-full'
						>
							<Image
								src={'/feature02.png'}
								alt={'Feature 2'}
								width={689}
								height={546}
							/>
						</FeatureCard>
						<FeatureCard
							title='KPI-Driven and Vendor-Neutral Optimization'
							body='Our models produce actionable KPIs—including incremental oil and NPV—to objectively compare intelligent completion strategies. By testing different service provider technologies against your actual well conditions, we ensure data-driven design decisions instead of relying on generic performance claims.'
							className='h-full'
						>
							<Image
								src={'/feature03.png'}
								alt={'Feature 3'}
								width={689}
								height={546}
							/>
						</FeatureCard>
						<FeatureCard
							title='Sensitivity Simulations for Technical Desicion-Making'
							body='We run targeted simulations under your reservoir’s specific conditions—testing ICV configuration, placement strategy, and zonal control logic—to evaluate performance across real-world flow contrasts and heterogeneity. This enables teams to identify the most effective completion design and reduce operational uncertainty.'
							className='h-full'
						>
							<Image
								src={'/feature04.png'}
								alt={'Feature 4'}
								width={689}
								height={546}
							/>
						</FeatureCard>
						<FeatureCard
							title='Simulation-Based Sensitivity & Design'
							body='We simulate full-system sensitivities—across well, reservoir, and completion parameters—using your field conditions. This allows us to test OHGP strategies (with or without flow control) under realistic constraints, identifying the most effective design and avoiding guesswork.'
							className='h-full'
						>
							<Image
								src={'/feature05.png'}
								alt={'Feature 5'}
								width={689}
								height={546}
							/>
						</FeatureCard>
						<FeatureCard
							title='Data-Backed Decisions With Performance KPIs'
							body='We deliver field-optimized completion recommendations supported by key technical–economic indicators: initial & sustained oil rate, water cut, NPV, and injectivity profiles. Decisions are no longer based on generic promises—but on measurable impact.'
							className='h-full'
						>
							<Image
								src={'/feature06.png'}
								alt={'Feature 6'}
								width={689}
								height={546}
							/>
						</FeatureCard>
					</div>
				</section>
			</div>
		</div>
	)
}
