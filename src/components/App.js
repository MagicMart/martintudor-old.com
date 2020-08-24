// @flow
import React from "react";
import styled from "styled-components";

const Page = styled.div`
    max-width: 960px;
    height: 100%;
    background: whitesmoke;
    margin: 10px auto;
    padding: 10px;
`;

const StyledHeader = styled.header`
    display: flex;
    .subtitle {
        display: block;
        font-size: 1.4rem;
        font-weight: 700;
        color: #d15c21;
        text-align: center;
    }
`;

function Header() {
    return (
        <StyledHeader>
            <div>
                <h1 className="title">
                    Martin Tudor
                    <span className="subtitle">Web Developer</span>
                </h1>
            </div>
        </StyledHeader>
    );
}

function App() {
    return (
        <Page>
            <Header />
            <hr />
        </Page>
    );
}

export default App;
