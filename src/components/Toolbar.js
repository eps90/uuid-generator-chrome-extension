import React from "react";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import {faSyncAlt, faCopy} from "@fortawesome/fontawesome-free-solid";
import PropTypes from "prop-types";
import "./../styles/Toolbar.scss";
import Clipboard from "react-clipboard.js";

const Toolbar = ({onRefresh, uuid}) => (
    <div className="toolbar">
        <button className="toolbar-button toolbar-button--refresh" onClick={() => onRefresh()}>
            <FontAwesomeIcon icon={faSyncAlt} fixedWidth/>
        </button>
        <Clipboard data-clipboard-text={uuid} className="toolbar-button toolbar-button--copy">
            <FontAwesomeIcon icon={faCopy} fixedWidth/>
        </Clipboard>
    </div>
);

Toolbar.propTypes = {
    onRefresh: PropTypes.func.isRequired,
    uuid: PropTypes.string.isRequired
};

export default Toolbar;