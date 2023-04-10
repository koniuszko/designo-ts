import styled from 'styled-components'
import Image from "next/image";
import {GrayParagraph, NavLink, WhiteButton, WhiteH1, WhiteParagraph} from "@/style/global";
import Link from "next/link";

export const FooterWrapper = styled.footer`
  margin-top: 250px;
  background-color: #1d1c1e;
  height: 815px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  .footer-contact {
    width: 330px;
    height: 380px;
    border-radius: 15px;
    background-color: #E7816B;
    background-image: url('/assets/shared/mobile/bg-pattern-design-pages-intro-mobile.svg');
    background-size: 250%;
    background-position: 80% 50%;
    background-repeat: no-repeat;
    box-shadow: 0 4px 4px 0 rgba(29, 28, 30, 0.5);
    transform: translateY(-50%);
    position: absolute;
    padding: 64px 26px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }

  .footer-logo {
    margin-top: 250px;
  }

  .footer-container {
    text-align: center;
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

  .socials {
    margin-top: 40px;
    display: flex;
    gap: 16px;
  }
`

const Footer = () => {
    return (
        <FooterWrapper>
            <div className="footer-contact">
                <WhiteH1>Let’s talk about your project</WhiteH1>
                <WhiteParagraph>
                    Ready to take it to the next level? Contact us today and find out how our expertise can
                    help your business grow.
                </WhiteParagraph>
                <Link href={'/contact'}>
                    <WhiteButton>
                        get in touch
                    </WhiteButton>
                </Link>
            </div>
            <div className="footer-container">
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
                <div className="address-container">
                    <GrayParagraph className="text-bold">Designo Central Office</GrayParagraph>
                    <GrayParagraph>3886 Wellington Street</GrayParagraph>
                    <GrayParagraph>Toronto, Ontario M9C 3J5</GrayParagraph>
                </div>
                <div className="address-container">
                    <GrayParagraph className="text-bold">Contact Us (Central Office)</GrayParagraph>
                    <GrayParagraph>P: +1 253-863-8967</GrayParagraph>
                    <GrayParagraph>M: contact@designo.co</GrayParagraph>
                </div>
            </div>
            <div className="socials">
                <Link href="http://www.facebook.com">
                    <Image src='/assets/icons/icon-facebook.svg' alt='facebook-icon' width={24} height={24}/>
                </Link>
                <Link href="http://www.youtube.com">
                    <Image src='/assets/icons/icon-youtube.svg' alt='facebook-icon' width={24} height={24}/>
                </Link>
                <Link href="http://www.twitter.com">
                    <Image src='/assets/icons/icon-twitter.svg' alt='facebook-icon' width={24} height={24}/>
                </Link>
                <Link href="http://www.pinterest.com">
                    <Image src='/assets/icons/icon-pinterest.svg' alt='facebook-icon' width={24} height={24}/>
                </Link>
                <Link href="http://www.instagram.com">
                    <Image src='/assets/icons/icon-instagram.svg' alt='facebook-icon' width={24} height={24}/>
                </Link>
            </div>
        </FooterWrapper>
    )
}

export default Footer;