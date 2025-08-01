import Header from '@components/header'
import Footer from '@components/footer'
import Image from 'next/image'
import Link from 'next/link'

export default function FinancialImpactOnWellDowntime() {
	return (
		<div className=' flex flex-col justify-between items-center'>
			<Header />
			<section className='py-28 padding flex gap-8 lg:gap-0 flex-order flex-grow max-w-[1760px] justify-between items-center w-full'>
				<div className='lg:max-w-2xl flex flex-col gap-12 lg:pr-10 z-10'>
					<div className='flex flex-col gap-4 text-center lg:text-left'>
						<h1 className='text-header'>
							Financial Impact of planning Valve Positioning
						</h1>
						<p className='text-body'>
							Strategic use of valve positioning in smart completions shows
							gains of up to 4 Million USD per well.
						</p>
					</div>
				</div>
				<div className='relative w-screen h-125 flex items-center justify-center overflow-visible !important'>
					<Image
						src='/problem03-hero.png'
						width={834}
						height={556}
						alt='hero image'
						className='absolute h-[130%] w-screen object-cover overflow-visible !important'
						priority
					/>
				</div>
			</section>
			<div className='w-full bg-card padding'>
				<p className='max-w-186 m-auto py-24 text-justify text-5'>
					In heterogeneous reservoirs like those found in the Brazilian pre-salt
					offshore fields, managing variable reservoir properties poses
					significant challenges for oil and gas production. The complex
					geological characteristics of these reservoirs often lead to uneven
					fluid distribution, affecting well productivity and recovery
					efficiency. Intelligent Well Completion (IWC) technology, which
					enables real-time downhole monitoring and remote valve control,
					presents a promising solution to optimize zonal flow. By dynamically
					adjusting production parameters, IWC can enhance reservoir management,
					leading to improved economic outcomes and extended field life. <br />
					<br />
					Studies such as{' '}
					<Link
						href={
							'https://ogst.ifpenergiesnouvelles.fr/articles/ogst/full_html/2020/01/ogst200156/ogst200156.html'
						}
						className='text-blue-600 hover:text-black'
					>
						Schaefer, 2020
					</Link>{' '}
					compare the performance of conventional completions with an optimized
					smart completion approach. The baseline conventional completion yields
					a Net Present Value (NPV) of approximately $65.41 million USD. In
					contrast, the implementation of optimized inflow control valve (ICV)
					strategies seeks to maximize NPV while maintaining operational
					efficiency. With a platform investment set at $175 million USD for a
					scaled five-spot configuration, the financial viability of intelligent
					completions becomes a critical factor in decision-making. <br />
					<br />
					Simulation results demonstrate the significant impact of optimized ICV
					control strategies on production efficiency and financial performance.
					Compared to the baseline NPV of $65.41 million USD, the
					best-performing ICV strategy achieves an NPV of $69.63 million USD,
					reflecting a 6.45% improvement for a single producing well. This
					increase highlights the potential for substantial economic gains when
					smart completions are carefully planned and executed. Moreover, under
					more favorable economic conditions and with multiple wells in
					operation, the methodology could lead to multi-million-dollar
					enhancements in overall project profitability. <br />
					<br />
					One of the key advantages of the proposed methodology is its ability
					to reduce water production while maximizing hydrocarbon recovery. By
					implementing dynamic valve adjustments, operators can mitigate the
					negative impact of early water breakthrough, which is a common issue
					in highly heterogeneous reservoirs. This proactive approach extends
					the productive lifespan of wells and reduces the need for costly water
					handling and disposal operations, further improving economic
					feasibility. <br />
					<br />
					Another critical aspect of the study is the role of advanced reservoir
					simulation software in optimizing valve placement and control
					strategies. Traditional completion designs often rely on static models
					that fail to account for real-time reservoir changes. However, by
					integrating intelligent software with machine learning algorithms such
					as PSO, engineers can develop adaptive completion strategies that
					respond dynamically to reservoir conditions. This capability ensures
					that production remains optimized even in the face of unpredictable
					geological variations. <br />
					<br />
					As energy companies seek to maximize recovery factors while minimizing
					operational costs, intelligent completions powered by advanced
					software will become an increasingly vital component of modern
					reservoir management strategies. The ability to accurately estimate
					optimal valve positioning not only improves short-term financial
					returns but also contributes to long-term sustainability by enhancing
					resource utilization and reducing environmental impact. <br />
					<br />
					By leveraging real-time data analysis, machine learning, and advanced
					numerical models, operators can achieve significant performance
					improvements over conventional completion methods. As the oil and gas
					industry continues to embrace digital transformation, the adoption of
					such advanced technologies will play a crucial role in maintaining
					competitiveness and maximizing asset value in complex reservoir
					settings.
				</p>
			</div>

			<Footer />
		</div>
	)
}
