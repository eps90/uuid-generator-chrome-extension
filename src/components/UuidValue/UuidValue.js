import React from "react";
import PropTypes from "prop-types";

import "./UuidValue.scss";

const UuidValue = ({uuid}) => (
    <input type="text" readOnly className="uuid-value" value={uuid} />
);
UuidValue.propTypes = {
    uuid: PropTypes.string.isRequired
};

export default UuidValue;
