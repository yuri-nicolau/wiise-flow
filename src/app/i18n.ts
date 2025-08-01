// src/app/i18n.ts

import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async ({ locale }) => {
	// Validate locale exists
	if (!locale || !["pt", "en"].includes(locale)) {
		// Add your supported locales
		throw new Error(`Invalid locale: ${locale}`);
	}

	// Dynamic import with validation
	const messages = (await import(`../../messages/${locale}.json`)).default;
	return { messages };
});
