import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "../globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server"; // Importe a função correta

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

export default async function RootLayout({
	// A função deve ser async
	children,
	params: { locale },
}: Readonly<{
	children: React.ReactNode;
	params: { locale: string };
}>) {
	// Aguarda as mensagens de tradução para o locale atual
	const messages = await getMessages();

	return (
		<html className={dmSans.variable} lang={locale}>
			<body className="font-sans m-0 overflow-x-hidden bg-background text-foreground antialiased">
				{/* Envolve os filhos com o Provider, passando locale e messages */}
				<NextIntlClientProvider locale={locale} messages={messages}>
					{children}
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
