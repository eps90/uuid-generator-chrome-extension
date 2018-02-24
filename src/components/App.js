import React from "react";
import UuidComponent from "./UuidComponent";
import generateUuid from "../uuid/generateUuid";

import "./../styles/App.scss";

const App = () => {
    return (
        <div className="content">
            <UuidComponent generateUuid={generateUuid}/>
        </div>
    );
};

export default App;