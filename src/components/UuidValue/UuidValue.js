import React from "react";
import PropTypes from "prop-types";

import "./UuidValue.scss";

const UuidValue = ({uuid}) => (
    <span className="uuid-value">{uuid}</span>
);
UuidValue.propTypes = {
    uuid: PropTypes.string.isRequired
};

export default UuidValue;