import React from "react";
import Footer from "./Footer";
import Nav from "./Nav";
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';
import "normalize.css";

export default function Layout(props) {
    return (
        <div>
            <GlobalStyles />
            <Typography />
            {/* <Nav /> */}
            {props.children}
            <Footer />
        </div>
    )
}