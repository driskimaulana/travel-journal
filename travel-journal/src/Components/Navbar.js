import React from "react";
import WorldIcon from "../Assets/images/world.png";

// navbar components
export default function Navbar() {
    
    return (
        <nav className="navbar">
            <div className="navbar--title">
                <img src={WorldIcon} />
                <p>My Travel Journal</p>
            </div>
        </nav>
    );

}