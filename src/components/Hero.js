import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { styled } from "styled-components";

const HeroStyles = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px 20px 10px 20px;
`

export function HeroImage() {
    return (
        <StaticImage
        src="../images/tintero_updated_horiz2.png"
        alt="Tintero Logo"
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
