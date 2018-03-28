import React from "react";
import Toolbar from "./Toolbar";
import {mount, shallow} from "enzyme";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import Clipboard from "../../../node_modules/react-clipboard.js/dist/react-clipboard";

describe("Toolbar component", () => {
    it("should show refresh button", () => {
        const wrapper = shallow(getComponentUnderTest());
        expect(wrapper.find("button.toolbar-button--refresh")).toHaveLength(1);
        expect(wrapper.findWhere(n => n.is(FontAwesomeIcon) && n.prop("icon").iconName === "sync-alt")).toHaveLength(1);
    });

    it("should call onRefresh function on click", () => {
        const onRefresh = jest.fn();
        const wrapper = shallow(getComponentUnderTest({onRefresh}));
        wrapper.update();

        wrapper.find("button.toolbar-button--refresh").simulate("click");

        expect(onRefresh).toHaveBeenCalled();
    });

    function getComponentUnderTest(properties = {}) {
        const {
            onRefresh = jest.fn(),
            onCopy = jest.fn(),
            uuid = "b55fcf6c-21e7-45c7-bbe0-1261f0a30ee2"
        } = properties;
        return <Toolbar onRefresh={onRefresh} uuid={uuid} onCopy={onCopy} />;
    }
});
