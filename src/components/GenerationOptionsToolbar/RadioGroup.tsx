import React, {ReactElement} from "react";

interface RadioProps extends React.HTMLProps<HTMLInputElement> {
    label: string,
    content: string
}

export function Radio({label, className, content, ...props}: RadioProps) {
    return (
        <label className="radio-element">
            <input type="radio" aria-label={label} className={["radio-element__control", className].join(" ")} {...props} />
            <span className="radio-element__label">{content}</span>
        </label>
    );
}

interface RadioGroupProps {
    name: string,
    onChange: (val: string) => void
    selectedValue?: string,
    children: ReactElement[]
}

export function RadioGroup({children, name, onChange, selectedValue}: RadioGroupProps) {
    const _onChange = (e: React.FormEvent<HTMLInputElement>) => {
        onChange(e.currentTarget.value);
    }

    const getChildProps = (radioProps: RadioProps) => {
        return {
            ...radioProps,
            name,
            onChange: _onChange,
            checked: selectedValue === radioProps.value,
            "data-cy": `radio_${name}_${radioProps.value}`
        }
    }

    return <>
        {React.Children.map(children, (child: ReactElement) => {
            // TODO: Filter out non Radio components
            return React.cloneElement(child, getChildProps(child.props));
        })}
    </>;
}
