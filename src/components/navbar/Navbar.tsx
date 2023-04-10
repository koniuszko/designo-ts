import styled from 'styled-components'
import Image from "next/image";
import MobileMenu from "@/components/navbar/MobileMenu";

export const HeaderWrapper = styled.nav`
  padding: 34px 24px;
  display: flex;


  justify-content: space-between;
  align-items: center;

`
const Navbar = () => {
    return (
        <HeaderWrapper>
            <Image src={'/assets/shared/desktop/logo-dark.png'} alt={'logo'} width={202} height={27}/>
            <MobileMenu/>
        </HeaderWrapper>
    )
}

export default Navbar;