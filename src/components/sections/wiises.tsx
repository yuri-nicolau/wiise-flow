"use client";

import WIISEDataLogo from "../assets/wiise-data-logo";
import WIISEFlowLogo from "../assets/wiise-flow-logo";
import WIISERockLogo from "../assets/wiise-rock-logo";
import WIISEVisionLogo from "../assets/wiise-vision-logo";
import WIISEItem from "@components/wiise-item";
import { useTranslations } from "next-intl";

interface CustomProps {
	className?: string;
}
export default function WIISEs({ className = "" }: CustomProps) {
	const t = useTranslations("WIISEs");

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
				<div className="flex flex-wrap gap-6 xl:flex-nowrap justify-center">
					<WIISEItem body={t("item1")} link="https://wiisedata.com">
						<WIISEDataLogo className="mx-10 mt-8 mb-6" />
					</WIISEItem>
					<WIISEItem body={t("item2")} link="https://wiisevision.com">
						<WIISEVisionLogo className="mx-10 mt-8 mb-6" />
					</WIISEItem>
					<WIISEItem body={t("item3")} link="https://wiiseflow.com">
						<WIISEFlowLogo className="mx-10 mt-8 mb-6" />
					</WIISEItem>
					<WIISEItem body={t("item4")} link="https://wiiserock.com">
						<WIISERockLogo className="mx-10 mt-8 mb-6" />
					</WIISEItem>
				</div>
			</section>
		</div>
	);
}
