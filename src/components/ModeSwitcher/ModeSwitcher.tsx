import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./ModeSwitcher.scss";
import {faHashtag, faInfinity} from "@fortawesome/free-solid-svg-icons";

export type ModeType = "single" | "multi"

interface Props {
    state: ModeType
    onSwitch: (state: ModeType) => void
}

function ModeSwitcher({state, onSwitch}: Props) {
    const getClassName = (activeState: ModeType) => {
        const classes = ["mode-switcher__mode"];
        if (state === activeState) {
            classes.push("mode-switcher__mode--active");
        }
        return classes.join(" ");
    }

    const getAriaAttributes = (activeState: ModeType) => {
        const attrs = {
            "aria-selected": false
        };
        if (state === activeState) {
            attrs["aria-selected"] = true
        }

        return attrs;
    }

    const handleOnClick = (selectedState: ModeType) => () => {
        selectedState !== state && onSwitch(selectedState);
    }

    return (
        <div className="mode-switcher">
            <button aria-label="Single mode" {...getAriaAttributes("single")}
                    className={getClassName("single")}
                    onClick={handleOnClick("single")}
                    data-cy="single-mode-switcher"
            >
                <FontAwesomeIcon icon={faHashtag} />
            </button>
            <button aria-label="Multi mode" {...getAriaAttributes("multi")}
                    className={getClassName("multi")}
                    onClick={handleOnClick("multi")}
                    data-cy="multi-mode-switcher"
            >
                <FontAwesomeIcon icon={faInfinity} />
            </button>
        </div>
    );
}

export default ModeSwitcher;
