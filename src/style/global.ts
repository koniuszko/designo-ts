import styled, {createGlobalStyle} from "styled-components";
import Link from "next/link";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Jost', sans-serif;
  }

  #root {
    marigin: 0 auto;
  }
`

const H1 = styled.h1`
  font-size: 32px;
  line-height: 36px;
  font-weight: 500;
  text-align: center;
  @media (min-width: 768px) {
    font-size: 48px;
    line-height: 48px;
  }
`
export const WhiteH1 = styled(H1)`
  color: #FFF;
`
export const H2 = styled.h2`
  font-size: 28px;
  line-height: 36px;
  font-weight: 500;
  letter-spacing: 1.4px;
  text-align: center;
  @media (min-width: 768px) {
    font-size: 40px;
    line-height: 48px;
    letter-spacing: 2px;
  }
`

export const WhiteH2 = styled(H2)`
  color: #FFF
`

export const ColorH2 = styled(H2)`
  color: #E7816B;
`

export const H3 = styled.h3`
  font-size: 20px;
  line-height: 26px;
  font-weight: 500;
  letter-spacing: 5px;
  text-align: center;
`

export const GrayH3 = styled(H3)`
  color: #333136;
`

export const ColorH3 = styled(H3)`
  color: #E7816B;
`

export const Paragraph = styled.p`
  font-size: 16px;
  line-height: 26px;
  font-weight: 400;
  text-align: center;
`

export const WhiteParagraph = styled(Paragraph)`
  color: #FFF;
`

export const GrayParagraph = styled(Paragraph)`
  color: #333136;
`

const Button = styled.button`
  width: 152px;
  height: 56px;
  border: none;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 500;
  letter-spacing: 1px;
  text-transform: uppercase;
  cursor: pointer;
  transition: .2s;

  &:hover {
    background-color: #FFAD9B;
    color: #fff;
  }
`

export const WhiteButton = styled(Button)`
  background-color: #fff;
  color: #333136;
`

export const ColorButton = styled(Button)`
  background-color: #e7816b;
  color: #fff;
`
export const NavLink = styled(Link)`
  text-decoration: none;
  color: #FFF;
  font-size: 24px;
  font-weight: 400;
  line-height: 25px;
  letter-spacing: 2px;
`
