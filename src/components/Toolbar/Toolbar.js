import React from "react";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import {faSyncAlt, faCopy} from "@fortawesome/fontawesome-free-solid";
import PropTypes from "prop-types";
import "./Toolbar.scss";
import Clipboard from "react-clipboard.js";
import {Tooltip} from "react-tippy";

const Toolbar = ({onRefresh, uuid}) => (
    <div className="toolbar">
        <Tooltip title="Refresh">
            <button className="toolbar-button toolbar-button--refresh" onClick={() => onRefresh()}>
                <FontAwesomeIcon icon={faSyncAlt} fixedWidth/>
            </button>
        </Tooltip>
        <Tooltip title="Copy">
            <Clipboard data-clipboard-text={uuid} className="toolbar-button toolbar-button--copy">
                <FontAwesomeIcon icon={faCopy} fixedWidth/>
            </Clipboard>
        </Tooltip>
    </div>
);

Toolbar.propTypes = {
    onRefresh: PropTypes.func.isRequired,
    uuid: PropTypes.string.isRequired
};

export default Toolbar;