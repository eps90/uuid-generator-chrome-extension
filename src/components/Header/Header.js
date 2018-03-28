import React from "react";
import "./Header.scss";
import Version from "../Version/Version";

const Header = () => (
    <div className="header">
        <span className="header__title">
            UUID Generator
        </span>
        <Version />
    </div>
);

export default Header;
