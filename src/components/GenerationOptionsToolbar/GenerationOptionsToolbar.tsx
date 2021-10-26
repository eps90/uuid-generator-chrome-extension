import React from "react";
import "./GenerationOptionsToolbar.scss";
import {Radio, RadioGroup} from "./RadioGroup";
import {GenerationOptions, SeparatorType} from "../MultiUuidComponent/MultiUuidComponent";
import Checkbox from "./Checkbox";

interface Props extends GenerationOptions {
    onChange: (name: string, value: any) => void
}

function GenerationOptionsToolbar({quotes, separators, size, onChange}: Props) {
    const onSeparatorChange = (e: React.FormEvent<HTMLInputElement>) => {
        const type = e.currentTarget.name as SeparatorType;
        let targetSet = separators;
        if (e.currentTarget.checked) {
            targetSet?.add(type)
        } else {
            targetSet?.delete(type)
        }
        onChange("separators", targetSet);
    }

    return (
        <div className="options">
            <div className="options__group">
                <RadioGroup name="quotes" onChange={(e) => onChange("quotes", e)} selectedValue={quotes}>
                    <Radio value="nothing" label="None" content="#" />
                    <Radio value="single" label="Single" content={`'#'`} />
                    <Radio value="double" label="Double" content={`"#"`} />
                </RadioGroup>
            </div>
            <div className="options__group">
                <Checkbox content="," label="Comma" name="comma" checked={separators?.has("comma")} onChange={onSeparatorChange}/>
                <Checkbox content="\n" label="New line" name="newline" checked={separators?.has("newline")} onChange={onSeparatorChange} />
            </div>
            <div className="options__group">
                <label className="input-element">
                    <input type="number" name="size" value={size} min="0"
                           className="input-element__control"
                           aria-label="size"
                           onChange={(e) => onChange("size", e.target.value)} />
                </label>
            </div>
        </div>
    )
}

export default GenerationOptionsToolbar;
