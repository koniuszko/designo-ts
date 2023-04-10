import Footer from "@/components/footer/Footer";
import {LayoutProps} from "@/interfaces/app_interfaces";
import Navbar from "@/components/navbar/Navbar";

const MainLayout = ({children}: LayoutProps) => {
    return (
        <>
            <Navbar/>
            {children}
            <Footer/>
        </>
    )
}

export default MainLayout;