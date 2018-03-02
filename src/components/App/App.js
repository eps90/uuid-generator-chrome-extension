import React from "react";
import UuidComponent from "../UuidComponent/UuidComponent";
import generateUuid from "../../uuid/generateUuid";

import "./App.scss";
import Footer from "../Footer/Footer";

const App = () => {
    return (
        <div className="content">
            <UuidComponent generateUuid={generateUuid}/>
            <Footer />
        </div>
    );
};

export default App;