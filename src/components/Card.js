// @flow
import React from "react";
import styled from "styled-components";
import { logo } from "../img/logo";

const StyledCard = styled.li`
    flex: 0 1 200px;
    border: 2px solid var(--green);
    margin: 5px;
    box-shadow: var(--box-shadow);
    transition: 0.3s;
    &:hover {
        border: 2px solid var(--orange);
    }
    img {
        width: 100%;
        height: 160px;
        object-fit: cover;
        border-bottom: 2px solid var(--green);
    }

    .title {
        color: var(--black);
        font-weight: 700;
        text-align: center;
        margin: 0;
        padding: 1em 0;
    }
    .title:hover {
        color: var(--orange);
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
                <img
                    onLoad={handleImageLoad}
                    src={src}
                    alt=""
                    width="196"
                    height="160"
                />

                <p className="title">{title}</p>
            </a>
        </StyledCard>
    );
}

export default Card;
