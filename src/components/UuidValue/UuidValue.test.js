import React from "react";
import UuidValue from "./UuidValue";
import {shallow} from "enzyme";

describe("UuidValue component", () => {
    it("should render an input", () => {
        const wrapper = shallow(createComponentUnderTest());

        expect(wrapper.find("input")).toHaveLength(1);
    });

    it("should show passed-in value", () => {
        const uuid = "79da067a-c95f-47b7-8e2f-c50833fc1652";
        const wrapper = shallow(createComponentUnderTest({uuid}));

        expect(wrapper.find("input").first().prop("value")).toEqual(uuid);
    });

    function createComponentUnderTest(properties = {}) {
        const {
            uuid = "82660ed3-d567-49b7-82fe-d40d08ae53f9"
        } = properties;

        return <UuidValue uuid={uuid}/>;
    }
});
