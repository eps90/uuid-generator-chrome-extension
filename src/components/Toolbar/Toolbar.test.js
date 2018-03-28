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

    xit("should show copy button", () => {
        const uuid = "b813b672-f1d8-4b37-98db-9dd750393bbf";
        const wrapper = shallow(getComponentUnderTest({uuid}));

        expect(wrapper.find(Clipboard)).toHaveLength(1);
        expect(wrapper.findWhere(n => n.is(FontAwesomeIcon) && n.prop("icon").iconName === "copy")).toHaveLength(1);
    });

    xit("should call onCopy function on successful copy", () => {
        const onCopy = jest.fn();
        const wrapper = mount(getComponentUnderTest({onCopy}));
        wrapper.update();

        wrapper.find("button.toolbar-button--copy").simulate("click");

        expect(onCopy).toHaveBeenCalled();
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
