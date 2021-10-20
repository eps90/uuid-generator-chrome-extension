import React from "react"
import MultiUuidComponent from "./MultiUuidComponent";
import {act, fireEvent, render} from "@testing-library/react";
import {v4} from "uuid";

const testUuids = [
    "602e476b-8bf3-4cc5-882a-066f7cc7b113",
    "d9106428-10a4-4cce-b49a-7a134e62ac92",
    "dae03fe4-5262-4b36-8d3e-7a85c9bd8e42"
]

describe("MultiUuidComponent component", () => {
    it("should apply double quotes to each uuid", () => {
        const {getByLabelText, getByRole} = render(createComponentUnderTest())
        act(() => {
            fireEvent.click(getByLabelText("Double"))
        });
        expect(getByRole("textbox")).toHaveValue(testUuids.map(e => `"${e}"`).join(" "))
    });

    it("should apply double quotes to each uuid", () => {
        const {getByLabelText, getByRole} = render(createComponentUnderTest())
        act(() => {
            fireEvent.click(getByLabelText("Single"))
        });
        expect(getByRole("textbox")).toHaveValue(testUuids.map(e => `'${e}'`).join(" "))
    });

    it("should apply commas between each uuid", () => {
        const uuids = getTestUuids();
        const generateFunction = createGenerateUuidFunction(uuids);
        const {getByLabelText, getByRole} = render(createComponentUnderTest(generateFunction))
        act(() => {
            fireEvent.click(getByLabelText("Comma"))
        });
        expect(getByRole("textbox")).toHaveValue(uuids.join(", "))
    });

    it("should apply new lines between each uuid", () => {
        const uuids = getTestUuids();
        const generateFunction = createGenerateUuidFunction(uuids);
        const {getByLabelText, getByRole} = render(createComponentUnderTest(generateFunction))
        act(() => {
            fireEvent.click(getByLabelText("New line"))
        });
        expect(getByRole("textbox")).toHaveValue(uuids.join("\n"))
    });

    it("should apply different separators", () => {
        const uuids = getTestUuids();
        const generateFunction = createGenerateUuidFunction(uuids);
        const {getByLabelText, getByRole} = render(createComponentUnderTest(generateFunction))
        act(() => {
            fireEvent.click(getByLabelText("New line"))
            fireEvent.click(getByLabelText("Comma"))
        });
        expect(getByRole("textbox")).toHaveValue(uuids.join(", \n"))
    });

    it("should define the size of the uuid list", () => {
        const generateFunction = createGenerateUuidFunction();
        const {getByLabelText} = render(createComponentUnderTest(generateFunction))

        const input = getByLabelText("size");
        expect(input).toHaveValue(10);

        act(() => {
            fireEvent.change(getByLabelText("size"), {target: {value: "15"}});
        });

        expect(generateFunction).toHaveBeenCalledWith("15");
    });

    function createComponentUnderTest(generateFunction = createGenerateUuidFunction()) {
        return <MultiUuidComponent generateMultiUuid={generateFunction} />;
    }

    function createGenerateUuidFunction(returnValue: string[] = testUuids) {
        return jest.fn().mockReturnValue(returnValue);
    }

    function getTestUuids() {
        const result = [];
        for (let i = 0; i < 5; i++) {
            result.push(v4())
        }
        return result
    }
});
