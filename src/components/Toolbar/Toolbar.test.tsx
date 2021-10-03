import React from "react";
import Toolbar from "./Toolbar";
import {fireEvent, render} from "@testing-library/react";

describe("Toolbar component", () => {
    it("should show refresh button", () => {
        const {getByRole} = render(getComponentUnderTest());
        expect(getByRole("button")).toBeInTheDocument();
    });

    it("should call onRefresh function on click", () => {
        const onRefresh = jest.fn();
        const {getByRole} = render(getComponentUnderTest({onRefresh}));

        fireEvent.click(getByRole("button"))

        expect(onRefresh).toHaveBeenCalled();
    });

    function getComponentUnderTest(properties: any = {}) {
        const {
            onRefresh = jest.fn()
        } = properties;
        return <Toolbar onRefresh={onRefresh} />;
    }
});
