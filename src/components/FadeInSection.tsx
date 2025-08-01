'use client'

import { motion } from 'framer-motion'
import { type ReactNode, useState } from 'react'

interface FadeInSectionProps {
	children: ReactNode
	delay?: number
	threshold?: number // Cada seção pode definir um threshold diferente
}

const FadeInSection = ({
	children,
	delay = 0,
	threshold = 0.4,
}: FadeInSectionProps) => {
	// Inicializa com base no `window.innerWidth`
	const [isLargeScreen] = useState(
		() => typeof window !== 'undefined' && window.innerWidth >= 1024
	)

	// Se a tela for menor que 1024px, exibe o conteúdo diretamente sem animação
	if (!isLargeScreen) {
		return <div className='w-full flex justify-center'>{children}</div>
	}

	return (
		<motion.div
			initial={{ opacity: 0, y: 40 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, amount: threshold }}
			transition={{ duration: 0.6, delay }}
			className='w-full flex justify-center'
		>
			{children}
		</motion.div>
	)
}

export default FadeInSection
