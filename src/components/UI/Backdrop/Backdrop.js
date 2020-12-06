import React from "react";
import CSSTransition from "react-transition-group/CSSTransition";

import "./Backdrop.css";

const backdrop = (props) => (
    <CSSTransition in={props.show} timeout={500} unmountOnExit mountOnEnter classNames="slide">
        <div className="Backdrop" onClick={props.closeModal}></div>
    </CSSTransition>
);

export default backdrop;
