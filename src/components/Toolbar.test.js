import React from "react";
import Toolbar from "./Toolbar";
import {shallow} from "enzyme";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";

describe("Toolbar component", () => {
    it("should show refresh button", () => {
        const wrapper = shallow(getComponentUnderTest());
        expect(wrapper.find("button.toolbar-button--refresh")).toHaveLength(1);
        expect(wrapper.find(FontAwesomeIcon)).toHaveLength(1);
    });

    it("should call onRefresh function on click", () => {
        const onRefreshMock = jest.fn();
        const wrapper = shallow(getComponentUnderTest(onRefreshMock));
        wrapper.update();

        wrapper.find("button.toolbar-button--refresh").simulate("click");

        expect(onRefreshMock).toHaveBeenCalled();
    });

    function getComponentUnderTest(onRefresh = () => {}) {
        return <Toolbar onRefresh={onRefresh} />;
    }
});