import Header from '@components/header'
import Footer from '@components/footer'
import Image from 'next/image'
import Link from 'next/link'

export default function AvoidingCatastrophesWithBetterModels() {
	return (
		<div className=' flex flex-col justify-between items-center'>
			<Header />
			<section className='py-28 padding flex gap-8 lg:gap-0 flex-order flex-grow max-w-[1760px] justify-between items-center w-full'>
				<div className='lg:max-w-2xl flex flex-col gap-12 lg:pr-10 z-10'>
					<div className='flex flex-col gap-4 text-center lg:text-left'>
						<h1 className='text-header'>
							The Disadvantages of not Controlling Production
						</h1>
						<p className='text-body'>
							Cost savings from reduced well interventions, productivity
							improvement and accelerated production
						</p>
					</div>
				</div>
				<div className='relative w-screen h-125 flex items-center justify-center overflow-visible !important'>
					<Image
						src='/problem02-hero.png'
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
					Biosteering involves the real-time analysis of drilling cuttings to
					monitor the wellbore's position relative to geological formations. By
					identifying microfossils and their assemblages, geoscientists can
					determine the stratigraphic depth and lateral position of the drill
					bit. This information allows for immediate adjustments to the drilling
					trajectory, ensuring the well remains within the desired reservoir
					zone. <br />
					<br />
					In horizontal and directional drilling, especially within thin or
					complex reservoirs, maintaining the wellbore within the target
					formation is challenging. Biosteering provides a cost-effective and
					efficient solution by offering high-resolution stratigraphic data that
					can be integrated with other real-time measurements, such as Logging
					While Drilling (LWD) data. This integration facilitates informed
					decision-making, optimizing well placement and enhancing reservoir
					contact. <br />
					<br />
					By accurately tracking the wellbore's position, biosteering maximizes
					exposure to productive reservoir zones, potentially increasing
					hydrocarbon recovery. Real-time monitoring allows for immediate
					corrective actions, minimizing the risk of drilling through
					non-productive zones and reducing formation damage. Compared to
					deploying multiple LWD tools, biosteering offers a more economical
					alternative for stratigraphic monitoring. <br />
					<br />
					Biosteering has a notably positive impact by enabling real‑time
					adjustments of the drilling trajectory, which significantly enhances
					reservoir contact and maximizes hydrocarbon recovery. This technology
					leverages live geological data and downhole measurements to steer the
					drill bit into the most productive zones, reducing drilling
					uncertainty and avoiding non‐productive intervals. As a result,
					biosteering not only improves drilling efficiency and lowers
					operational risks but also contributes to substantial economic gains
					by optimizing well placement, shortening drilling time, and ultimately
					boosting production rates and overall project profitability{' '}
					<Link
						href={
							'https://www.researchgate.net/publication/348188528_A_Review_of_Exploration_Development_and_Production_Cost_Offshore_Newfoundland'
						}
						className='text-blue-600 hover:text-black'
					>
						(F. Alshuhail et al, 2023)
					</Link>
					. <br />
					<br />
					Integrating biostratigraphic analysis into real-time drilling
					operations through bio-steering is a valuable technique for precise
					well placement, especially in complex reservoir environments. Its
					ability to provide immediate stratigraphic information enhances
					operational efficiency, reduces risks, and contributes to the overall
					success of drilling projects. Most of these solutions rely on embarked
					specialists to conduct real analyses, and tools such as the one
					provided by WIKKI Vision allow to enhance response time and make the
					best decision faster, reducing risk and aiding specialists with a fast
					response AI to aid in identification and classification of structures.
				</p>
			</div>

			<Footer />
		</div>
	)
}
