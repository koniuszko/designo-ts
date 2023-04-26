import styled from 'styled-components'
import {useEffect, useState} from "react";

import {NavLink} from "@/style/global";
import Image from "next/image";

import barsIcon from "../../../public/assets/icons/bars.svg"
import closeIcon from "../../../public/assets/icons/times.svg"

export const ModalWrapper = styled.div`
  position: absolute;
  z-index: 9999;
  top: 100px;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(29, 28, 30, 0.6);

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

export const MenuModal = () => {
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
        document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset'
    }, [isMenuOpen]);

    return (
        <div>
            <Image onClick={() => setIsMenuOpen(!isMenuOpen)} src={!isMenuOpen ? barsIcon : closeIcon}
                   alt={'menu-icon'} width={27} height={27}/>
            {isMenuOpen && <MenuModal/>}
        </div>
    )
}

export default MobileMenu;