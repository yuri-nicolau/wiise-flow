import type { JSX, SVGProps } from 'react'

export default function Database(
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
			<path
				fill-rule='evenodd'
				clip-rule='evenodd'
				d='M33.8643 0.758789L33.9688 12.6699C34.0737 21.5248 33.9168 24.7359 33.4443 25.2539C33.0243 25.72 31.1338 25.9268 21.2637 25.875L19.4258 27.6875C18.4283 28.6714 17.2209 29.4999 16.8008 29.5C16.3808 29.5 15.173 28.7232 12.3379 25.875L0.262695 25.6162L0.105469 13.0322L0 0.5L33.8643 0.758789ZM16.8008 12.4102C15.7508 12.4102 15.698 12.6697 15.8555 16.709C15.9605 20.0746 16.1708 20.955 16.8008 20.9551C17.4308 20.9551 17.6411 20.0741 17.7461 16.6562C17.8511 12.6692 17.7983 12.4102 16.8008 12.4102ZM17.0635 6.71387C16.5911 6.71387 16.1189 7.07615 16.0137 7.49023C15.8562 7.90452 15.8562 8.47444 16.0137 8.78516C16.1712 9.09584 16.6435 9.30273 17.0635 9.30273C17.5359 9.30263 17.8505 8.8371 17.8506 8.00879C17.8506 7.18031 17.5359 6.71397 17.0635 6.71387Z'
				fill='black'
			/>
		</svg>
	)
}
