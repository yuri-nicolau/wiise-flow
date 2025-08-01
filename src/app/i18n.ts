// src/app/i18n.ts

import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async ({ locale }) => {
	const messages = (await import(`../../messages/${locale}.json`)).default;

	return {
		locale,
		messages,
	};
});
