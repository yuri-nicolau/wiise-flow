import CaseStoryCard from '@/components/case-study-card'

interface CustomProps {
	className?: string
}
export default function CaseStudies({ className = '' }: CustomProps) {
	return (
		<div className={`${className}`}>
			<section
				id='case-studies'
				className='pt-16 md:pt-28 pb-12 flex flex-col gap-15 justify-center items-center'
			>
				<div className='max-w-lg flex flex-col gap-5 text-center'>
					<h2 className='text-title1'>Case Studies and Key Articles</h2>
					<p className='text-body'>
						How our solution can enhance production and make the most of smart
						completions
					</p>
				</div>
				<div className='grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] md:grid-cols-[repeat(auto-fit,minmax(390px,1fr))] w-full gap-8'>
					<div>
						<CaseStoryCard
							title='Cases-Backed Acidizing Optimization For Brazil’s Pre-Salt'
							body='Per-well design and placement can unlock more than 3,000 bpd, reduces skin, cut acid use by up to 40%, and even double production index vs. bullheading—turning heterogeneous carbonates into measurable gains when treatments are tuned case-by-case.'
							imageSrc='/case-study01.jpg'
							className='h-full'
							href='/case-studies/cases-backed-acidizing-optimization-for-brazils-pre-salt'
						/>
					</div>
					<div className='flex flex-col gap-8'>
						<CaseStoryCard
							title='Smart Completion Optimization in Offshore Production'
							body='Smart completion technologies have emerged as game-changers in the Eagle Ford Shale. Using the Buzios Field as an example, financial impacts of optimized intelligent completions estimate up to 70M USD per year.'
							imageSrc='/problem01.jpg'
							variant='horizontal'
							href='/case-studies/smart-completion-optimization-in-offshore-production'
						/>
						<CaseStoryCard
							title='Financial Impact of planning Valve Positioning'
							body='Strategic use of valve positioning in smart completions shows gains of up to 4 Million USD per well.'
							imageSrc='/financial-impact-of-planning-valve-positioning.jpg'
							variant='horizontal'
							href='/case-studies/financial-impact-of-planning-valve-positioning'
						/>
					</div>
				</div>
			</section>
		</div>
	)
}
