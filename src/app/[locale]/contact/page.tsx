import Header from "@components/header";
import Footer from "@components/footer";
import ContactForm from "@sections/contact-form";

// Adicione esta função para gerar as páginas /en/contact e /pt/contact
export async function generateStaticParams() {
	return [{ locale: "en" }, { locale: "pt" }];
}

export default function ContactPage() {
	return (
		<div className="min-h-screen pt-22 flex flex-col justify-between items-center">
			<Header />
			<ContactForm />
			<Footer />
		</div>
	);
}
