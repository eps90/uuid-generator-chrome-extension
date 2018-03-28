import React from "react";
import PropTypes from "prop-types";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import {faCopy} from "@fortawesome/fontawesome-free-regular";
import Clipboard from "react-clipboard.js";

import "./UuidValue.scss";

const handleFocus = (event) => {
    event.target.select();
};

const UuidValue = ({uuid, onCopy}) => (
    <div className="uuid">
        <input type="text" size="36" readOnly className="uuid__value" value={uuid} onFocus={handleFocus} />
        <Clipboard data-clipboard-text={uuid} className="uuid__toolbar-button" onClick={onCopy}>
            <FontAwesomeIcon icon={faCopy} fixedWidth/>
        </Clipboard>
    </div>
);
UuidValue.propTypes = {
    uuid: PropTypes.string.isRequired,
    onCopy: PropTypes.func.isRequired
};

export default UuidValue;
