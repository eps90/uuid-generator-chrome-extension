import React from "react";
import PropTypes from "prop-types";
import UuidValue from "./UuidValue";
import ReactGa from "react-ga";

import "./../styles/UuidComponent.scss";
import Toolbar from "./Toolbar";
import {EVENT} from "../constants";

export default class UuidComponent extends React.Component {
    static propTypes = {
        generateUuid: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);
        this.state = {
            uuid: null
        };
    }

    componentWillMount() {
        this.setUuidInState();
    }

    onRefresh() {
        this.setUuidInState();
        ReactGa.event(EVENT.REFRESH);
    }

    setUuidInState() {
        const uuid = this.props.generateUuid();
        this.setState({
            uuid
        });
    }

    render() {
        return (
            <div className="uuid-container">
                <span className="uuid-container__label">
                    UUID v4:
                </span>
                <UuidValue uuid={this.state.uuid}/>
                <Toolbar onRefresh={this.onRefresh.bind(this)} uuid={this.state.uuid}/>
            </div>
        );
    }
}