import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
  }

  body {
    background: '#FAFAFA';
    color: '#272221';
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  @media (max-width: 768px) {
  html {
    font-size: 87.5%;
  }
}

  @media only screen and (max-width: 1440px) {
    html {
      font-size: 100%;
    }
  }

  @media only screen and (min-width: 1440px) and (orientation : landscape) {
    html {
      font-size: 133%;
    }
  }
`