import Link from 'next/link'
import type { ReactNode } from 'react'

interface CustomProps {
	href: string
	children: ReactNode
	className?: string
	variant?: 'filled' | 'outline' // Adicionando as variantes
}

export default function Button({
	children,
	variant = 'filled',
	className,
	...props
}: CustomProps) {
	// Estilos base e variantes
	const baseStyles =
		'text-base leading-[1.6] rounded-xl px-6 py-3 w-fit md:text-lg transition-all duration-200 '
	const filledStyles =
		'bg-primary text-primary-foreground font-bold shadow-md hover:shadow-xl hover:opacity-90'
	const outlineStyles =
		'border font-normal border-border text-primary hover:bg-card'

	// Escolher os estilos com base na variante
	const buttonStyles =
		variant === 'filled'
			? `${baseStyles} ${filledStyles}`
			: `${baseStyles} ${outlineStyles}`

	return (
		<Link className={`${buttonStyles} ${className || ''}`} {...props}>
			{children}
		</Link>
	)
}
