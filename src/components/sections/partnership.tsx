"use client";

import PartnershipImage from "@assets/partnership";
import { useTranslations } from "next-intl";

interface CustomProps {
	className?: string;
}
export default function Partnership({ className = "" }: CustomProps) {
	const t = useTranslations("Partnership");

	return (
		<div className={`${className}`}>
			<section className="pb-8 pt-10 flex justify-center items-center flex-order">
				<PartnershipImage className="w-[130%] md:w-[50%] h-auto lg:ml-[-64px] lg:mr-[-32px]" />
				<div className="max-w-md flex flex-col gap-5 text-center">
					<h2 className="text-title2">{t("title")}</h2>
					<p className="text-body">{t("description")}</p>
				</div>
			</section>
		</div>
	);
}
