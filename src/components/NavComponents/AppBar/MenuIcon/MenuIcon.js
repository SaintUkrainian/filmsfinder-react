import React from "react";

import "./MenuIcon.css";

const menuIcon = (props) => (
    <div className="Rect1" onClick={props.showModal}>
        <div className="Rect3"></div>
        <div className="Rect3"></div>
        <div className="Rect3"></div>
    </div>
);

export default menuIcon;
