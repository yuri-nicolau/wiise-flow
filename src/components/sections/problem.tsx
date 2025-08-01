"use client";

import BusinessModelItem from "@/components/problem-item";
import { useTranslations } from "next-intl";

interface CustomProps {
	className?: string;
}
export default function Problem({ className = "" }: CustomProps) {
	const t = useTranslations("Problem");

	return (
		<div className={`${className}`}>
			<section className="pt-[120px] pb-[60px] md:py-[120px] flex flex-col gap-[60px] justify-center items-center">
				<div className="max-w-2xl flex flex-col gap-5 text-center">
					<div>
						<h2 className="text-title3">{t("subTitle")}</h2>
						<h3 className="text-title1">{t("title")}</h3>
					</div>
					<p className="text-body">{t("description")}</p>
				</div>
				<div className="flex flex-wrap xl:flex-nowrap w-full justify-center gap-16">
					<BusinessModelItem
						title={t("item1_title")}
						body={t("item1_body")}
						imageSrc="/problem01.jpg"
						className="max-w-[100%] md:min-w-[33%] md:max-w-[40%] xl:min-w-0"
					/>
					<BusinessModelItem
						title={t("item2_title")}
						body={t("item2_body")}
						imageSrc="/problem03.jpg"
						className="max-w-[100%] md:min-w-[33%] md:max-w-[40%] xl:min-w-0"
					/>
					<BusinessModelItem
						title={t("item3_title")}
						body={t("item3_body")}
						imageSrc="/problem02.jpg"
						className="max-w-[100%] md:min-w-[33%] md:max-w-[40%] xl:min-w-0"
					/>
				</div>
			</section>
		</div>
	);
}
