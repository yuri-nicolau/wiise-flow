"use client";

import Header from "@components/header";
import Footer from "@components/footer";
import Image from "next/image";
import { useTranslations } from "next-intl";

// Adicione esta função
export async function generateStaticParams() {
	return [{ locale: "en" }, { locale: "pt" }];
}

export default function TheHighCostOfInaccuracy() {
	const t = useTranslations("CaseStudy3");

	return (
		<div className=" flex flex-col justify-between items-center">
			<Header />
			<section className="py-28 padding flex gap-8 lg:gap-0 flex-order flex-grow max-w-[1760px] justify-between items-center w-full">
				<div className="lg:max-w-2xl flex flex-col gap-12 lg:pr-10 z-10">
					<div className="flex flex-col gap-4 text-center lg:text-left">
						<h1 className="text-header">{t("title")}</h1>
						<p className="text-body">{t("subTitle")}</p>
					</div>
				</div>
				<div className="relative w-screen h-125 flex items-center justify-center overflow-visible !important">
					<Image
						src="/problem01-hero.png"
						width={834}
						height={556}
						alt="hero image"
						className="absolute h-[130%] w-screen object-cover overflow-visible !important"
						priority
					/>
				</div>
			</section>
			<div className="w-full bg-card padding">
				<div
					className="max-w-186 m-auto py-24 text-justify text-5"
					dangerouslySetInnerHTML={{ __html: t.raw("content") }}
				/>
			</div>

			<Footer />
		</div>
	);
}
