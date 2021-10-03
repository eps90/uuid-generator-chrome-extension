import React from "react";
import FooterLink from "./FooterLink";
import ReactGa from "react-ga";
import {fireEvent, render} from "@testing-library/react";

describe("FooterLink component", () => {
    beforeEach(() => {
        window.chrome = {
            // @ts-ignore
            tabs: {
                create: jest.fn()
            }
        };
        document.location = "";
    });

    it("should render a link", () => {
        const linkHref = "http://www.google.com/";
        const linkText = "Google homepage";

        const {getByRole} = render(getComponentUnderTest(linkHref, linkText));
        expect(getByRole("link")).toBeInTheDocument()
        expect(getByRole("link")).toHaveProperty("href", linkHref);
        expect(getByRole("link")).toHaveTextContent(linkText);
    });

    it("should call Chrome tabs API on click", () => {
        const linkHref = "http://www.google.com/";

        const {getByRole} = render(getComponentUnderTest(linkHref));
        fireEvent.click(getByRole("link"))

        expect(window.chrome.tabs.create).toHaveBeenCalledWith({url: linkHref});
    });

    it("should follow link normally as a fallback", () => {
        // @ts-ignore
        window.chrome.tabs = undefined;

        const linkHref = "http://localhost/";

        const {getByRole} = render(getComponentUnderTest(linkHref));
        fireEvent.click(getByRole("link"))

        expect(document.location.href).toEqual(linkHref);
    });

    it("should send an event to GA", () => {
        const linkHref = "http://www.google.com";

        const {getByRole} = render(getComponentUnderTest(linkHref));
        fireEvent.click(getByRole("link"))

        expect(ReactGa.testModeAPI.calls).toContainEqual([
            "send", {"eventAction": "CLICK", "eventCategory": "LINK", "eventLabel": linkHref, "hitType": "event"}
        ]);
    });

    function getComponentUnderTest(link = "http://google.com", text="Google") {
        return <FooterLink href={link} text={text} />;
    }
});
