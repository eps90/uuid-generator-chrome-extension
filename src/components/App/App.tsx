import React, {useState} from "react";
import UuidComponent from "../UuidComponent/UuidComponent";
import generateUuid, {generateMultiUuid} from "../../uuid/generateUuid";

import "./App.scss";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MultiUuidComponent from "../MultiUuidComponent/MultiUuidComponent";
import ModeSwitcher, {ModeType} from "../ModeSwitcher/ModeSwitcher";

function App() {
    const [singleView, setSingleView] = useState(true);
    const onSwitch = (state: ModeType) => {
        setSingleView(state === "single");
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
