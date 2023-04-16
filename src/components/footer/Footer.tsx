import styled from 'styled-components'
import FooterSocials from "@/components/footer/FooterSocials";
import FooterContact from "@/components/footer/FooterContact";
import FooterContainer from "@/components/footer/FooterContainer";

export const FooterWrapper = styled.footer`
  margin-top: 250px;
  background-color: #1d1c1e;
  height: 815px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  .footer-logo {
    margin-top: 250px;
  }

  @media (min-width: 768px) {
    margin-top: 330px;
  }
`

const Footer = () => {
    return (
        <FooterWrapper>
            <FooterContact/>
            <FooterContainer/>
            <FooterSocials/>
        </FooterWrapper>
    )
}

export default Footer;