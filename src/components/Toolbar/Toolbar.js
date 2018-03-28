import React from "react";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import {faSyncAlt} from "@fortawesome/fontawesome-free-solid";
import PropTypes from "prop-types";
import "./Toolbar.scss";

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
                <button className="toolbar-button toolbar-button--refresh" onClick={() => this.props.onRefresh()}>
                    <FontAwesomeIcon icon={faSyncAlt} fixedWidth/>
                    <span className="toolbar-button__label">Create new!</span>
                </button>
            </div>
        );
    }
}
