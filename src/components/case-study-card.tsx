"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

interface CustomProps {
	title: string;
	body: string;
	imageSrc: string;
	gap?: number;
	className?: string;
	href: string;
	variant?: "vertical" | "horizontal";
}

export default function CaseStudyCard({
	title,
	body,
	imageSrc,
	href,
	variant = "vertical",
	className = "",
}: CustomProps) {
	const t = useTranslations("CaseStudies");

	if (variant === "horizontal") {
		return (
			<div
				className={`bg-card flex pl-9 rounded-2xl overflow-clip w-full justify-between flex-row text-left ${className}`}
			>
				<div className="flex flex-col gap-4 mr-8 md:mr-16 w-[50%] py-14">
					<h3 className="text-title2">{title}</h3>
					<p className="text-body">{body}</p>
					<Link href={href} className="text-highlight2 hover:text-foreground">
						{t("learnMore")}
					</Link>
				</div>
				<div className="relative w-[50%] h-full">
					<Image src={imageSrc} fill alt={title} className="object-cover" />
				</div>
			</div>
		);
	}
	return (
		<div
			className={`bg-card flex pb-14 rounded-2xl overflow-clip w-full justify-between flex-col text-center ${className}`}
		>
			<div className="relative h-full min-h-100 lg:min-h-0">
				<Image src={imageSrc} fill alt={title} className="object-cover" />
			</div>
			<div className="flex flex-col gap-4 mt-10 md:mt-16 h-auto mx-auto px-9">
				<h3 className="text-title2">{title}</h3>
				<p className="text-body">{body}</p>
				<Link href={href} className="text-highlight2 hover:text-foreground">
					{t("learnMore")}
				</Link>
			</div>
		</div>
	);
}
