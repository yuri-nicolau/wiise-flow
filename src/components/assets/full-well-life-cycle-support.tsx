import type { JSX, SVGProps } from 'react'

export default function FullWellLifeCycleSupport(
	props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
	return (
		<svg
			className={props.className} // Permite customização via Tailwind/CSS externo
			width={props.width || '689'} // Define valores padrão mas permite customização
			height={props.height || '564'}
			viewBox='0 0 689 564' // Ajuste correto para exibir o SVG inteiro
			xmlns='http://www.w3.org/2000/svg'
			fill='none'
			{...props}
		>
			<title>Petrobras</title>
		</svg>
	)
}
