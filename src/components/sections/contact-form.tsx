'use client'

import type React from 'react'
import Image from 'next/image'

export default function ContactFormSection() {
	return (
		<section className='w-full bg-card relative'>
			<div className='container mx-auto flex flex-col lg:flex-row items-center justify-between py-16 lg:py-30 px-10 lg:px-20 relative gap-16 lg:gap-0'>
				{/* Esquerda - Ilustração */}
				<div className='px-0 xl:px-28 w-full'>
					<div className='flex-1 flex justify-center lg:items-left lg:justify-start max-w-[1536px] mx-auto w-full'>
						<div className='w-120 lg:h-24s rounded-lg flex items-center'>
							<h2 className='text-title1 text-center md:text-left'>
								Contact us for more!
							</h2>
						</div>
					</div>
				</div>

				{/* Direita - Formulário */}
				<div className='lg:absolute lg:right-20 lg:bottom-[-4rem] bg-white shadow-lg rounded-xl p-8 lg:p-10 max-w-lg w-full lg:w-[400px] lg:translate-y-[20%] h-fit'>
					<h3 className='text-title4'>Contact us</h3>
					<p className='text-body mb-8'>Find out more about WIISE Flow</p>
					<div className='flex flex-col gap-6'>
						{/* Contact */}
						<a
							href='mailto:contact@wiiseflow.com'
							className='flex justify-start items-center gap-3'
						>
							<img
								src='/email.png'
								alt='Email Icon'
								className='w-8 h-auto cursor-pointer'
							/>
							<div className='text-left'>
								<h4 className='text-lg font-semibold'>Contact</h4>
								<p className='text-sm'>contact@wiiseflow.com</p>
							</div>
						</a>

						{/* Press / Media / Partnership */}
						<a
							href='mailto:relations@wiiseflow.com'
							className='flex justify-start items-center gap-3'
						>
							<img
								src='/email.png'
								alt='Email Icon'
								className='w-8 h-auto cursor-pointer'
							/>
							<div className='text-left'>
								<h4 className='text-lg font-semibold'>
									Press / Media / Partnership
								</h4>
								<p className='text-sm'>relations@wiiseflow.com</p>
							</div>
						</a>

						{/* LinkedIn */}
						<a
							href='https://www.linkedin.com/company/wiise-flow'
							target='_blank'
							rel='noopener noreferrer'
							className='flex justify-start items-center gap-3'
						>
							<img
								src='/linkedin.png'
								alt='LinkedIn Icon'
								className='w-8 h-auto cursor-pointer'
							/>
							<div className='text-left'>
								<h4 className='text-lg font-semibold'>LinkedIn</h4>
							</div>
						</a>
					</div>
				</div>
			</div>

			{/* Rodapé - Faixa Escura */}
			<div className='bg-black px-28'>
				<div className='py-14 lg:py-26 text-primary-foreground text-center lg:text-left gap-20 max-w-[1536px] mx-auto' />
			</div>
		</section>
	)
}
