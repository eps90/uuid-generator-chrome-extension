import React, {useState} from "react";
import "./MultiUuidValue.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {IconDefinition} from "@fortawesome/fontawesome-svg-core";
import {faCheck} from "@fortawesome/free-solid-svg-icons";
import {faCopy} from "@fortawesome/free-regular-svg-icons";

interface Props {
    uuids: string,
    onCopy: () => void
}

function MultiUuidValue({uuids, onCopy}: Props) {
    const [copiedUuid, setCopiedUuid] = useState<string>();

    const handleFocus = (event: any) => {
        event.target.select();
    };

    const getButtonClassNames = () => {
        let classNames = "multi-uuid__toolbar-button";
        if (copiedUuid === uuids) {
            classNames += " multi-uuid__toolbar-button--checked";
        }

        return classNames;
    }

    const handleCopy = async () => {
        await window.navigator.clipboard.writeText(uuids);
        setCopiedUuid(uuids);
        onCopy();
    };

    const getIcon = (): IconDefinition => {
        return copiedUuid === uuids ? faCheck : faCopy;
    };

    return (
        <div className="multi-uuid">
            <textarea className="multi-uuid__value" readOnly value={uuids} onFocus={handleFocus} data-cy="multi-uuid-value" />
            <button className={getButtonClassNames()} onClick={handleCopy} title="Copy" data-cy="multi-uuid-copy-btn">
                <FontAwesomeIcon icon={getIcon()} fixedWidth/>
            </button>
        </div>
    );
}

export default MultiUuidValue;
