import React from "react";

import CSSTransition from "react-transition-group/CSSTransition";
import "./SideDrawer.css";
import Logo from "./Logo/Logo";

const SideDrawer = (props) => {
    return (
        <CSSTransition in={props.show} classNames="slider" unmountOnExit mountOnEnter timeout={500}>
            <div className="SideDrawer">
                <Logo />
                <h1>This is SideDrawer</h1>
                <hr></hr>
            </div>
        </CSSTransition>
    );
}

export default SideDrawer;
