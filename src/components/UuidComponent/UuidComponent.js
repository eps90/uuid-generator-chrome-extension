import React from "react";
import PropTypes from "prop-types";
import UuidValue from "../UuidValue/UuidValue";
import ReactGa from "react-ga";
import "./UuidComponent.scss";
import Toolbar from "../Toolbar/Toolbar";
import {EVENT} from "../../constants";

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

    onCopy() {
        ReactGa.event(EVENT.COPY);
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
                <Toolbar onCopy={this.onCopy.bind(this)} onRefresh={this.onRefresh.bind(this)} uuid={this.state.uuid}/>
            </div>
        );
    }
}