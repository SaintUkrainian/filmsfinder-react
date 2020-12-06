import React, { useState } from "react";

import "./App.css";

import Nav from "./components/NavComponents/Nav";

const App = (props) => {
    const [showSideDrawer, setShowSideDrawer] = useState(false);

    const closeModal = () => {
        setShowSideDrawer(false);
    };

    const showModal = () => {
        setShowSideDrawer(true);
    };

    return (
        <div className="App">
            <Nav show={showSideDrawer} showSideDrawer={showModal} closeSideDrawer={closeModal}/>
        </div>
    );
};

export default App;
