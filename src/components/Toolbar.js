import React from "react";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

const Toolbar = ({onRefresh}) => (
    <button className="toolbar-button toolbar-button--refresh" onClick={() => onRefresh()}>
        <FontAwesomeIcon icon="sync-alt" />
    </button>
);

Toolbar.propTypes = {
    onRefresh: PropTypes.func.isRequired
};

export default Toolbar;