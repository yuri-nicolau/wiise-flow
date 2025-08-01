import type { JSX, SVGProps } from 'react'

export default function Well(
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
			<title>Well</title>
			<g fillRule='evenodd' clipRule='evenodd'>
				<circle
					cx='45'
					cy='45'
					r='44.5'
					fill='#E5E7EB'
					stroke='url(#paint0_linear_240_6313)'
				/>
				<g filter='url(#filter0_d_240_6313)'>
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
					fill-rule='evenodd'
					clip-rule='evenodd'
					d='M45 60C51.2132 60 56.25 54.9632 56.25 48.75C56.25 38.25 45 30 45 30C45 30 33.75 38.25 33.75 48.75C33.75 54.9632 38.7868 60 45 60Z'
					stroke='black'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M33.75 48.75C33.75 54.9632 38.7868 60 45 60C51.2132 60 56.25 54.9632 56.25 48.75C56.25 48.75 49.5 51 45 48.75C40.5 46.5 33.75 48.75 33.75 48.75Z'
					fill='black'
					stroke='black'
					strokeWidth='2'
					strokeLinejoin='round'
				/>
				<defs>
					<filter
						id='filter0_d_240_6313'
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
							result='effect1_dropShadow_240_6313'
						/>
						<feBlend
							mode='normal'
							in='SourceGraphic'
							in2='effect1_dropShadow_240_6313'
							result='shape'
						/>
					</filter>
					<linearGradient
						id='paint0_linear_240_6313'
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
