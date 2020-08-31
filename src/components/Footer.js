import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
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
