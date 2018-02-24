import React from "react";
import PropTypes from "prop-types";

const UuidValue = ({uuid}) => (
    <span>{uuid}</span>
);
UuidValue.propTypes = {
    uuid: PropTypes.string.isRequired
};

export default UuidValue;