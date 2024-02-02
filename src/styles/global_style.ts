import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  /* font-family: "Changa", sans-serif; */

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    transition: all .1s ease-out;
  }

  body {
    height: 100vh;
    font-family: t26-carbon, monospace;
    font-weight: 700;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  button {
    background: none;
    border: none;
    outline: none;

    &:hover {
      cursor: pointer;
    }
  }

  a {
    text-decoration: none;
  }

  #__next {
  /* fix screen background end at 70% of height */
  height: 100vh;
}
`;
