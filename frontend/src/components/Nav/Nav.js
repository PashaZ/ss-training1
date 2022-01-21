import React from "react";
import { Link } from 'react-router-dom';


export default function Nav({LinkArray}) {
    return (
        <nav>
            <ul>
                {LinkArray.map(link =><li key= {link.id}>
                <Link to={link.path} >{link.label}</Link></li>)}
            </ul>
        </nav >     
    );
}

