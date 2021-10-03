import React from "react";
import Footer from "./Footer";
import {render} from "@testing-library/react";

describe("Footer component", () => {
    it("should display a text", () => {
        const {getByText} = render(<Footer />);
        expect(getByText(/Created by/)).toBeInTheDocument();
    });
});
