import React from "react";
import { Link } from 'gatsby';
import logo from '../images/tintero_black_logo.png';
import styled from 'styled-components';

const NavStyles = styled.nav`
    ul {
        padding: 0px;
        margin: 10px;
        list-style: none;
        text-align: center;
        display: grid;
        grid-template-columns: 1fr auto 1fr;
        align-items: center;
    }
    img {
        max-height: 50px;
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
                    <Link to='/'>
                        <img 
                            src={logo} 
                            alt="Logo"
                        />
                    </Link>
                </li>
                <li>
                    <Link to='/contact'>Contact</Link>
                </li>
            </ul>
            <hr />
        </NavStyles>
    )
}