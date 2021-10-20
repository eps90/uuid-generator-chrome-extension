import React from "react";

interface CheckboxProps<T extends string> extends React.HTMLProps<HTMLInputElement> {
    label: string
    name: T,
    content: string
}

function Checkbox<T extends string>({content, label, ...props}: CheckboxProps<T>) {
    return (
        <label className="checkbox-element">
            <input aria-label={label} className="checkbox-element__control" type="checkbox" {...props} />
            <span className="checkbox-element__label">{content}</span>
        </label>
    );
}

export default Checkbox;
