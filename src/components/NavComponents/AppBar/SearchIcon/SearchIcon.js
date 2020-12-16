import React from "react";
import { connect } from "react-redux";
import { fetchMovies, findMovies } from "../../../../store/actions/movies";

import "./SearchIcon.css";
const searchIcon = (props) => {
    
    if(props.inputFilm.trim() === "") {
       props.fetchDefaultMovies();
    }
    return (
        <div
            className="SearchIcon"
            onClick={() => props.findMovie(props.inputFilm)}
        >
            <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <circle cx="13.125" cy="11.625" r="5.125" stroke="white" />
                <line
                    x1="16.137"
                    y1="15.4334"
                    x2="22.887"
                    y2="23.6834"
                    stroke="white"
                />
                <circle cx="15" cy="15" r="14.5" stroke="white" />
            </svg>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        findMovie: (title) => dispatch(findMovies(title)),
        fetchDefaultMovies: () => dispatch(fetchMovies()),
    };
};

export default connect(null, mapDispatchToProps)(searchIcon);
