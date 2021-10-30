import React from "react";
import {v4} from "uuid";
import {fireEvent, render, waitFor} from "@testing-library/react";
import MultiUuidValue from "./MultiUuidValue";
import {act} from "react-dom/test-utils";

describe("MultiUuidVale component", () => {
    it("should render the uuid provided as prop", () => {
        const uuids = getTestUuidsString();
        const {getByRole} = render(createComponentUnderTest({uuids}))
        expect(getByRole("textbox")).toHaveValue(uuids);
    });

    it("should call onCopy when copying the value", async () => {
        const onCopy = jest.fn();
        const {getByTitle} = render(createComponentUnderTest({onCopy}));
        act(() => {
            fireEvent.click(getByTitle("Copy"))
        });
        await waitFor(() => expect(onCopy).toHaveBeenCalled());
    });

    it("should disable the button if uuid list is empty", () => {
        const {getByTitle} = render(createComponentUnderTest({uuids: ""}))
        expect(getByTitle("Copy")).toBeDisabled();
    });

    it("should not call onCopy when copying is disabled", async () => {
        const onCopy = jest.fn();
        const {getByTitle} = render(createComponentUnderTest({uuids: "", onCopy}));
        act(() => {
            fireEvent.click(getByTitle("Copy"))
        });
        await waitFor(() => expect(onCopy).not.toHaveBeenCalled());
    });

    function createComponentUnderTest(properties: any = {}) {
        const {
            uuids = getTestUuidsString(),
            onCopy = () => {}
        } = properties;

        return <MultiUuidValue uuids={uuids} onCopy={onCopy} />
    }

    function getTestUuidsString() {
        const result = [];
        for (let i = 0; i < 5; i++) {
            result.push(v4())
        }
        return result.join(" ");
    }
});
