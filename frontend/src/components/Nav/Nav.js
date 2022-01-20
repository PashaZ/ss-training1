import React from "react";

export default function Nav({LinkArray}) {
    return (
        <nav>
            <ul>
                {LinkArray.map(link => <li key= {link.id}>{link}</li>)}
            </ul>
        </nav >
              
    );
}

