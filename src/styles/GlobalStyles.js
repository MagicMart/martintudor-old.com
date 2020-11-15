import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    html {
    box-sizing: border-box;
}

*,
*:before,
*:after {
    box-sizing: inherit;
}

html,
body,
#app {
    height: 100%;
    background: #add8e6;
    color: #4a4a4a;
}

body {
    margin: 0;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    color: #4a4a4a;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
        "Oxygen", "Ubuntu", "Helvetica Neue", Arial, sans-serif;
    font-size: 1rem;
    text-rendering: optimizelegibility;
}
`;
