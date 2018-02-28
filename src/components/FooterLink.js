import React from "react";
import PropTypes from "prop-types";
import ReactGa from "react-ga";
import {EVENT} from "../constants";

function followLink(linkHref) {
    ReactGa.event({...EVENT.LINK_CLICK, label: linkHref});
    window.chrome.tabs ? window.chrome.tabs.create({url: linkHref}) : document.location.href = linkHref;
}

const FooterLink = ({href, text, ...props}) => (
    <a href={href} {...props} onClick={() => followLink(href)}>{text}</a>
);

FooterLink.propTypes = {
    href: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
};

export default FooterLink;