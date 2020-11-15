import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

:root {
    --blue: #add8e6;
    --black: #4a4a4a;
    --white: whitesmoke;
    --green: green;
    --orange: #d15c21;
    --body-bg: var(--blue);
    --page-bg: #e8e8e8;
    --box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}

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
    background: var(--body-bg);
    color: var(--black);
}

body {
    margin: 0;
    padding: 0;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    color: var(--black);
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
        "Oxygen", "Ubuntu", "Helvetica Neue", Arial, sans-serif;
    font-size: 1rem;
    line-height: 1.4;
    text-rendering: optimizelegibility;
}
`;

export { GlobalStyles };
