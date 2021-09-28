import React from "react";
import UuidComponent from "./UuidComponent";
import ReactGa from "react-ga";
import {fireEvent, render} from "@testing-library/react";

describe("UuidComponent", () => {
    it("should render a UUID", () => {
        const generateUuid = createGenerateUuidFunction();
        render(getComponentUnderTest(generateUuid));

        expect(generateUuid).toHaveBeenCalled();
    });
    
    it("should show generated UUID", () => {
        const generatedValue = "87385303-bca2-4c20-9b96-9d3baa98345c";
        const generateUuid = createGenerateUuidFunction(generatedValue);

        const {getByRole} = render(getComponentUnderTest(generateUuid));

        expect(getByRole("textbox")).toBeInTheDocument()
        expect(getByRole("textbox")).toHaveValue(generatedValue)
    });

    it("should display a Toolbar", () => {
        const {getByRole} = render(getComponentUnderTest());
        expect(getByRole("button", {name: /Create/})).toBeInTheDocument();
    });
    
    it("should send an event when onRefresh is called", () => {
        expect.assertions(1);

        const {getByRole} = render(getComponentUnderTest());

        fireEvent.click(getByRole("button", {name: /Create/}));
        expect(ReactGa.testModeAPI.calls).toContainEqual([
            "send", {"eventAction": "REFRESH", "eventCategory": "UI", "hitType": "event"}
        ]);
    });

    it("should send an event when onCopy is called", () => {
        expect.assertions(1);

        const {getByTitle} = render(getComponentUnderTest());
        fireEvent.click(getByTitle("Copy"))

        expect(ReactGa.testModeAPI.calls).toContainEqual([
            "send", {"eventAction": "COPY", "eventCategory": "UI", "hitType": "event"}
        ]);
    });

    function getComponentUnderTest(generateUrlFn = createGenerateUuidFunction()) {
        return <UuidComponent generateUuid={generateUrlFn} />;
    }

    function createGenerateUuidFunction(returnValue = "3ab3482b-48d1-41fa-b5ea-ff1111042761") {
        return jest.fn().mockReturnValue(returnValue);
    }
});
