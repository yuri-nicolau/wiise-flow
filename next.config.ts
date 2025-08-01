import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin(
	// Caminho relativo para o seu arquivo de configuração
	"./i18n.ts",
);

const nextConfig: NextConfig = {
	output: "export",
	images: {
		unoptimized: true,
	},
};

export default withNextIntl(nextConfig);
