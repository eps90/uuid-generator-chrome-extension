import React from "react";
import UuidComponent from "./UuidComponent";
import {mount} from "enzyme";
import UuidValue from "./UuidValue";
import Toolbar from "./Toolbar";

describe("UuidComponent", () => {
    it("should render a UUID", () => {
        const generateUuid = createGenerateUuidFunction();
        const wrapper = mount(getComponentUnderTest(generateUuid));
        wrapper.update();

        expect(generateUuid).toHaveBeenCalled();
    });
    
    it("should show generated UUID", () => {
        const generatedValue = "87385303-bca2-4c20-9b96-9d3baa98345c";
        const generateUuid = createGenerateUuidFunction(generatedValue);

        const wrapper = mount(getComponentUnderTest(generateUuid));
        wrapper.update();

        expect(wrapper.find(UuidValue)).toHaveLength(1);
        expect(wrapper.find(UuidValue).first().text()).toEqual(generatedValue);
    });

    it("should show an introduction message", () => {
        const wrapper = mount(getComponentUnderTest());
        wrapper.update();

        expect(wrapper.find("span.uuid-container__label")).toHaveLength(1);
    });

    it("should display a Toolbar", () => {
        const wrapper = mount(getComponentUnderTest());
        expect(wrapper.find(Toolbar)).toHaveLength(1);
    });

    function getComponentUnderTest(generateUrlFn = createGenerateUuidFunction()) {
        return <UuidComponent generateUuid={generateUrlFn} />;
    }

    function createGenerateUuidFunction(returnValue = "3ab3482b-48d1-41fa-b5ea-ff1111042761") {
        return jest.fn().mockReturnValue(returnValue);
    }
});