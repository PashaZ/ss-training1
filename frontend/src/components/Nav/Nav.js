import React from "react";
import LinkArray from "./LinkArray";

export default function Nav() {
    return (
        <nav>
            <ul>
                {LinkArray.map((link) => (<li>{link}</li>))}

            </ul>
        </nav >
    )
}

