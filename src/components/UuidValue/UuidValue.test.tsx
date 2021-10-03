import React from "react";
import UuidValue from "./UuidValue";
import {fireEvent, render, waitFor} from "@testing-library/react";
import {act} from "react-dom/test-utils";

describe("UuidValue component", () => {
    it("should render an input", () => {
        const {getByRole} = render(createComponentUnderTest());

        expect(getByRole("textbox")).toBeInTheDocument();
    });

    it("should show passed-in value", () => {
        const uuid = "79da067a-c95f-47b7-8e2f-c50833fc1652";
        const {getByRole} = render(createComponentUnderTest({uuid}));

        expect(getByRole("textbox")).toHaveValue(uuid);
    });

    describe("Toolbar", () => {
        it("should show copy button", () => {
            const uuid = "b813b672-f1d8-4b37-98db-9dd750393bbf";
            const {getByTitle} = render(createComponentUnderTest({uuid}));

            expect(getByTitle("Copy")).toBeInTheDocument();
        });

        it("should call onCopy function on successful copy", async () => {
            const onCopy = jest.fn();
            const {getByTitle} = render(createComponentUnderTest({onCopy}));
            act(() => {
                fireEvent.click(getByTitle("Copy"));
            })
            await waitFor(() => expect(onCopy).toHaveBeenCalled());
        });
    });

    function createComponentUnderTest(properties: any = {}) {
        const {
            uuid = "82660ed3-d567-49b7-82fe-d40d08ae53f9",
            onCopy = jest.fn()
        } = properties;

        return <UuidValue uuid={uuid} onCopy={onCopy}/>;
    }
});
