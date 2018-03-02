import "normalize.css/normalize.css";
import "./styles/index.scss";

import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";
import ReactGa from "react-ga";

const analyticsKey = process.env.GOOGLE_ANALYTICS_KEY || null;
ReactGa.initialize(analyticsKey, {debug: true});
ReactGa.pageview("/");

ReactDOM.render(
    <App />,
    document.getElementById("root")
);