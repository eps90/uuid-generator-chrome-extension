import React from "react";
import "./Header.scss";
import Version from "../Version/Version";

function Header() {
    return (
        <div className="header">
            <span className="header__title">
                UUID Generator
            </span>
            <Version/>
        </div>
    )
}

export default Header;
