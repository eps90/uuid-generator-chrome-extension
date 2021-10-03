import React, {useState} from "react";
import UuidValue from "../UuidValue/UuidValue";
import ReactGa from "react-ga";
import "./UuidComponent.scss";
import Toolbar from "../Toolbar/Toolbar";
import {EVENT} from "../../constants";

interface Props {
    generateUuid: () => string;
}

function UuidComponent({generateUuid}: Props) {
    const [uuid, setUuid] = useState<string>(generateUuid());

    const regenerateUuid = () => {
        setUuid(generateUuid());
    };

    const onRefresh = () => {
        regenerateUuid();
        ReactGa.event(EVENT.REFRESH);
    }

    const onCopy = () => {
        ReactGa.event(EVENT.COPY);
    }

    return (
        <div className="uuid-container">
            <UuidValue uuid={uuid} onCopy={onCopy}/>
            <Toolbar onRefresh={onRefresh} />
        </div>
    );
}

export default UuidComponent;
