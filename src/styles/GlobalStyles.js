import { createGlobalStyle } from "styled-components";
import "normalize.css";

const GlobalStyles = createGlobalStyle`
    :root {

    }
    html {
        font-size: 10px;
    }
    body {
        font-size: 2rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 0px 20px 0px 20px;
        height: 100vh;
        /* text-align: center; */
        /* p {
            text-align: center;
            max-width: 700px;
        } */
    }
    p {
        text-align: center;
        max-width: 850px;
        padding: 0px 30px;
    }
    a {
        text-decoration: underline;
        color:  #221e33;
        cursor: pointer;
    }
`

export default GlobalStyles;