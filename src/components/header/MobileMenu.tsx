import styled from 'styled-components'
// @ts-ignore
import {UilBars} from '@iconscout/react-unicons'
// @ts-ignore
import {UilTimes} from '@iconscout/react-unicons'
import {useState} from "react";

export const NavWrapper = styled.nav``


const MobileMenu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <NavWrapper>
            <div onClick={() => setIsMenuOpen(!isMenuOpen)} className="menu-icon">
                {!isMenuOpen ? <UilBars size={27}/> : <UilTimes size={27}/>}
            </div>
            {isMenuOpen && <div>Menu</div>}
        </NavWrapper>
    )
}

export default MobileMenu;