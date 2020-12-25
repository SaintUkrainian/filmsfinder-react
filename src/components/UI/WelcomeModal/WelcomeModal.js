import React from "react";
import CSSTransition from "react-transition-group/CSSTransition";
import "./WelcomeModal.css";
const welcomeModal = (props) => {
    return (
        <CSSTransition unmountOnExit mountOnEnter timeout={400} classNames="welcome_modal" in={props.showWelcome}>
            <div className="WelcomeModal" onClick={props.closeWelcome}>
                <h1>Welcome to FilmsFinder React!</h1>
                <p style={{textDecoration: "underline"}}>Made by Denys Matsenko</p>
            </div>
        </CSSTransition>
    );
}

export default welcomeModal;