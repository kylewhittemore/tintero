import * as React from "react"
import styled from "styled-components"

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
    <BodyStyles>
        <div>
          <p>
            Tintero is an initiative to support literary translation and promote international literature
            by providing translators and other literary creatives with opportunities to quiet their
            minds, open their hearts, and connect with their vision in order to create their most
            inspired work.
          </p>
      </div>
    </BodyStyles>
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