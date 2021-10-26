import React, {useState} from "react";
import UuidComponent from "../UuidComponent/UuidComponent";
import generateUuid, {generateMultiUuid} from "../../uuid/generateUuid";

import "./App.scss";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MultiUuidComponent from "../MultiUuidComponent/MultiUuidComponent";
import ModeSwitcher, {ModeType} from "../ModeSwitcher/ModeSwitcher";
import ReactGa from "react-ga";
import {EVENT} from "../../constants";

function App() {
    const [singleView, setSingleView] = useState(true);
    const onSwitch = (mode: ModeType) => {
        setSingleView(mode === "single");
        ReactGa.event({...EVENT.MODE_SELECT, label: mode.toUpperCase()})
    }
    const getMode = () => {
        return singleView ? "single" : "multi";
    }
    return (
        <>
            <Header/>
            <div className="content">
                {singleView
                    ? <UuidComponent generateUuid={generateUuid}/>
                    : <MultiUuidComponent generateMultiUuid={generateMultiUuid} />
                }
                <ModeSwitcher state={getMode()} onSwitch={onSwitch} />
            </div>
            <Footer />
        </>
    );
}

export default App;
