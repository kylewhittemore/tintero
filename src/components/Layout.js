import React from "react";
import Footer from "./Footer";
import Nav from "./Nav";
import Hero from "./Hero"
import GlobalStyles from '../styles/GlobalStyles'
import Typography from '../styles/Typography'

export default function Layout(props) {
    return (
        <div>
            <GlobalStyles />
            <Typography />
            <Nav />
            <Hero />
            {props.children}
            <Footer />
        </div>
    )
}