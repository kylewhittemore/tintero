import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { styled } from "styled-components";

const HeroStyles = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* padding: 20px 20px 10px 20px; */
`

export function HeroImage() {
    return (
        <StaticImage
        src="../images/spirals_horizontal.png"
        alt="Spirals"
          placeholder="blurred"
          width={850}
        />
      )
    }

export default function Hero () {
    return (
        <HeroStyles>
            <HeroImage />
        </HeroStyles>
    )
}