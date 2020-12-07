import React from "react";
import { connect } from "react-redux";
import CSSTransition from "react-transition-group/CSSTransition";
import * as action from "../../../store/actions/selectedMovie"

import "./Backdrop.css";

const backdrop = (props) => {
    const timings = {
        enter: 500,
        exit: 400,
    }


    return (
        <CSSTransition
            in={props.show || !props.close}
            timeout={timings}
            unmountOnExit
            mountOnEnter
            classNames="slide"
        >
            <div className="Backdrop" onClick={!props.close ? props.clearSelection : props.closeModal}></div>
        </CSSTransition>
    );
};

const mapStateToProps = state => {
    return {
        id: state.selectedMovie.id,
        close: state.selectedMovie.close,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        clearSelection: () => dispatch(action.clearSelection())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(backdrop);
