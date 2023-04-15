import ContactForm from "@/components/contact/ContactForm";
import LocationNav from "@/components/LocationNav";
import ContactLayout from "@/layouts/ContactLayout";


export default function Contact() {
    return (
        <ContactLayout>
            <ContactForm/>
            <LocationNav/>
        </ContactLayout>
    )
}

