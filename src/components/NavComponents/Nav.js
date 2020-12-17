import React from "react";

import Backdrop from "../UI/Backdrop/Backdrop";
import SideDrawer from "./SideDrawer/SideDrawer";
import AppBar from "./AppBar/AppBar";

const Nav = (props) => {
    return (
        <React.Fragment>
            <SideDrawer show={props.show} closeSideDrawer={props.closeSideDrawer}/>
            <Backdrop closeModal={props.closeSideDrawer} show={props.show}/>
            <AppBar showSideDrawer={props.showSideDrawer}/>
        </React.Fragment>
    );
}

export default Nav;