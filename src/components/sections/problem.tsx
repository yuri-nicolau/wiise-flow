import BusinessModelItem from '@/components/problem-item'

interface CustomProps {
	className?: string
}
export default function Problem({ className = '' }: CustomProps) {
	return (
		<div className={`${className}`}>
			<section className='pt-[120px] pb-[60px] md:py-[120px] flex flex-col gap-[60px] justify-center items-center'>
				<div className='max-w-2xl flex flex-col gap-5 text-center'>
					<div>
						<h2 className='text-title3'>THE PROBLEMS WE SOLVE</h2>
						<h3 className='text-title1'>
							Bridging the Gap Between Generic Claims and Field-Specific Value
						</h3>
					</div>
					<p className='text-body'>
						By moving from assumption-based decisions to simulation-driven
						intelligence, we empower technical teams and asset managers to
						select and design the most effective operational strategies with
						confidence.
					</p>
				</div>
				<div className='flex flex-wrap xl:flex-nowrap w-full justify-center gap-16'>
					<BusinessModelItem
						title='Decision making in defining acid stimulations'
						body='Brazil’s pre-salt carbonates are highly heterogeneous and complex. Service-provider cases show strong but selective gains—e.g., a Brazil pre-salt job reporting over 3,000 bpd uplift others achieving more than twice as much oil with 43% less acid. In one pre-salt well, the same volume/chemistry bullheaded improved skin only 27 to 23. Repeating with other technique, cut skin to 10 and doubled productivity (which highlights the need for a case-by-case analysis).'
						imageSrc='/problem01.jpg'
						className='max-w-[100%] md:min-w-[33%] md:max-w-[40%] xl:min-w-0'
					/>
					<BusinessModelItem
						title='Complex Completions Require Case-by-Case Design'
						body='Service providers report that multi-zone intelligent completions (e.g., the ANP‑recognized open‑hole, three‑zone PACI‑3) increase production and ultimate recovery by up to 20%. In Mero, they reduced costs by US$10–15 million per well. While service providers specific promisses benefits like “accelerated production” and “higher recovery”, there is no universal solution. Each project requires tailored design to deliver real value.'
						imageSrc='/problem03.jpg'
						className='max-w-[100%] md:min-w-[33%] md:max-w-[40%] xl:min-w-0'
					/>
					<BusinessModelItem
						title='Decision making in defining intelligent completions'
						body='Service providers promote Gravel Pack systems, such as Horizontal Open Hole wells,  with or without flow control valves, claiming +32% oil gains, fewer rig days, and over US$ 100M in savings. But results vary with reservoir complexity. In Brazil’s pre-salt, real value only emerged through customized designs and validation, not from generic, one-size-fits-all completions.'
						imageSrc='/problem02.jpg'
						className='max-w-[100%] md:min-w-[33%] md:max-w-[40%] xl:min-w-0'
					/>
				</div>
			</section>
		</div>
	)
}
