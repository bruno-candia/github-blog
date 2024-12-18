import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }


    body {
      background: ${({ theme }) => theme.colors["base-background"]};
      color: ${({ theme }) => theme.colors["base-text"]};
      -webkit-font-smoothing: antialiased;
    }


    &:focus {
      outline: 0;
      box-shadow: 0 0 0 0.2rem ${({ theme }) => theme.colors["base-border"]};
    }


    body, input, textarea, button {
      font: 1rem "Nunito", sans-serif;
    }
`;
