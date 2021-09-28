import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSyncAlt} from "@fortawesome/free-solid-svg-icons";
import "./Toolbar.scss";

interface Props {
    onRefresh: () => void
}

function Toolbar({onRefresh}: Props) {
    return (
        <div className="toolbar">
            <button className="toolbar-button toolbar-button--refresh" onClick={() => onRefresh()}>
                <FontAwesomeIcon icon={faSyncAlt} fixedWidth/>
                <span className="toolbar-button__label">Create new!</span>
            </button>
        </div>
    );
}

export default Toolbar;
