import React from "react";
import toggle from '../assets/toggle-svgrepo-com.svg';

export default function Nav(props) {
    return (
       <nav className="grid grid-cols-2 w-full place-content-between items-center">
            <h4>Resume</h4>
            <img src={toggle} />
        </nav>
    )
}

