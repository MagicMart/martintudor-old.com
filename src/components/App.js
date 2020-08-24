// @flow
import React from "react";
import styled from "styled-components";

const Page = styled.div`
    max-width: 960px;
    height: 100%;
    background: whitesmoke;
    margin: 0 auto;
`;

function App() {
    return (
        <Page>
            <h1>Hello World</h1>
        </Page>
    );
}

export default App;
