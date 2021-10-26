import React from "react";
import App from "./App";
import {fireEvent, render} from "@testing-library/react";
import {act} from "react-dom/test-utils";
import ReactGa from "react-ga";

describe("App component", () => {
    it("should render a UuidComponent component", () => {
        const {getByRole} = render(<App/>);
        expect(getByRole("textbox")).toBeInTheDocument();
    });

    it("should should send an event on switching the app mode", () => {
        const {getByLabelText} = render(<App />);
        act(() => {
            fireEvent.click(getByLabelText("Multi mode"));
            fireEvent.click(getByLabelText("Single mode"));
        });

        expect(ReactGa.testModeAPI.calls).toContainEqual([
            "send", {"eventAction": "MODE_SELECT", "eventCategory": "UI", "eventLabel": "MULTI", "hitType": "event"},
        ]);
        expect(ReactGa.testModeAPI.calls).toContainEqual([
            "send", {"eventAction": "MODE_SELECT", "eventCategory": "UI", "eventLabel": "SINGLE", "hitType": "event"}
        ]);
    });
});
