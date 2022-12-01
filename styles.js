import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
#__next{
  height: 100vh;
}
 
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
      Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }
`;

export const StyledHeader = styled.h1`
  font-family: monospace;
  text-align: center;
  text-size-adjust: 124px;
`;

export const StyledBoard = styled.ul`
  display: flex;
  justify-content: row;
  gap: 10px;
  height: 50vh;
  padding-left: 5px;
`;
