import React from "react";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import {faSyncAlt, faCopy} from "@fortawesome/fontawesome-free-solid";
import PropTypes from "prop-types";
import "./Toolbar.scss";
import Clipboard from "react-clipboard.js";
import {Tooltip} from "react-tippy";

export default class Toolbar extends React.Component {
    static propTypes = {
        onRefresh: PropTypes.func.isRequired,
        onCopy: PropTypes.func.isRequired,
        uuid: PropTypes.string.isRequired
    };

    render() {
        return (
            <div className="toolbar">
                <Tooltip title="Refresh">
                    <button className="toolbar-button toolbar-button--refresh" onClick={() => this.props.onRefresh()}>
                        <FontAwesomeIcon icon={faSyncAlt} fixedWidth/>
                    </button>
                </Tooltip>
                <Tooltip title="Copy">
                    <Clipboard data-clipboard-text={this.props.uuid} className="toolbar-button toolbar-button--copy"
                        onClick={() => this.props.onCopy()}>
                        <FontAwesomeIcon icon={faCopy} fixedWidth/>
                    </Clipboard>
                </Tooltip>
            </div>
        );
    }
}