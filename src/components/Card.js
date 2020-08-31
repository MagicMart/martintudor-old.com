// @flow
import React from "react";
import styled from "styled-components";
import { logo } from "../img/logo";

const StyledCard = styled.li`
    flex: 0 1 200px;
    border: 2px solid green;
    margin: 5px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    &:hover {
        border: 2px solid #d15c21;
    }
    img {
        width: 100%;
        height: 160px;
        object-fit: cover;
        border-bottom: 2px solid green;
    }

    .title {
        color: #4a4a4a;
        font-weight: 700;
        text-align: center;
        margin: 0;
        padding: 1em 0;
    }
    .title:hover {
        color: #d15c21;
    }
`;

type CardProps = {
    title: string,
    img: string,
    alt: string,
    link: string,
};

function Card({ title, img, alt, link }: CardProps) {
    const [src, setSrc] = React.useState(logo);

    const handleImageLoad = () => setSrc(img);

    return (
        <StyledCard>
            <a href={link}>
                <img onLoad={handleImageLoad} src={src} alt={alt} />

                <p className="title">{title}</p>
            </a>
        </StyledCard>
    );
}

export default Card;
