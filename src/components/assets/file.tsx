import type { JSX, SVGProps } from 'react'

export default function File(
	props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
	return (
		<svg
			className={props.className} // Permite customização via Tailwind/CSS externo
			width={props.width || '32'} // Define valores padrão mas permite customização
			height={props.height || '32'}
			viewBox='0 0 32 32' // Ajuste correto para exibir o SVG inteiro
			xmlns='http://www.w3.org/2000/svg'
			fill='none'
			{...props}
		>
			<title>Report</title>
			<g fillRule='evenodd' clipRule='evenodd'>
				<path
					d='M5.33398 29.3332V2.6665H20.6673L26.6673 9.6665V29.3332H5.33398Z'
					fill='black'
					stroke='black'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M14 18.6665H10V23.3332H14V18.6665Z'
					fill='#F3F4F6'
					stroke='#F3F4F6'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path d='M9.33398 23.3335H22.6673Z' fill='#F3F4F6' />
				<path
					d='M9.33398 23.3335H22.6673'
					stroke='#F3F4F6'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M18 15.3335H14V23.3335H18V15.3335Z'
					fill='#F3F4F6'
					stroke='#F3F4F6'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M22 12H18V23.3333H22V12Z'
					fill='#F3F4F6'
					stroke='#F3F4F6'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
			</g>
		</svg>
	)
}
