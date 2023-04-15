import styled from 'styled-components'
import Image from "next/image";
import MobileMenu from "@/components/navbar/MobileMenu";
import Link from "next/link";

export const NavbarWrapper = styled.nav`
  padding: 34px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Navbar = () => {
    return (
        <NavbarWrapper>
            <Link href={'/'}>
                <Image src={'/assets/shared/desktop/logo-dark.png'} alt={'logo'} width={202} height={27}/>
            </Link>
            <MobileMenu/>
        </NavbarWrapper>
    )
}

export default Navbar;