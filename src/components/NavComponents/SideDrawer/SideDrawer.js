import React from "react";

import CSSTransition from "react-transition-group/CSSTransition";
import "./SideDrawer.css";
import Logo from "./Logo/Logo";
import Genres from "../../Films/GenresList/Genres";

const SideDrawer = (props) => {

    const timings = {
        enter: 500,
        exit: 400,
    }

    return (
        <CSSTransition in={props.show} classNames="slider" unmountOnExit mountOnEnter timeout={timings}>
            <div className="SideDrawer">
                <Logo />
                <h1>Good old FilmsFinder, but made with React.js</h1>
                <hr></hr>
                <Genres />
            </div>
        </CSSTransition>
    );
}

export default SideDrawer;
