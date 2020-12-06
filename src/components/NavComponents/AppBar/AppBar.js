import React from "react";
import "./AppBar.css";

import MenuIcon from "./MenuIcon/MenuIcon";
import Search from "../../Search/Search";
import Logo from "../SideDrawer/Logo/Logo";

export default function AppBar(props) {
    return (
        <div className="AppBar">
            <div className="MenuSearch">
                <MenuIcon showModal={props.showSideDrawer} />
                <Search />
            </div>
            <h2 className="neon">FilmsFinder React version</h2>
            <div className="logo">
                <Logo />
            </div>
        </div>
    );
}
