import * as React from "react";
import styled from "styled-components";
import Hero from "../components/Hero";

const BodyStyles = styled.div`
  /* display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0px 20px 0px 20px;
  height: 100vh;
  p {
    text-align: center;
    max-width: 700px;
  } */
`

export default function IndexPage () {
  return (
    <>
    <BodyStyles>
    <Hero />
        <div>
          <p>
            Tintero supports literary translation and the promotion of international 
            literature by providing translators and those in the literary arts with opportunities 
            to align with their creative purpose. At the heart of Tintero’s activities is an invitation to do mindful work.
          </p>
      </div>
    </BodyStyles>
    </>
  )
}

export const Head = () => {<title>Tintero | Home</title>}