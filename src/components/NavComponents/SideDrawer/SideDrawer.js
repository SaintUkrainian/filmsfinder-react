import React from "react";

import CSSTransition from "react-transition-group/CSSTransition";
import "./SideDrawer.css";

const SideDrawer = (props) => {
    return (
        <CSSTransition in={props.show} classNames="slider" unmountOnExit mountOnEnter timeout={500}>
            <div className="SideDrawer">
            </div>
        </CSSTransition>
    );
}

export default SideDrawer;
