import React from "react";
import ReactGa from "react-ga";
import {EVENT} from "../../constants";

function followLink(linkHref: string) {
    ReactGa.event({...EVENT.LINK_CLICK, label: linkHref});
    window.chrome.tabs ? window.chrome.tabs.create({url: linkHref}) : document.location.href = linkHref;
}

interface Props extends React.HTMLAttributes<HTMLAnchorElement>{
    href: string,
    text: string
}

function FooterLink({href, text, ...props}: Props) {
    return (
        <a href={href} {...props} onClick={() => followLink(href)}>{text}</a>
    )
}

export default FooterLink;
