import styled from 'styled-components'
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
    height: initial;
    padding-bottom: 80px;

    .footer-logo {
      margin-top: 0;
    }
  }

  @media (min-width: 1440px) {
    margin-top: 380px;
    height: 394px;
  }
`

const Footer = () => {
    return (
        <FooterWrapper>
            <FooterContact/>
            <FooterContainer/>
        </FooterWrapper>
    )
}

export default Footer;