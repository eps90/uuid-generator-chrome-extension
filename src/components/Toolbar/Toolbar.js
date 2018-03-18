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

    constructor(props) {
        super(props);
        this.state = {
            copyText: "Copy"
        };
    }

    onCopy() {
        this.changeCopyText();
        this.props.onCopy();
    }

    changeCopyText() {
        this.setState({
            copyText: "Copied!"
        });

    }

    resetCopyText() {
        this.setState({
            copyText: "Copy"
        });
    }

    render() {
        return (
            <div className="toolbar">
                <Tooltip title="Re-generate">
                    <button className="toolbar-button toolbar-button--refresh" onClick={() => this.props.onRefresh()}>
                        <FontAwesomeIcon icon={faSyncAlt} fixedWidth/>
                    </button>
                </Tooltip>
                <Tooltip html={this.state.copyText} hideOnClick={false} onHidden={this.resetCopyText.bind(this)}>
                    <Clipboard data-clipboard-text={this.props.uuid} className="toolbar-button toolbar-button--copy"
                        onClick={() => this.onCopy()}>
                        <FontAwesomeIcon icon={faCopy} fixedWidth/>
                    </Clipboard>
                </Tooltip>
            </div>
        );
    }
}