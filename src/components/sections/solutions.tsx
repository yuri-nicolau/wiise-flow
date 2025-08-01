"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

interface CustomProps {
	className?: string;
}
export default function Solutions({ className = "" }: CustomProps) {
	const t = useTranslations("Solutions");

	return (
		<div className={`${className}`}>
			<section
				id="solution"
				className="py-10 md:py-28 flex flex-order gap-12 md:gap-24 lg:gap-0 justify-center items-center"
			>
				<div className="w-screen relative h-60 lg:h-75 lg:-left-16 lg:mx-[-32px] flex justify-center items-center overflow-visible !important">
					<Image
						src={"/solutions.png"}
						fill
						alt="hero image"
						className="absolute w-100% object-cover overflow-visible !important"
					/>
				</div>
				<div className="flex flex-col gap-12 lg:pl-24 w-full">
					<div className="flex flex-col gap-4 text-center items-center lg:items-start lg:text-left">
						<h2 className="text-title1 lg:max-w-md">{t("title")}</h2>
						<p className="text-body lg:max-w-lg">{t("description")}</p>
					</div>
					<div className="flex flex-col gap-6">
						<div className="flex flex-row gap-4 items-center">
							<Image
								src={"/solution01.png"}
								width={50}
								height={50}
								alt="hero image"
								className="object-cover"
							/>
							<p className="text-body">{t("item1")}</p>
						</div>
						<div className="flex flex-row gap-4 items-center">
							<Image
								src={"/solution02.png"}
								width={50}
								height={50}
								alt="hero image"
								className="object-cover"
							/>
							<p className="text-body">{t("item2")}</p>
						</div>
						<div className="flex flex-row gap-4 items-center">
							<Image
								src={"/solution03.png"}
								width={50}
								height={50}
								alt="hero image"
								className="object-cover"
							/>
							<p className="text-body">{t("item3")}</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
