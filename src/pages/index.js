import * as React from "react";
import styled from "styled-components";
import Hero from "../components/Hero";

const BodyStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0px 20px 0px 20px;
  p {
    text-align: center;
    max-width: 700px;
  }
`

const IndexPage = () => {
  return (
    <>
    <Hero />
    <BodyStyles>
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

export default IndexPage
export const Head = () => {
  return (
    <>
      <meta name="icon" href="../images/favicon.ico"/>
      <title>Tintero | Home</title>
    </>
  )
}