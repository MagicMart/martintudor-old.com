// @flow
import React from "react";
import styled from "styled-components";

const StyledCard = styled.li`
    flex: 0 1 250px;
    border: 1px solid green;
    margin: 5px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    :hover {
        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    }
    img {
        width: 100%;
        border-bottom: 1px solid green;
    }
    .container {
        padding: 2px 8px;
    }
    h4 {
        margin: 0;
        text-align: center;
    }
`;

type CardProps = {
    title: string,
    img: string,
    alt: string,
    link: string,
};

function Card({ title, img, alt, link }: CardProps) {
    return (
        <StyledCard>
            <a href={link}>
                <img src={img} alt={alt} />
                <div className="container">
                    <h4>{title}</h4>
                </div>
            </a>
        </StyledCard>
    );
}

export default Card;
