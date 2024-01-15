import React from "react";
import brochure from "../PDF/brochure.pdf";

export default function WildAtlanticPage() {
    return (
        <div>
            <p>Wild Atlantic Page</p>
            <a href={brochure}>More Info!</a>
        </div>
    )
}