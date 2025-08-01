"use client";

import FeatureCard from "@components/feature-card";
import Image from "next/image";
import { useTranslations } from "next-intl";

interface CustomProps {
	className?: string;
}

export default function Features({ className = "" }: CustomProps) {
	const t = useTranslations("Features");

	return (
		<div className={`${className}`}>
			<div className="relative flex-grow max-w-[1760px] w-full">
				<section
					id="features"
					className="py-16 md:py-28 flex flex-col gap-16 md:gap-[100px] justify-center items-center"
				>
					<div className="max-w-lg flex flex-col gap-5 text-center">
						<h2 className="text-title1">{t("title")}</h2>
						<p className="text-body">{t("description")}</p>
					</div>
					<div className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] md:grid-cols-[repeat(auto-fit,minmax(420px,1fr))] w-full gap-8 align-items: stretch">
						<FeatureCard
							title={t("card1_title")}
							body={t("card1_body")}
							className="h-full"
						>
							<Image
								src={"/feature01.png"}
								alt={"Feature 1"}
								width={689}
								height={546}
							/>
						</FeatureCard>
						<FeatureCard
							title={t("card2_title")}
							body={t("card2_body")}
							className="h-full"
						>
							<Image
								src={"/feature02.png"}
								alt={"Feature 2"}
								width={689}
								height={546}
							/>
						</FeatureCard>
						<FeatureCard
							title={t("card3_title")}
							body={t("card3_body")}
							className="h-full"
						>
							<Image
								src={"/feature03.png"}
								alt={"Feature 3"}
								width={689}
								height={546}
							/>
						</FeatureCard>
						<FeatureCard
							title={t("card4_title")}
							body={t("card4_body")}
							className="h-full"
						>
							<Image
								src={"/feature04.png"}
								alt={"Feature 4"}
								width={689}
								height={546}
							/>
						</FeatureCard>
						<FeatureCard
							title={t("card5_title")}
							body={t("card5_body")}
							className="h-full"
						>
							<Image
								src={"/feature05.png"}
								alt={"Feature 5"}
								width={689}
								height={546}
							/>
						</FeatureCard>
						<FeatureCard
							title={t("card6_title")}
							body={t("card6_body")}
							className="h-full"
						>
							<Image
								src={"/feature06.png"}
								alt={"Feature 6"}
								width={689}
								height={546}
							/>
						</FeatureCard>
					</div>
				</section>
			</div>
		</div>
	);
}
