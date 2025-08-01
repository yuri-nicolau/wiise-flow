"use client";

import Reports from "@assets/reports";
import ServicesItem from "@components/services-item";
import Innovative from "@assets/innovative";
import Insights from "@assets/insights";
import { useTranslations } from "next-intl";

interface CustomProps {
	className?: string;
}

export default function Services({ className = "" }: CustomProps) {
	const t = useTranslations("Services");

	return (
		<div className={`${className}`}>
			<section className="pt-22 md:pt-32 pb-22 md:pb-48 flex flex-col gap-15 justify-center items-center">
				<div className="max-w-3xl flex flex-col gap-5 text-center">
					<div>
						<h2 className="text-title3">{t("subTitle")}</h2>
						<h3 className="text-title1">{t("title")}</h3>
					</div>
					<p className="text-body">{t("description")}</p>
				</div>
				<div className="flex flex-wrap xl:flex-nowrap w-full justify-center gap-16">
					<ServicesItem
						title={t("item1_title")}
						body={t("item1_body")}
						className="flex gap-0 max-w-[100%] md:min-w-[33%] md:max-w-[40%] xl:min-w-0"
					>
						<Insights className="max-w-27 sm:max-w-none sm:w-[30%] h-fit md:max-h-50 md:w-full" />
					</ServicesItem>
					<ServicesItem
						title={t("item2_title")}
						body={t("item2_body")}
						className="flex gap-0 max-w-[100%] md:min-w-[33%] md:max-w-[40%] xl:min-w-0"
					>
						<Innovative className="max-w-27 sm:max-w-none sm:w-[30%] h-fit md:max-h-50 md:w-full" />
					</ServicesItem>
					<ServicesItem
						title={t("item3_title")}
						body={t("item3_body")}
						className="flex gap-0 max-w-[100%] md:min-w-[33%] md:max-w-[40%] xl:min-w-0"
					>
						<Reports className="max-w-27 sm:max-w-none sm:w-[30%] h-fit md:max-h-50 md:w-full" />
					</ServicesItem>
				</div>
			</section>
		</div>
	);
}
