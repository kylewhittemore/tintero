import * as React from "react";
import styled from "styled-components";
import Hero from "../components/Hero";
import { Link } from "gatsby";

export default function IndexPage () {
  return (
    <>
      <Hero />
      <p>
        Tintero supports literary translation and the promotion of international 
        literature by providing translators and those in the literary arts with opportunities 
        to align with their creative purpose. At the heart of Tintero’s activities is an invitation to do mindful work.
      </p>
      <p>Join us for the upcoming <Link to="/openingthechannel">Opening the Channel Retreat</Link></p>
    </>
  )
}

export const Head = () => {<title>Tintero | Home</title>}