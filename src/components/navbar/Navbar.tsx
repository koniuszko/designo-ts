import styled from 'styled-components'
import Image from "next/image";
import MobileMenu from "@/components/navbar/MobileMenu";
import Link from "next/link";
import useWindowWidth from "@/utils/useWindowWidth";
import DesktopMenu from "@/components/navbar/DesktopMenu";

export const NavbarWrapper = styled.nav`
  padding: 34px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo {
    display: flex;
    align-items: center;
  }

  @media (min-width: 1440px) {
    width: 1112px;
    margin: 0 auto;
  }
`
const Navbar = () => {
    return (
        <NavbarWrapper>
            <Link className='logo' href={'/'}>
                <Image src={'/assets/shared/desktop/logo-dark.png'} alt={'logo'} width={202} height={27}/>
            </Link>
            {useWindowWidth() < 768 ? <MobileMenu/> : <DesktopMenu/>}
        </NavbarWrapper>
    )
}

export default Navbar;