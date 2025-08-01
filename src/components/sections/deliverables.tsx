"use client";

import Button from "@components/button";
import Database from "../assets/database";
import File from "../assets/file";
import { useTranslations } from "next-intl";

interface CustomProps {
	className?: string;
}
export default function Deliverables({ className = "" }: CustomProps) {
	const t = useTranslations("Deliverables");

	return (
		<div className={`${className}`}>
			<section
				id="deliverables"
				className="pb-16 pt-8 flex flex-order gap-8 justify-between items-center w-full"
			>
				<div className="flex flex-col text-center lg:text-left gap-12 lg:pr-10 lg:w-[50%] lg:max-w-4xl">
					<div className="flex flex-col gap-4">
						<h2 className="text-header">{t("title")}</h2>
						<p className="text-body lg:max-w-lx">
							{t("description_p1")} <strong>{t("description_strong1")}</strong>{" "}
							{t("description_p2")} <strong>{t("description_strong2")}</strong>
							{t("description_p3")}
							<br />
							<br />
							{t("description_p4")}
							<br />
							<br />
							{t("description_p5")}
							<br />
							<br />
							{t("description_p6")}
						</p>
					</div>
					<div className="flex flex-row gap-5 justify-center lg:justify-start">
						<Button href="/contact">{t("button")}</Button>
					</div>
				</div>
				<div className="lg:w-[45%] flex flex-col gap-8 items-center justify-center overflow-visible">
					<div
						className={
							"bg-card flex pl-9 rounded-2xl w-full justify-between flex-row text-left"
						}
					>
						<div className="w-full flex flex-col gap-4 mr-8 md:mr-16 py-12">
							<div className="flex flex-row items-center gap-4">
								<Database className="min-w-8 md:w-8 h-auto" />
								<h3 className="text-title2">{t("item1_title")}</h3>
							</div>
							<p className="text-body">{t("item1_body")}</p>
						</div>
					</div>
					<div
						className={
							"bg-card flex pl-9 rounded-2xl w-full justify-between flex-row text-left"
						}
					>
						<div className="flex flex-col gap-4 mr-8 md:mr-16 py-12">
							<div className="flex flex-row items-center gap-3">
								<File className="min-w-8 md:w-8 h-auto" />
								<h3 className="text-title2">{t("item2_title")}</h3>
							</div>
							<p className="text-body">{t("item2_body")}</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
