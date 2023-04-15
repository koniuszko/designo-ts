import styled from 'styled-components'
import FooterSocials from "@/components/footer/FooterSocials";
import FooterContainer from "@/components/footer/FooterContainer";

export const FooterWrapper = styled.footer`
  padding: 64px 24px;
  background-color: #1d1c1e;
  height: 626px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;


`

const AltFooter = () => {
    return (
        <FooterWrapper>
            <FooterContainer/>
            <FooterSocials/>
        </FooterWrapper>
    )
}

export default AltFooter;