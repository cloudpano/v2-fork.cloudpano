import { ContactTemplate } from '@repo/email-templates/contact'

export default function ExampleContactEmail() {
	return (
		<ContactTemplate
			name='Jane Smith'
			email='jane.smith@example.com'
			message="I'm interested in your services."
		/>
	)
}
