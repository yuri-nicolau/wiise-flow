import type { JSX, SVGProps } from 'react'

export default function Report(
	props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
	return (
		<svg
			className={props.className} // Permite customização via Tailwind/CSS externo
			width={props.width || '50'} // Define valores padrão mas permite customização
			height={props.height || '50'}
			viewBox='0 0 50 50' // Ajuste correto para exibir o SVG inteiro
			xmlns='http://www.w3.org/2000/svg'
			fill='none'
			{...props}
		>
			<title>Report</title>
			<g fillRule='evenodd' clipRule='evenodd'>
				<circle
					cx='45'
					cy='45'
					r='44.5'
					fill='#E5E7EB'
					stroke='url(#paint0_linear_240_6301)'
				/>
				<g filter='url(#filter0_d_240_6301)'>
					<circle cx='45' cy='45' r='33' fill='white' />
					<circle
						cx='45'
						cy='45'
						r='32.25'
						stroke='#D1D5DC'
						strokeWidth='1.5'
					/>
				</g>
				<path
					d='M43.0991 60L42.3491 54'
					stroke='black'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M58.0991 60V36H46.0991L46.8491 42L47.5991 48L48.3491 54L43.0991 60H58.0991Z'
					fill='black'
					stroke='black'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M47.5991 48H51.3491'
					stroke='white'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M46.8491 42H51.3491'
					stroke='white'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M31.0991 30H45.3491L46.0991 36L46.8491 42L47.5991 48L48.3491 54H42.3491H31.0991V30Z'
					fill='black'
					stroke='black'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M35.5991 36H40.8491'
					stroke='white'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M35.5991 42H41.5991'
					stroke='white'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M35.5991 48H42.3491'
					stroke='white'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<defs>
					<filter
						id='filter0_d_240_6301'
						x='0'
						y='6'
						width='90'
						height='90'
						filterUnits='userSpaceOnUse'
						colorInterpolationFilters='sRGB'
					>
						<feFlood floodOpacity='0' result='BackgroundImageFix' />
						<feColorMatrix
							in='SourceAlpha'
							type='matrix'
							values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
							result='hardAlpha'
						/>
						<feOffset dy='6' />
						<feGaussianBlur stdDeviation='6' />
						<feComposite in2='hardAlpha' operator='out' />
						<feColorMatrix
							type='matrix'
							values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.07 0'
						/>
						<feBlend
							mode='normal'
							in2='BackgroundImageFix'
							result='effect1_dropShadow_240_6301'
						/>
						<feBlend
							mode='normal'
							in='SourceGraphic'
							in2='effect1_dropShadow_240_6301'
							result='shape'
						/>
					</filter>
					<linearGradient
						id='paint0_linear_240_6301'
						x1='45'
						y1='0'
						x2='45'
						y2='90'
						gradientUnits='userSpaceOnUse'
					>
						<stop stopColor='#D1D5DC' stopOpacity='0.2' />
						<stop offset='1' stopColor='#D1D5DC' />
					</linearGradient>
				</defs>
			</g>
		</svg>
	)
}
