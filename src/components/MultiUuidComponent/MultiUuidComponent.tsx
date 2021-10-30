import React, {useState} from "react";
import MultiUuidValue from "../MultiUuidValue/MultiUuidValue";
import "./MultiUuidComponent.scss";
import Toolbar from "../Toolbar/Toolbar";
import GenerationOptionsToolbar from "../GenerationOptionsToolbar/GenerationOptionsToolbar";
import ReactGa from "react-ga";
import {EVENT} from "../../constants";
import {debounce} from "lodash";

export type SeparatorType = "newline" | "comma"
export type QuoteType = "double" | "single" | "nothing";

export interface GenerationOptions {
    quotes: QuoteType,
    separators: Set<SeparatorType>,
    size: number
}

interface Props {
    generateMultiUuid: (size: number) => string[]
}

const defaultOptions: GenerationOptions = {
    quotes: "nothing",
    separators: new Set(),
    size: 10
}

function MultiUuidComponent({generateMultiUuid}: Props) {
    const [options, setOptions] = useState<GenerationOptions>({...defaultOptions, separators: new Set()});

    const formatUuids = (uuids: string[]) => {
        let separator = "";
        if (options.separators.has("comma")) {
            separator += ", "
        }
        if (options.separators.has("newline")) {
            separator = separator.trim() + "\n";
        }
        if (separator.length === 0) {
            separator = " ";
        }

        let quote = "";
        if (options.quotes === "double") {
            quote = '"';
        }
        if (options.quotes === "single") {
            quote = "'";
        }

        return uuids.map(u => `${quote}${u}${quote}`).join(separator);
    };

    const [uuids, setUuids] = useState<string[]>(generateMultiUuid(options.size));

    const onRefresh = () => {
        setUuids(generateMultiUuid(options.size));
        ReactGa.event({...EVENT.REFRESH_MULTI, label: `SIZE=${options.size}`});
    }

    const onChange = (name: keyof GenerationOptions, value: any) => {
        setOptions(currentState => {
            return {...currentState, [name]: value};
        });
        if (name === "size") {
            setUuids(generateMultiUuid(Number(value)));
        }
        sendGaEvent(name, value);
    };

    const onCopy = () => {
        ReactGa.event({...EVENT.COPY_MULTI, label: `SIZE=${options.size}`});
    };

    return (
        <div className="multi-uuid-container">
            <GenerationOptionsToolbar {...options} onChange={onChange} />
            <MultiUuidValue uuids={formatUuids(uuids)} onCopy={onCopy} />
            <Toolbar onRefresh={onRefresh} />
        </div>
    );
}

const eventsFuns: { [key in keyof Partial<GenerationOptions>]: any } = {};

const sendGaEvent = (property: keyof GenerationOptions, value: any) => {
    if (!eventsFuns[property]) {
        eventsFuns[property] = debounce((_property: keyof GenerationOptions, _value: any) => {
            let processedValue = _value
            if (_property === "separators") {
                processedValue = (_value as Set<string>).size > 0
                    ? Array.from((_value as Set<string>).values()).sort().join(",")
                    : "empty"
            }
            ReactGa.event({...EVENT.OPTION_SELECT, label: `${_property.toUpperCase()}=${processedValue}`});
        }, 1000);
    }
    return eventsFuns[property](property, value)
};

export default MultiUuidComponent;
