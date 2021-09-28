import React from "react";
import "./Version.scss";

const appVersion = process.env.APP_VERSION;
function Version() {
    return (
        <span className="app-version">{appVersion}</span>
    );
}

export default Version;
