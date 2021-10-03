import React from "react";
import UuidComponent from "./UuidComponent";
import ReactGa from "react-ga";
import {fireEvent, render, waitFor} from "@testing-library/react";
import {act} from "react-dom/test-utils";

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
    
    it("should send an event when onRefresh is called", async () => {
        expect.assertions(1);
        const {getByRole} = render(getComponentUnderTest());

        act(() => {
            fireEvent.click(getByRole("button", {name: /Create/}));
        })
        await waitFor(() => {
            expect(ReactGa.testModeAPI.calls).toContainEqual([
                "send", {"eventAction": "REFRESH", "eventCategory": "UI", "hitType": "event"}
            ]);
        });
    });

    it("should send an event when onCopy is called", async () => {
        const {getByTitle} = render(getComponentUnderTest());
        act(() => {
            fireEvent.click(getByTitle("Copy"))
        })

        await waitFor(() => {
            expect(ReactGa.testModeAPI.calls).toContainEqual([
                "send", {"eventAction": "COPY", "eventCategory": "UI", "hitType": "event"}
            ]);
        });
    });

    function getComponentUnderTest(generateUuidFn = createGenerateUuidFunction()) {
        return <UuidComponent generateUuid={generateUuidFn} />;
    }

    function createGenerateUuidFunction(returnValue = "3ab3482b-48d1-41fa-b5ea-ff1111042761") {
        return jest.fn().mockReturnValue(returnValue);
    }
});
