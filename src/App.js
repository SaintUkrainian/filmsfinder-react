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
    const [showWelcome, setShowWelcome] = useState(true);

    useEffect(() => {
        fetchGenres();
    }, [fetchGenres]);

    const closeModal = () => {
        setShowSideDrawer(false);
    };

    const showModal = () => {
        setShowSideDrawer(true);
    };

    return (
        <div className="App">
            <WelcomeModal showWelcome={showWelcome} closeWelcome={() => setShowWelcome(!showWelcome)}/>
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
