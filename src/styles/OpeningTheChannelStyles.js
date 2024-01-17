import { createGlobalStyle } from "styled-components";
import "normalize.css";

const OpeningTheChannelStyles = createGlobalStyle`
    :root {

    }
    html {
        font-size: 10px;
        color: white;
        font-family: 'dm sans'
    }
    body {
        font-size: 2rem;
        background-color: #e94f2f;
        text-align: center;
        min-width: 370px;
        padding: 20px;
    }
`

export default OpeningTheChannelStyles;