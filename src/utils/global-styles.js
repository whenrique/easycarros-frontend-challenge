import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root {
    font-size: 10px;
    font-size: 'Open Sans', sans-serif;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`

export default GlobalStyle
