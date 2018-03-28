import React from "react";
import PropTypes from "prop-types";

import "./UuidValue.scss";

const handleFocus = (event) => {
    event.target.select();
};

const UuidValue = ({uuid}) => (
    <input type="text" readOnly className="uuid-value" value={uuid} onFocus={handleFocus} />
);
UuidValue.propTypes = {
    uuid: PropTypes.string.isRequired
};

export default UuidValue;
