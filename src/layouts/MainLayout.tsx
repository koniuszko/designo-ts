import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import {LayoutProps} from "@/interfaces/app_interfaces";

const MainLayout = ({children}: LayoutProps) => {
    return (
        <>
            <Header/>
            {children}
            <Footer/>
        </>
    )
}

export default MainLayout;