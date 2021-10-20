import React from "react";
import ModeSwitcher, {ModeType} from "./ModeSwitcher";
import {fireEvent, render} from "@testing-library/react";
import {act} from "react-dom/test-utils";

describe("ModeSwitcher component", () => {
    it("should render the mode switcher", () => {
        const {getByLabelText} = render(createComponentUnderTest());
        expect(getByLabelText("Single mode")).toBeInTheDocument();
        expect(getByLabelText("Multi mode")).toBeInTheDocument();
    });

    it("should preselect the mode", () => {
        const {getByLabelText} = render(createComponentUnderTest("multi"));
        expect(getByLabelText("Single mode")).toHaveAttribute("aria-selected", "false");
        expect(getByLabelText("Multi mode")).toHaveAttribute("aria-selected", "true");
    });

    it("should call the onSwitch function when switching modes", () => {
        const onSwitch = jest.fn();
        const {getByLabelText} = render(createComponentUnderTest("single", onSwitch));
        act(() => {
            fireEvent.click(getByLabelText("Multi mode"));
        });
        expect(onSwitch).toHaveBeenCalledWith("multi");
    });

    function createComponentUnderTest(state: ModeType = "single", onSwitch = () => {}) {
        return <ModeSwitcher state={state} onSwitch={onSwitch} />;
    }
});
