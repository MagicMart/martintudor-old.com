// @flow
import React from "react";
import styled from "styled-components";
import { GlobalStyles } from "../styles/GlobalStyles";

import Header from "./Header";
import Card from "./Card";
import Footer from "./Footer";

import cardData from "../cardData";

const Page = styled.div`
    max-width: 960px;
    min-height: 100%;
    background: var(--page-bg);
    margin: 10px auto;
    padding: 10px;
`;

const FeaturedList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    list-style-type: none;
    padding: 0 0 20px;
    margin: 0;
`;

function App() {
    return (
        <Page>
            <GlobalStyles />
            <Header />
            <main>
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
            </main>
            <Footer />
        </Page>
    );
}

export default App;
