import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
}

*,
::after, ::before {
  box-sizing: inherit;
}

body {
  font-family: 'Montserrat', sans-serif;
  background-color: ${({ theme }) => theme.color.gallery};
  max-width: 800px;
  margin: 0px auto;
  padding: 0px 15px;
}
`;