import React from "react";
import "./AppBar.css";

import MenuIcon from "./MenuIcon/MenuIcon";
import Search from "../../Search/Search";
import Logo from "../SideDrawer/Logo/Logo";
import { connect } from "react-redux";

const AppBar = (props) => {

    return (
        <div className="AppBar">
            <div className="MenuSearch">
                <MenuIcon showModal={props.showSideDrawer} />
                <Search />
            </div>
            <h1 className="genre">{props.genre}</h1>
            <h2 className="neon">FilmsFinder React version</h2>
            <div className="logo">
                <Logo />
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        genre: state.selectedGenre.name,
    };
};


export default connect(mapStateToProps)(AppBar);

