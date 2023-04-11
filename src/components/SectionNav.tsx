import styled from "styled-components";
import {NavLink, WhiteH2, WhiteParagraph} from "@/style/global";
import Image from "next/image";
import {NavProps} from "@/interfaces/app_interfaces";

const NavWrapper = styled.nav`
  margin: 96px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;

  .link-container {
    width: 327px;
    height: 250px;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .web-design {
    background-image: linear-gradient(rgba(0, 0, 0, 0.65),
    rgba(0, 0, 0, 0.45)), url('/assets/home/mobile/image-web-design.jpg');
  }

  .app-design {
    background-image: linear-gradient(rgba(0, 0, 0, 0.65),
    rgba(0, 0, 0, 0.45)), url('/assets/home/mobile/image-app-design.jpg');
  }

  .graphic-design {
    background-image: linear-gradient(rgba(0, 0, 0, 0.65),
    rgba(0, 0, 0, 0.45)), url('/assets/home/mobile/image-graphic-design.jpg');
  }

  .arrow-icon {
    margin-left: 16px;
  }
`

const SectionNav = ({disabledLink}: NavProps) => {
    return (
        <NavWrapper>
            {disabledLink !== "web" && <NavLink href='/web-design'>
                <div className='link-container web-design'>
                    <WhiteH2>
                        WEB DESIGN
                    </WhiteH2>
                    <WhiteParagraph>
                        VIEW PROJECTS
                        <Image className="arrow-icon" src='/assets/icons/icon-right-arrow.svg' alt='arrow-icon'
                               width={4} height={8}/>
                    </WhiteParagraph>
                </div>
            </NavLink>}
            {disabledLink !== "app" && <NavLink href='/app-design'>
                <div className='link-container app-design'>
                    <WhiteH2>
                        APP DESIGN
                    </WhiteH2>
                    <WhiteParagraph>
                        VIEW PROJECTS
                        <Image className="arrow-icon" src='/assets/icons/icon-right-arrow.svg' alt='arrow-icon'
                               width={4} height={8}/>
                    </WhiteParagraph>
                </div>
            </NavLink>}
            {disabledLink !== "graphic" && <NavLink href='/graphic-design'>
                <div className='link-container graphic-design'>
                    <WhiteH2>
                        GRAPHIC DESIGN
                    </WhiteH2>
                    <WhiteParagraph>
                        VIEW PROJECTS
                        <Image className="arrow-icon" src='/assets/icons/icon-right-arrow.svg' alt='arrow-icon'
                               width={4} height={8}/>
                    </WhiteParagraph>
                </div>
            </NavLink>}
        </NavWrapper>
    )
}

export default SectionNav;