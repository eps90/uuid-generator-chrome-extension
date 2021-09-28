import React from "react";
import "./Footer.scss";
import FooterLink from "../FooterLink/FooterLink";

function Footer() {
    return (
        <footer className="footer">
            <span className="footer__text">
                Created by <FooterLink className="footer__link" href="https://github.com/eps90" text="Kuba Turek"/>
            </span>
        </footer>
    );
}

export default Footer;
