import React from "react";
import CSSTransition from "react-transition-group/CSSTransition";
import "./Search.css"

const Search = (props) => {

    return (
        <CSSTransition classNames="grow">
            <input className="Search" type="text" placeholder="Find a movie..."/>
        </CSSTransition>
    );
}

export default Search;