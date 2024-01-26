import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { styled } from "styled-components";

import brochure from "../PDF/opening_the_channel_retreat.pdf";
import OpeningTheChannelHero from "../components/OpeningTheChannelHero";

const PageStyles = styled.div`
    h1 {
        font-weight: 900;
        font-size: 7rem;
        margin: 20px;
        line-height: .95;
    }
    h2 {
        font-weight: normal;
        font-size: 2.5rem;
    }
    hr {
        background-color: white;
        height: 1px;
        width: 10rem;
    }
    p {
        margin: 10px 0px;
    }
    a {
        text-decoration: none;
        color:  #221e33;
        cursor: pointer;
    }
    ul {
        display: inline-block;
        text-align: left;
        list-style-type: none;
    }
`
export default function OpeningTheChannelPage() {

    return (
        <>
            <PageStyles>
                <OpeningTheChannelHero />
                    <h1>Opening the Channel</h1>
                    <h2>Cloghane, Co. Kerry <span>&bull;</span> 14<sup>th</sup> - 18<sup>th</sup> March 2024</h2>
                    <p>An Embodied Retreat for Wordsmiths on Ireland's Wild Atlantic Way</p>
                    <hr/>
                    <p>Connect with Your Energy & Cultivate Your Creative Practice</p>
                    <div>
                        <ul>
                            <li>Interested? <a href={brochure}>Get full details here.</a></li>
                            <li>Questions? <a href="mailto:openingthechannelretreat@gmail.com">Contact us.</a></li>            
                            <li>Ready to jump in? <a href="https://docs.google.com/forms/d/1hZ5zjfJqsdCtbLWk1EU_5UAvc6_xt781zKvJmXmtrcQ/edit?ts=65a2d514">Apply now.</a></li>            
                        </ul>
                    </div>
                <Footer />
            </PageStyles>
        </>
    )
}

const FooterStyles = styled.div`
    display: flex;
    flex-direction: row;
    gap: 40px;
    align-items: flex-end;
    justify-content: center;
    padding: 10px 20px 10px 20px;
    margin-top: 20px;
`

function FooterImages() {
    return (
        <>
            <StaticImage
                src="../images/tintero_vert_white.png"
                alt="Tintero Logo"
                placeholder="blurred"
                width={100}
            />
            <StaticImage
                src="../images/human_behavior_white.png"
                alt="Human Behavior Logo"
                placeholder="blurred"
                width={150}
            />
        </>
      )
    }

function Footer () {
    return (
        <FooterStyles>
            <FooterImages />
        </FooterStyles>
    )
}
export const Head = () => <title>Opening the Channel</title>;