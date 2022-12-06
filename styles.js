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
  width: 100vw;
  overflow: auto;
}
 
  body {
    margin: 0;
    height: 100vh;
  }
`;

export const StyledHeader = styled.h1`
  font-family: monospace;
  text-align: center;
  text-size-adjust: 210px;
`;

export const StyledBoard = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 50px;
  height: 80vh;
`;

export const StyledScrollContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 82vh;
  box-sizing: content-box;
  width: 100%;
  overflow: scroll;
`;
