import React from "react";
import UuidComponent from "./UuidComponent";
import {mount} from "enzyme";
import UuidValue from "../UuidValue/UuidValue";
import Toolbar from "../Toolbar/Toolbar";
import ReactGa from "react-ga";

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
        expect(wrapper.find(UuidValue).prop("uuid")).toEqual(generatedValue);
    });

    it("should display a Toolbar", () => {
        const wrapper = mount(getComponentUnderTest());
        expect(wrapper.find(Toolbar)).toHaveLength(1);
    });
    
    it("should send an event when onRefresh is called", () => {
        expect.assertions(1);

        const wrapper = mount(getComponentUnderTest());

        wrapper.instance().onRefresh();
        expect(ReactGa.testModeAPI.calls).toContainEqual([
            "send", {"eventAction": "REFRESH", "eventCategory": "UI", "hitType": "event"}
        ]);
    });

    it("should send an event when onCopy is called", () => {
        expect.assertions(1);

        const wrapper = mount(getComponentUnderTest());
        wrapper.instance().onCopy();

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
