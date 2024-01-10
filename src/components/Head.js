import React from "react";

export function Head({ pageContext, location, params, data }) {
    console.log(data)
    console.log(location)
    return (
        // <title>{ pageContext.title }</title>
        <title>Bloop</title>
    )
}