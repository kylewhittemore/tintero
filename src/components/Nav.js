import React from "react";
import { Link } from 'gatsby';

export default function Nav() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to='/events'>Events</Link>
                </li>
                <li>
                    <Link to='/'>Home</Link>
                </li>
            </ul>
        </nav>
    )
}