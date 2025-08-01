"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

interface CustomProps {
	className?: string;
}
export default function Quote({ className = "" }: CustomProps) {
	const t = useTranslations("Quote");

	return (
		<div className={`${className}`}>
			<section className="px-6 md:px-12 lg:px-20 xl:px-28 py-12 sm:py-24 md:py-32 flex flex-col gap-28">
				<div className="flex flex-order gap-[60px] justify-center items-center">
					<div className="flex flex-row items-center gap-4 min-w-[200px]">
						<Image
							src={"/rodrigo.jpg"}
							width={56}
							height={56}
							alt="hero image"
							className="shadow rounded-full"
						/>
						<div className="max-w-md flex flex-col text-left">
							<h2 className="text-title2">Rodrigo Dias</h2>
							<p className="text-body">CEO - WIISE</p>
						</div>
					</div>
					<div className="max-w-[700px]">
						<p className="text-title2">{t("quote")}</p>
					</div>
				</div>
			</section>
		</div>
	);
}
