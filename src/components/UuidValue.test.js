import React from "react";
import UuidValue from "./UuidValue";
import {shallow} from "enzyme";

describe("UuidValue component", () => {
    it("should show passed-in value", () => {
        const uuid = "79da067a-c95f-47b7-8e2f-c50833fc1652";
        const wrapper = shallow(<UuidValue uuid={uuid} />);

        expect(wrapper.text()).toEqual(uuid);
    });
});