import React from "react";
import App from "./App";
import {shallow} from "enzyme";
import UuidComponent from "./UuidComponent";

describe("App component", () => {
    it("should render a UuidComponent component", () => {
        const wrapper = shallow(<App/>);
        expect(wrapper.find(UuidComponent)).toHaveLength(1);
    });

    it("should pass generateUuid function to component", () => {
        const wrapper = shallow(<App/>);
        expect(wrapper.find(UuidComponent).first().prop('generateUuid')).toBeDefined();
    });
});