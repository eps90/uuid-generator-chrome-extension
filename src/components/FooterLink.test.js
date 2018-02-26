import React from "react";
import FooterLink from "./FooterLink";
import {shallow} from "enzyme";

describe("FooterLink component", () => {
    beforeEach(() => {
        window.chrome = {
            tabs: {
                create: jest.fn()
            }
        };
        document.location = "";
    });

    it("should render a link", () => {
        const linkHref = "http://www.google.com";
        const linkText = "Google homepage";

        const wrapper = shallow(getComponentUnderTest(linkHref, linkText));
        expect(wrapper.find("a")).toHaveLength(1);
        expect(wrapper.find("a").first().prop("href")).toEqual(linkHref);
        expect(wrapper.find("a").first().text()).toEqual(linkText);
    });

    it("should call Chrome tabs API on click", () => {
        const linkHref = "http://www.google.com";

        const wrapper = shallow(getComponentUnderTest(linkHref));
        wrapper.find("a").simulate("click");

        expect(window.chrome.tabs.create).toHaveBeenCalledWith({url: linkHref});
    });

    it("should follow link normally as a fallback", () => {
        window.chrome.tabs = undefined;

        const linkHref = "http://localhost/";

        const wrapper = shallow(getComponentUnderTest(linkHref));
        wrapper.find("a").simulate("click");

        expect(document.location.href).toEqual(linkHref);
    });

    function getComponentUnderTest(link = "http://google.com", text="Google") {
        return <FooterLink href={link} text={text} />;
    }
});