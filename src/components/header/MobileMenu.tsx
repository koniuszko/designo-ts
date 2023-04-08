import styled from 'styled-components'
// @ts-ignore
import {UilBars} from '@iconscout/react-unicons'
// @ts-ignore
import {UilTimes} from '@iconscout/react-unicons'
import {useEffect, useState} from "react";
import Link from "next/link";
import {NavLink} from "@/style/global";

export const NavWrapper = styled.nav`

`

export const ModalWrapper = styled.div`
  position: absolute;
  z-index: 99;
  top: 100px;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(29, 28, 30, 0.61);


  .nav-list {
    height: 235px;
    padding: 48px 24px;
    background-color: #1D1C1E;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 32px;
  }

`


const MenuModal = () => {
    return (
        <ModalWrapper>
            <ul className="nav-list">
                <li className="nav-list-item">
                    <NavLink href={'/about'}>OUR COMPANY</NavLink>
                </li>
                <li className="nav-list-item">
                    <NavLink href={'/locations'}>LOCATIONS</NavLink>
                </li>
                <li className="nav-list-item">
                    <NavLink href={'/contact'}>CONTACT</NavLink>
                </li>
            </ul>
        </ModalWrapper>
    )
}

const MobileMenu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        return () => {
            if (!isMenuOpen) {
                document.body.style.overflow = 'hidden'
            } else {
                document.body.style.overflow = 'initial'
            }
        };
    }, [isMenuOpen]);

    return (
        <NavWrapper>
            <div onClick={() => setIsMenuOpen(!isMenuOpen)} className="menu-icon">
                {!isMenuOpen ? <UilBars size={27}/> : <UilTimes size={27}/>}
            </div>
            {isMenuOpen && <MenuModal/>}
        </NavWrapper>
    )
}

export default MobileMenu;