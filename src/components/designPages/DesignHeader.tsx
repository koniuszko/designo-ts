import styled from 'styled-components'
import {WhiteH1, WhiteParagraph} from "@/style/global";
import {DesignHeaderProps} from "@/interfaces/app_interfaces";

export const HeaderWrapper = styled.header`
  padding: 0 24px;
  height: 320px;
  background-color: #E7816B;
  background-image: url('/assets/web-design/desktop/bg-pattern-intro-web.svg');
  background-repeat: no-repeat;
  background-size: 250%;
  background-position: 100% 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  @media (min-width: 768px) {
    width: 689px;
    height: 252px;
    margin: 64px auto 120px;
    padding: 64px 140px;
    border-radius: 15px;
    background-repeat: no-repeat;
    background-size: 110%;
    background-position: 80px 50%;
  }
`
const DesignHeader = ({pageTitle, pageDescription}: DesignHeaderProps) => {
    return (
        <HeaderWrapper>
            <WhiteH1>
                {pageTitle}
            </WhiteH1>
            <WhiteParagraph>
                {pageDescription}
            </WhiteParagraph>
        </HeaderWrapper>
    )
}

export default DesignHeader;