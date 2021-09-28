import React, {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Clipboard from "react-clipboard.js";
import "./UuidValue.scss";
import {IconDefinition} from "@fortawesome/fontawesome-svg-core";
import {faCheck} from "@fortawesome/free-solid-svg-icons";
import {faCopy} from "@fortawesome/free-regular-svg-icons";

const handleFocus = (event: any) => {
    event.target.select();
};

interface Props {
    uuid: string,
    onCopy: () => void
}

function UuidValue({uuid, onCopy}: Props) {
    const [copiedUuid, setCopiedUuid] = useState<string>();

    const handleCopy = () => {
        onCopy();
        setCopiedUuid(uuid);
    };

    const getIcon = (): IconDefinition => {
        return copiedUuid === uuid ? faCheck : faCopy;
    };

    const getButtonClassNames = () => {
        let classNames = "uuid__toolbar-button";
        if (copiedUuid === uuid) {
            classNames += " uuid__toolbar-button--checked";
        }

        return classNames;
    }

    return (
        <div className="uuid">
            <input type="text" size={37} readOnly className="uuid__value" value={uuid} onFocus={handleFocus} />
            <Clipboard data-clipboard-text={uuid} className={getButtonClassNames()}
                       onClick={handleCopy} button-title="Copy">
                <FontAwesomeIcon icon={getIcon()} fixedWidth/>
            </Clipboard>
        </div>
    );
}

export default UuidValue;

