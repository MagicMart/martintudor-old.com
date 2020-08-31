// @flow
import React from "react";
import styled from "styled-components";

import Header from "./Header";
import Card from "./Card";

import cardData from "../cardData";

const Page = styled.div`
    max-width: 960px;
    min-height: 100%;
    background: whitesmoke;
    margin: 10px auto;
    padding: 10px;
`;

const FeaturedList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    list-style-type: none;
    padding: 0;
    margin: 0;
`;

function App() {
    return (
        <Page>
            <Header />
            <FeaturedList>
                {cardData.map(({ title, img, alt, link }) => (
                    <Card
                        key={title}
                        title={title}
                        img={img}
                        alt={alt}
                        link={link}
                    />
                ))}
            </FeaturedList>
        </Page>
    );
}

export default App;
