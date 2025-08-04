// src/app/[locale]/layout.tsx

import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "../globals.css";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";

const dmSans = DM_Sans({
	subsets: ["latin"],
	variable: "--font-dm-sans",
	weight: ["400", "500", "700", "800"],
});

export const metadata: Metadata = {
	title: {
		template: "%s | WIISE Flow",
		default: "WIISE Flow",
	},
};

export function generateStaticParams() {
	return [{ locale: "en" }, { locale: "pt" }];
}

export default async function RootLayout({
	children,
	params,
}: {
	children: React.ReactNode;
	params: { locale: string };
}) {
	// Correção: `params` agora é tratado de forma síncrona no Next.js 15
	const { locale } = params;

	let messages: Record<string, string>;
	try {
		messages = (
			await import(
				/* webpackChunkName: "locale-[request]" */
				`../../../messages/${locale}.json`
			)
		).default;
	} catch {
		// se não achar o JSON, cai num 404
		notFound();
	}

	return (
		<html lang={locale} className={dmSans.variable}>
			<body className="font-sans m-0 overflow-x-hidden bg-background text-foreground antialiased">
				<NextIntlClientProvider locale={locale} messages={messages}>
					{children}
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
