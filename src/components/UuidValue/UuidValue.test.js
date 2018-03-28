import React from "react";
import UuidValue from "./UuidValue";
import {shallow, mount} from "enzyme";
import FontAwesomeIcon from "@fortawesome/react-fontawesome/index";
import Clipboard from "react-clipboard.js";

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

    describe("Toolbar", () => {
        it("should show copy button", () => {
            const uuid = "b813b672-f1d8-4b37-98db-9dd750393bbf";
            const wrapper = shallow(createComponentUnderTest({uuid}));

            expect(wrapper.find(Clipboard)).toHaveLength(1);
            expect(wrapper.findWhere(n => n.is(FontAwesomeIcon) && n.prop("icon").iconName === "copy")).toHaveLength(1);
        });

        it("should call onCopy function on successful copy", () => {
            const onCopy = jest.fn();
            const wrapper = mount(createComponentUnderTest({onCopy}));
            wrapper.update();

            wrapper.find("button.uuid__toolbar-button").simulate("click");

            expect(onCopy).toHaveBeenCalled();
        });
    });

    function createComponentUnderTest(properties = {}) {
        const {
            uuid = "82660ed3-d567-49b7-82fe-d40d08ae53f9",
            onCopy = jest.fn()
        } = properties;

        return <UuidValue uuid={uuid} onCopy={onCopy}/>;
    }
});
