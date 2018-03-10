import "normalize.css/normalize.css";
import "react-tippy/dist/tippy.css";
import "./styles/index.scss";

import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";
import ReactGa from "react-ga";

const analyticsKey = process.env.GOOGLE_ANALYTICS_KEY || null;
ReactGa.initialize(analyticsKey, {debug: process.env.NODE_ENV !== "production"});
ReactGa.pageview("/");

ReactDOM.render(
    <App />,
    document.getElementById("root")
);