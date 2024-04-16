import * as React from "react";
import styled from "styled-components";
import Hero from "../components/Hero";
import { Link } from "gatsby";

export default function IndexPage () {
  return (
    <>
      <Hero />
      <p>
        Tintero fosters creative intuition and its expression in artistic practice and everyday life. 
        Through workshops, retreats, and residency spaces, Tintero provides opportunities for individuals 
        to align with their creative purpose.
      </p>
      <p>Join us for the upcoming <Link to="/openingthechannel">Opening the Channel Retreat</Link></p>
    </>
  )
}

export const Head = () => {<title>Tintero | Home</title>}