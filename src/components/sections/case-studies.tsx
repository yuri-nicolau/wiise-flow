"use client";

import CaseStoryCard from "@/components/case-study-card";
import { useTranslations } from "next-intl";

interface CustomProps {
	className?: string;
}
export default function CaseStudies({ className = "" }: CustomProps) {
	const t = useTranslations("CaseStudies");

	return (
		<div className={`${className}`}>
			<section
				id="case-studies"
				className="pt-16 md:pt-28 pb-12 flex flex-col gap-15 justify-center items-center"
			>
				<div className="max-w-lg flex flex-col gap-5 text-center">
					<h2 className="text-title1">{t("title")}</h2>
					<p className="text-body">{t("description")}</p>
				</div>
				<div className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] md:grid-cols-[repeat(auto-fit,minmax(390px,1fr))] w-full gap-8">
					<div>
						<CaseStoryCard
							title={t("card1_title")}
							body={t("card1_body")}
							imageSrc="/case-study01.jpg"
							className="h-full"
							href="/case-studies/cases-backed-acidizing-optimization-for-brazils-pre-salt"
						/>
					</div>
					<div className="flex flex-col gap-8">
						<CaseStoryCard
							title={t("card2_title")}
							body={t("card2_body")}
							imageSrc="/problem01.jpg"
							variant="horizontal"
							href="/case-studies/smart-completion-optimization-in-offshore-production"
						/>
						<CaseStoryCard
							title={t("card3_title")}
							body={t("card3_body")}
							imageSrc="/financial-impact-of-planning-valve-positioning.jpg"
							variant="horizontal"
							href="/case-studies/financial-impact-of-planning-valve-positioning"
						/>
					</div>
				</div>
			</section>
		</div>
	);
}
