import React from "react";
import PropTypes from "prop-types";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import {faCopy} from "@fortawesome/fontawesome-free-regular";
import {faCheck} from "@fortawesome/fontawesome-free-solid";
import Clipboard from "react-clipboard.js";

import "./UuidValue.scss";

const handleFocus = (event) => {
    event.target.select();
};

export default class UuidValue extends React.Component {
    static propTypes = {
        uuid: PropTypes.string.isRequired,
        onCopy: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);
        this.state = {
            uuid: this.props.uuid
        };
    }

    handleClick() {
        this.props.onCopy();
        this.setState({
            copiedUuid: this.props.uuid
        });
    }

    getIcon() {
        if (this.state.copiedUuid === this.props.uuid) {
            return faCheck;
        }

        return faCopy;
    }

    getButtonClassNames() {
        let classNames = "uuid__toolbar-button";
        if (this.state.copiedUuid === this.props.uuid) {
            classNames += " uuid__toolbar-button--checked";
        }

        return classNames;
    }

    render() {
        return (
            <div className="uuid">
                <input type="text" size="36" readOnly className="uuid__value" value={this.props.uuid} onFocus={handleFocus} />
                <Clipboard data-clipboard-text={this.props.uuid} className={this.getButtonClassNames()}
                    onClick={this.handleClick.bind(this)}>
                    <FontAwesomeIcon icon={this.getIcon()} fixedWidth/>
                </Clipboard>
            </div>
        );
    }
}
