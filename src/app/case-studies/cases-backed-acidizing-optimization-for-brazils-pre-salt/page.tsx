import Header from '@components/header'
import Footer from '@components/footer'
import Image from 'next/image'
import Link from 'next/link'

export default function CasesBackedAcidizingOptimizationForBrazilsPreSalt() {
	return (
		<div className=' flex flex-col justify-between items-center'>
			<Header />
			<section className='py-28 padding flex gap-8 lg:gap-0 flex-order flex-grow max-w-[1760px] justify-between items-center w-full'>
				<div className='lg:max-w-2xl flex flex-col gap-12 lg:pr-10 z-10'>
					<div className='flex flex-col gap-4 text-center lg:text-left'>
						<h1 className='text-header'>
							Matrix Acidizing Optimization in Offshore Carbonates
						</h1>
						<p className='text-body'>
							Cases-backed acidizing optimization for Brazil's pre-salt
						</p>
					</div>
				</div>
				<div className='relative w-screen h-125 flex items-center justify-center overflow-visible !important'>
					<Image
						src='/cases-backed-acidizing-optimization-for-brazils-pre-salt.png'
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
					Deepwater production in Brazil's pre-salt carbonates is constrained by
					extreme heterogeneity, permeability can vary expressively within a
					single interval, so conventional bullheading often stimulates only the
					highest-permeability streaks and leaves large sections untreated. In a
					documented pre-salt well, about 600 bbl of 15% HCl bullheaded reduced
					skin only by 11%, illustrating how coverage, not just chemistry,
					limits results in these reservoirs. <br />
					<br />
					Against this backdrop, recent field applications have adopted
					engineered, single-phase delayed/retarded acid systems coupled with
					high-rate matrix placement and on-the-fly mixing to extend wormhole
					penetration and streamline execution. In a Brazil pre-salt carbonate
					well, one such design delivered more then 3,000 bpd oil and reduce
					expressively the skin. <br />
					<br />
					In parallel, extended-contact stimulation services using single-phase
					retarded acid have shown that comparable or superior production can be
					achieved with significantly less raw acid while reducing emulsion risk
					and location footprint. A published case reported 2 times higher
					production with 40% less acid in a carbonate well. <br />
					<br />
					In the same pre-salt well cited above, repeating the treatment with
					the same acid and volume but switching from bullheading to
					coiled-tubing placement improved distribution along the entire
					perforated interval, reduced skin about 60%, and doubled the
					productivity index, a clear evidence that the stimulation method and
					design choices can dominate outcomes in heterogeneous carbonates.{' '}
					<br />
					<br />
					Taken together, these cases show a consistent pattern: when the matrix
					acidizing project are made for each well, the technique can deliver
					higher financial gains. The practical message for offshore carbonate
					developments is straightforward: acid programs are not
					one-size-fits-all; value comes from engineering the chemistry, the
					rate and the placement to the specific well and interval. <br />
					<br />
					In complex pre-salt settings, this approach translates into a more
					sustainable and economically robust operation: deeper reservoir
					contact with less chemical, fewer remedial interventions, and faster
					learning cycles across campaigns. By grounding treatment design in
					field evidence—spanning high-rate single-phase systems,
					fit-for-purpose placement, and documented case results—operators can
					move from generic recipes to case-by-case, parameter-sensitive
					decisions that maximize production efficiency and long-term value.{' '}
				</p>
			</div>
			<Footer />
		</div>
	)
}
