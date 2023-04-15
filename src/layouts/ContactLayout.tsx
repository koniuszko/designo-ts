import {LayoutProps} from "@/interfaces/app_interfaces";
import Navbar from "@/components/navbar/Navbar";
import AltFooter from "@/components/footer/AltFooter";

const ContactLayout = ({children}: LayoutProps) => {
    return (
        <>
            <Navbar/>
            {children}
            <AltFooter/>
        </>
    )
}

export default ContactLayout;