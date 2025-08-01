"use client";

import { useEffect } from "react";

export default function RootPage() {
	useEffect(() => {
		const browserLang = navigator.language.split("-")[0];

		if (browserLang === "pt") {
			window.location.replace("/pt");
		} else {
			window.location.replace("/en");
		}
	}, []);

	return (
		<html lang="en">
			<body style={{ backgroundColor: "#fff" }}>
				{/* Opcional: Adicionar um spinner SVG ou mensagem de loading */}
			</body>
		</html>
	);
}
