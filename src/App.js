import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import "./App.css";

import Nav from "./components/NavComponents/Nav";
import Films from "./components/Films/Films/Films";
import SelectedFilm from "./components/Films/SelectedFilm/SelectedFilm";
import WelcomeModal from "./components/UI/WelcomeModal/WelcomeModal";
import * as actions from "./store/actions/genres";

const App = (props) => {
    const [showSideDrawer, setShowSideDrawer] = useState(false);
    const {fetchGenres} = props;
    const [showWelcome, setShowWelcome] = useState(!(localStorage.getItem("visited") === "true"));

    useEffect(() => {
        fetchGenres();
    }, [fetchGenres]);

    const closeModal = () => {
        setShowSideDrawer(false);
    };

    const showModal = () => {
        setShowSideDrawer(true);
    };

    const closeWelcomeModal = () => {
        localStorage.setItem("visited", "true");
        setShowWelcome(!showWelcome);
    }

    return (
        <div className="App">
            <WelcomeModal showWelcome={showWelcome} closeWelcome={closeWelcomeModal}/>
            <Nav show={showSideDrawer} showSideDrawer={showModal} closeSideDrawer={closeModal}/>
            <SelectedFilm />
            <Films />
        </div>
    );
};

const mapDispatchToProps = dispatch => {
    return {
        fetchGenres: () => dispatch(actions.fetchGenres()),
    }
}

export default connect(null, mapDispatchToProps)(App);
