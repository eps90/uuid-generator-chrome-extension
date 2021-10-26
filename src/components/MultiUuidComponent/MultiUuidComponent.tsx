import React, {useState} from "react";
import MultiUuidValue from "../MultiUuidValue/MultiUuidValue";
import "./MultiUuidComponent.scss";
import Toolbar from "../Toolbar/Toolbar";
import GenerationOptionsToolbar from "../GenerationOptionsToolbar/GenerationOptionsToolbar";
import ReactGa from "react-ga";
import {EVENT} from "../../constants";

export type SeparatorType = "newline" | "comma"
export type QuoteType = "double" | "single" | "none";

export interface GenerationOptions {
    quotes: QuoteType,
    separators: Set<SeparatorType>,
    size: number
}

interface Props {
    generateMultiUuid: (size: number) => string[]
}

const defaultOptions: GenerationOptions = {
    quotes: "none",
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
            separator += "\n";
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

    const onChange = (name: string, value: any) => {
        setOptions(currentState => {
            return {...currentState, [name]: value};
        });
        if (name === "size") {
            setUuids(generateMultiUuid(Number(value)));
        }
        let processedValue = value;
        if (name === "separators") {
            processedValue = Array.from((value as Set<string>).values()).sort().join(",")
        }
        ReactGa.event({...EVENT.OPTION_SELECT, label: `${name.toUpperCase()}=${processedValue}`});
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

export default MultiUuidComponent;
