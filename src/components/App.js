import React from "react";
import UuidComponent from "./UuidComponent";
import generateUuid from "../uuid/generateUuid";

import "./../styles/App.scss";
import Footer from "./Footer";

const App = () => {
    return (
        <div className="content">
            <UuidComponent generateUuid={generateUuid}/>
            <Footer />
        </div>
    );
};

export default App;