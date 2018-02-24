import React from "react";
import PropTypes from "prop-types";
import UuidValue from "./UuidValue";

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
        const uuid = this.props.generateUuid();
        this.setState({
            uuid
        });
    }

    render() {
        return <UuidValue uuid={this.state.uuid}/>;
    }
}