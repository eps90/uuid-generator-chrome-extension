import React from "react";
import App from "./App";
import {render} from "@testing-library/react";

describe("App component", () => {
    it("should render a UuidComponent component", () => {
        const {getByRole} = render(<App/>);
        expect(getByRole("textbox")).toBeInTheDocument();
    });
});
