import React from "react";
import Footer from "./Footer";
import {shallow} from "enzyme";

describe("Footer component", () => {
    it("should display a text", () => {
        const wrapper = shallow(<Footer />);
        expect(wrapper.text()).toBeDefined();
    });
});