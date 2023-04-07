import styled from 'styled-components'
import Image from "next/image";
import MobileMenu from "@/components/header/MobileMenu";

export const HeaderWrapper = styled.header`
  padding: 34px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;

`
const Header = () => {
    return (
        <HeaderWrapper>
            <Image src={'/assets/shared/desktop/logo-dark.png'} alt={'logo'} width={202} height={27}/>
            <MobileMenu/>
        </HeaderWrapper>
    )
}

export default Header;