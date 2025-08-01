import Logo from "@assets/logo";
import { useTranslations } from "next-intl";

export default function Footer() {
	const t = useTranslations("Footer");

	return (
		<footer className="bg-background py-12 md:py-24 w-full padding">
			<div className="max-w-[1536px] mx-auto flex flex-row justify-between">
				<div className="flex flex-col gap-4 text-left">
					<Logo />
					<p className="text-body">
						2025 WIISE Flow
						<br />
						{t("reserved")}
					</p>
				</div>
				<div className="flex flex-row gap-20">
					<div className="flex flex-col gap-10">
						<h2 className="text-title2">{t("product")}</h2>
						<div className="flex flex-col gap-3">
							<a className="text-body hover:text-foreground" href="/#solution">
								Solution
							</a>
							<a className="text-body hover:text-foreground" href="/#features">
								{t("features")}
							</a>
							<a
								className="text-body hover:text-foreground"
								href="/#deliverables"
							>
								{t("deliverables")}
							</a>
							<a
								className="text-body hover:text-foreground"
								href="/#case-studies"
							>
								Case studies
							</a>
							<a className="text-body hover:text-foreground" href="/contact">
								{t("contactUs")}
							</a>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
