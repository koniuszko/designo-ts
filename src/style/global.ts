import styled, {createGlobalStyle, DefaultTheme, GlobalStyleComponent, StyledComponent} from "styled-components";

export const GlobalStyle: GlobalStyleComponent<{}, DefaultTheme> = createGlobalStyle`
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

export const H1 = styled.h1`
  font-size: 48px;
  line-height: 48px;
  font-weight: 500;
`
export const H2 = styled.h2`
  font-size: 40px;
  line-height: 48px;
  font-weight: 500;
  letter-spacing: 2px;
`

export const H3 = styled.h3`
  font-size: 20px;
  line-height: 26px;
  font-weight: 500;
  letter-spacing: 5px;
`

export const Paragraph = styled.p`
  font-size: 16px;
  line-height: 26px;
  font-weight: 400;
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

