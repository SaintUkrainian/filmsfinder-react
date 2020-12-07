import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import "./App.css";

import Nav from "./components/NavComponents/Nav";
import Films from "./components/Films/Films/Films";
import SelectedFilm from "./components/Films/SelectedFilm/SelectedFilm";
import * as actions from "./store/actions/genres";

const App = (props) => {
    const [showSideDrawer, setShowSideDrawer] = useState(false);
    const {fetchGenres} = props;

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
