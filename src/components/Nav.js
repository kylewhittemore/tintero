import React from "react";
import { Link } from 'gatsby';
import styled from 'styled-components';

const NavStyles = styled.nav`
    ul {
        padding: 0px;
        margin: 10px;
        list-style: none;
        text-align: center;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        align-items: center;
    }
    hr {

        margin-top: 0px;
    }
`

export default function Nav() {
    return (
        <NavStyles>
            <ul>
                <li>
                    <Link to='/events'>Events</Link>
                </li>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/contact'>Contact</Link>
                </li>
            </ul>
            {/* <hr /> */}
        </NavStyles>
    )
}