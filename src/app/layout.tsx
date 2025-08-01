import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'
import './globals.css'

const dmSans = DM_Sans({
	subsets: ['latin'],
	variable: '--font-dm-sans',
	weight: ['400', '500', '700', '800'],
})

export const metadata: Metadata = {
	title: {
		template: '%s | WIISE Flow',
		default: 'WIISE Flow',
	},
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html className={dmSans.variable} lang='pt-BR'>
			<body className='font-sans m-0 overflow-x-hidden bg-background text-foreground antialiased'>
				{children}
			</body>
		</html>
	)
}
