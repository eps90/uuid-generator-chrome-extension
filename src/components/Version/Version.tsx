import React from "react";
import "./Version.scss";

const appVersion = process.env.REACT_APP_APP_VERSION;
function Version() {
    return (
        <span className="app-version" data-cy="app-version">{appVersion}</span>
    );
}

export default Version;
