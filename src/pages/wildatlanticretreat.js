import React from "react";
import brochure from "../PDF/brochure.pdf";
import styled from "styled-components";
import WildAtlanticHero from "../components/WildAtlanticHero";

const PageStyles = styled.div`
    h1 {
        font-weight: 900;
        font-size: 8rem;
        margin: 20px;
        line-height: .90;
        /* margin-top: 0; */
        /* max-width: 700px; */
    }
    h2 {
        font-weight: normal;
    }
    hr {
        background-color: white;
        height: 1px;
        width: 10rem;
    }
`
export default function WildAtlanticPage() {

    return (
        <>
            <PageStyles>
            <body>
                <WildAtlanticHero />
                <h1>Opening the channel</h1>
                <h2>Cloghane, Co. Kerry <span>&bull;</span> 14<sup>th</sup> - 18<sup>th</sup> march 2024</h2>
                <p>An Embodied Retreat for Literary Translators on Ireland's Wild Atlantic Way</p>
                <hr/>
                <p>Connect with Your Energy & Cultivate Your Creative Practice</p>
                <a href={brochure}>More Info!</a>
            </body>
            </PageStyles>
        </>
    )
}