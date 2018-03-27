import React from "react";
import UuidComponent from "../UuidComponent/UuidComponent";
import generateUuid from "../../uuid/generateUuid";

import "./App.scss";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const App = () => {
    return (
        <React.Fragment>
            <Header/>
            <div className="content">
                <UuidComponent generateUuid={generateUuid}/>
            </div>
            <Footer />
        </React.Fragment>
    );
};

export default App;
