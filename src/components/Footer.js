import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
    box-shadow: var(--box-shadow);
    display: flex;
    justify-content: center;
    align-items: center;
`;

function Footer() {
    return (
        <StyledFooter>
            <p>
                Created by{" "}
                <a href="https://github.com/MagicMart">
                    https://github.com/MagicMart
                </a>
            </p>
        </StyledFooter>
    );
}

export default Footer;
