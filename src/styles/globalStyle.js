import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html {
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    -webkit-text-size-adjust: 100%;
    -moz-text-size-adjust: 100%;
  }
  body {
    font-family: ${(props) => props.theme.fonts.body};
  }

  p {
    line-height: 1.5;
  }
`

export default GlobalStyle
