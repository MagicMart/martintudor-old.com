// @flow
import React from "react";
import styled from "styled-components";

import { logo } from "../img/logo";

const StyledHeader = styled.header`
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    margin-bottom: 20px;
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
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
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

export default Header;
