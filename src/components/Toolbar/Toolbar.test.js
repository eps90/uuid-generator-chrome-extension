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

    function getComponentUnderTest(properties = {}) {
        const {
            onRefresh = jest.fn(),
            onCopy = jest.fn(),
            uuid = "b55fcf6c-21e7-45c7-bbe0-1261f0a30ee2"
        } = properties;
        return <Toolbar onRefresh={onRefresh} uuid={uuid} onCopy={onCopy} />;
    }
});
