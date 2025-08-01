import Header from '@components/header'
import Footer from '@components/footer'
import Hero from '@sections/hero'
import Partnership from '@sections/partnership'
import Solutions from '@sections/solutions'
import Product from '@sections/product'
import Features from '@sections/features'
import CaseStudies from '@sections/case-studies'
import Quote from '@sections/quote'
import ContactFormSection from '@sections/contact-form'
import Problem from '@sections/problem'
import Services from '@sections/services'
import Deliverables from '@sections/deliverables'
import FadeInSection from '@/components/FadeInSection'
import WIISEs from '@sections/wiises'

export default function HomePage() {
	return (
		<div className='min-h-screen overflow-x-hidden flex flex-col justify-center'>
			<Header />
			<div className='absolute top-0 w-full h-screen bg-gradient-to-b from-background-secondary to-background z-[-1]' />
			<FadeInSection>
				<Hero className='relative flex-grow max-w-[1760px] w-full padding' />
			</FadeInSection>
			<FadeInSection>
				<Partnership className='relative flex-grow max-w-[1760px] w-full padding' />
			</FadeInSection>
			<FadeInSection>
				<Problem className='relative flex-grow max-w-[1760px] w-full padding' />
			</FadeInSection>
			<FadeInSection>
				<Solutions className='relative flex-grow max-w-[1760px] w-full padding' />
			</FadeInSection>
			<FadeInSection>
				<Product className='relative flex-grow max-w-[1760px] w-full padding' />
			</FadeInSection>
			<FadeInSection threshold={0.1}>
				<Features className='bg-background-secondary w-full flex flex-col items-center padding' />
			</FadeInSection>
			<FadeInSection>
				<CaseStudies className='relative flex-grow max-w-[1760px] w-full padding' />
			</FadeInSection>
			<FadeInSection>
				<Services className='relative flex-grow max-w-[1760px] w-full padding' />
			</FadeInSection>
			<FadeInSection>
				<Deliverables className='relative flex-grow max-w-[1760px] w-full padding' />
			</FadeInSection>
			<FadeInSection>
				<Quote className='relative flex-grow max-w-[1760px] w-full padding' />
			</FadeInSection>
			<FadeInSection>
				<WIISEs className='relative flex-grow max-w-[1760px] w-full padding' />
			</FadeInSection>
			<ContactFormSection />
			<Footer />
		</div>
	)
}
