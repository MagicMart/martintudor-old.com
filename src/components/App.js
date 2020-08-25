// @flow
import React from "react";
import styled from "styled-components";

import { logo } from "../img/logo";

const Page = styled.div`
    max-width: 960px;
    height: 100%;
    background: whitesmoke;
    margin: 10px auto;
    padding: 10px;
`;

const StyledHeader = styled.header`
    .logo_container {
        display: flex;
        align-items: center;
        max-width: 300px;
    }
    .title {
        font-size: 1.5rem;
        margin: 0 auto;
    }
    .subtitle {
        display: block;
        font-size: 1.2rem;
        font-weight: 700;
        color: #d15c21;
        text-align: center;
    }
`;

function Header() {
    return (
        <StyledHeader>
            <div className="logo_container">
                <img src={logo} alt="logo" />
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
