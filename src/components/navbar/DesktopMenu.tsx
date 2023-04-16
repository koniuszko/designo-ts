import styled from 'styled-components'

import {DesktopNavLink} from "@/style/global";

export const MenuWrapper = styled.div`
  .nav-list {
    list-style: none;
    display: flex;
    gap: 42px;
  }
`
const DesktopMenu = () => {
    return (
        <MenuWrapper>
            <ul className="nav-list">
                <li className="nav-list-item">
                    <DesktopNavLink href={'/about'}>OUR COMPANY</DesktopNavLink>
                </li>
                <li className="nav-list-item">
                    <DesktopNavLink href={'/locations'}>LOCATIONS</DesktopNavLink>
                </li>
                <li className="nav-list-item">
                    <DesktopNavLink href={'/contact'}>CONTACT</DesktopNavLink>
                </li>
            </ul>
        </MenuWrapper>
    )
}

export default DesktopMenu;