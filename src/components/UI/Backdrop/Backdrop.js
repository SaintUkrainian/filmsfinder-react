import React from "react";
import CSSTransition from "react-transition-group/CSSTransition";

import "./Backdrop.css";

const backdrop = (props) => {
    const timings = {
        enter: 500,
        exit: 400,
    }
    return (
        <CSSTransition
            in={props.show}
            timeout={timings}
            unmountOnExit
            mountOnEnter
            classNames="slide"
        >
            <div className="Backdrop" onClick={props.closeModal}></div>
        </CSSTransition>
    );
};

export default backdrop;
