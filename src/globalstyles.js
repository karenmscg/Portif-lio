import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    overflow-x: hidden;
}

body {
    background: ${props => props.theme.body};
}
`;
