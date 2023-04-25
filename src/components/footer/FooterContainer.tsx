import styled from "styled-components";
import {LightGrayParagraph, NavLink} from "@/style/global";
import Image from "next/image";
import FooterSocials from "@/components/footer/FooterSocials";

export const ContainerWrapper = styled.div`
  text-align: center;

  .address-socials {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .footer-nav {
    width: 330px;
    border-top: 1px solid #333136;
    margin-top: 32px;

    &-list {
      list-style: none;

      &-item {
        margin: 32px;
      }
    }
  }

  .nav-link {
    font-size: 14px;
    line-height: 14px;
    font-weight: 400;
    letter-spacing: 2px;
  }

  .address-container {
    margin-top: 32px;
  }

  .text-bold {
    font-weight: 700;
  }

  @media (min-width: 768px) {
    width: 690px;

    .nav-container {
      margin-top: 160px;
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #333136;
      padding-bottom: 40px;
    }

    .footer-nav {
      width: 370px;
      border-top: none;
      margin-top: 0;

      &-list {
        list-style: none;
        display: flex;
        justify-content: space-between;

        &-item {
          margin: 0;
        }
      }
    }

    .address-socials {
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }
  }

  @media (min-width: 1440px) {
    width: 1112px;

    p {
      text-align: left;
    }
  }
`

export default function FooterContainer() {
    return (
        <ContainerWrapper>
            <div className="nav-container">
                <Image className="footer-logo" src={'/assets/shared/desktop/logo-light.png'} alt={'logo'} width={202}
                       height={27}/>
                <nav className="footer-nav">
                    <ul className="footer-nav-list">
                        <li className="footer-nav-list-item">
                            <NavLink className="nav-link" href={'/about'}>OUR COMPANY</NavLink>
                        </li>
                        <li className="footer-nav-list-item">
                            <NavLink className="nav-link" href={'/locations'}>LOCATIONS</NavLink>
                        </li>
                        <li className="footer-nav-list-item">
                            <NavLink className="nav-link" href={'/contact'}>CONTACT</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="address-socials">
                <div className="address-container">
                    <LightGrayParagraph className="text-bold">Designo Central Office</LightGrayParagraph>
                    <LightGrayParagraph>3886 Wellington Street</LightGrayParagraph>
                    <LightGrayParagraph>Toronto, Ontario M9C 3J5</LightGrayParagraph>
                </div>
                <div className="address-container">
                    <LightGrayParagraph className="text-bold">Contact Us (Central Office)</LightGrayParagraph>
                    <LightGrayParagraph>P: +1 253-863-8967</LightGrayParagraph>
                    <LightGrayParagraph>M: contact@designo.co</LightGrayParagraph>
                </div>
                <FooterSocials/>
            </div>
        </ContainerWrapper>
    )
}