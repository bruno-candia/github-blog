import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }


    body {
      background: ${({ theme }) => theme["base-background"]};
      color: ${({ theme }) => theme["base-text"]};
      -webkit-font-smoothing: antialiased;
    }


    &:focus {
      outline: 0;
      box-shadow: 0 0 0 0.2rem ${({ theme }) => theme["base-border"]};
    }


    body, input, textarea, button {
      font-family: 'Roboto', sans-serif;
      font-size: 16px;
    }
`;
