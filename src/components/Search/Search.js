import React from "react";
import CSSTransition from "react-transition-group/CSSTransition";
import "./Search.css"

const Search = (props) => {

    return (
            <input className="Search" type="text" placeholder="Find a movie..."/>
    );
}

export default Search;