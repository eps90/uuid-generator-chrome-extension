import React from "react";
import UuidComponent from "./UuidComponent";
import generateUuid from "../uuid/generateUuid";

const App = () => {
    return <UuidComponent generateUuid={generateUuid}/>;
};

export default App;