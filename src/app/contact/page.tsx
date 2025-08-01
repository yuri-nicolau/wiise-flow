import Header from '@components/header'
import Footer from '@components/footer'
import ContactForm from '@sections/contact-form'

export default function ContactPage() {
	return (
		<div className='min-h-screen pt-22 flex flex-col justify-between items-center'>
			<Header />
			<ContactForm />
			<Footer />
		</div>
	)
}
