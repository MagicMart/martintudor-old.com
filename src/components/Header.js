// @flow
import React from "react";
import styled from "styled-components";

import { logo } from "../img/logo";

const StyledHeader = styled.header`
    box-shadow: var(--box-shadow);
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

    a {
        text-decoration: none;
    }
    .subtitle {
        box-shadow: var(--box-shadow);
        display: block;
        font-size: 1.2rem;
        font-weight: 700;
        color: var(--orange);
        text-align: center;
        padding: 4px;
    }
`;

function Header() {
    return (
        <StyledHeader>
            <div className="logo_container">
                <img height="100" width="100" src={logo} alt="logo" />
                <h1 className="title">
                    Martin Tudor
                    <a href="https://github.com/MagicMart">
                        <span className="subtitle">Web Developer</span>
                    </a>
                </h1>
            </div>
        </StyledHeader>
    );
}

export default Header;
