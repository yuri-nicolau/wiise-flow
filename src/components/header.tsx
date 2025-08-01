"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Logo from "@assets/logo";
import Tab from "@components/tab";
import Button from "@components/button";
import { useTranslations } from "next-intl";

export default function Header() {
	const t = useTranslations("Header");
	const [menuOpen, setMenuOpen] = useState(false);
	const [showHeader, setShowHeader] = useState(true);
	const [lastScrollY, setLastScrollY] = useState(0);

	// Efeito para monitorar a rolagem
	useEffect(() => {
		const handleScroll = () => {
			const currentScrollY = window.scrollY;

			// Se o menu estiver aberto, não esconde o header
			if (menuOpen) return;

			if (currentScrollY > lastScrollY && currentScrollY > 50) {
				// Rolando para baixo → esconde o header
				setShowHeader(false);
			} else {
				// Rolando para cima → mostra o header
				setShowHeader(true);
			}

			setLastScrollY(currentScrollY);
		};

		window.addEventListener("scroll", handleScroll);

		return () => window.removeEventListener("scroll", handleScroll);
	}, [lastScrollY, menuOpen]); // 🔥 Agora observa `menuOpen` também

	return (
		<header
			className={`bg-white py-4 w-full padding fixed top-0 left-0 transition-transform duration-300 z-50 shadow ${
				showHeader || menuOpen ? "translate-y-0" : "-translate-y-full"
			}`}
		>
			<nav className="container mx-auto flex justify-between items-center">
				{/* Logo */}
				<Link href="/">
					<Logo />
				</Link>

				{/* Desktop Navigation */}
				<div className="hidden md:flex space-x-8 items-center">
					<Tab href="/#solution">{t("solution")}</Tab>
					<Tab href="/#case-studies">{t("caseStudies")}</Tab>
					<Button href="/contact">{t("contactUs")}</Button>
				</div>

				{/* Mobile Menu Button */}
				<button
					className="md:hidden p-2"
					onClick={() => setMenuOpen(true)}
					aria-label="Open menu"
				>
					<Menu size={28} />
				</button>
			</nav>

			{/* Mobile Menu (Full-screen Overlay) */}
			{menuOpen && (
				<>
					{/* 🔥 Background Overlay corrigido */}
					<div
						className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300"
						onClick={() => setMenuOpen(false)}
					/>

					{/* Sidebar Menu */}
					<div
						className={`fixed top-0 right-0 h-screen w-full bg-white z-50 transform transition-transform duration-300 p-6 flex flex-col gap-6 ${
							menuOpen ? "translate-x-0" : "translate-x-full"
						}`}
					>
						{/* Close Button */}
						<button
							className="self-end p-2"
							onClick={() => setMenuOpen(false)}
							aria-label="Close menu"
						>
							<X size={28} />
						</button>

						{/* Mobile Navigation */}
						<nav className="flex flex-col items-center gap-6 text-lg">
							<div onClick={() => setMenuOpen(false)}>
								<Tab href="/#solution">{t("solution")}</Tab>
							</div>
							<div onClick={() => setMenuOpen(false)}>
								<Tab href="/#case-studies">{t("caseStudies")}</Tab>
							</div>
							<div onClick={() => setMenuOpen(false)}>
								<Button href="/contact">{t("contactUs")}</Button>
							</div>
						</nav>
					</div>
				</>
			)}
		</header>
	);
}
