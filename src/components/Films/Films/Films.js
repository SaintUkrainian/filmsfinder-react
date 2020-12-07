import React, { useEffect } from "react";
import { connect } from "react-redux";
import Film from "../FilmsItem/Film";
import Spinner from "../../UI/Spinner/Spinner";
import "./Films.css";

import * as actionMovies from "../../../store/actions/movies";
import * as actionSelectedMovie from "../../../store/actions/selectedMovie";

const Films = (props) => {
    let films;
    const { fetchMovies } = props;

    useEffect(() => {
        console.log("fetching movies");
        fetchMovies();
    }, [fetchMovies]);

    console.log(props.fetching);
    console.log(props.movies);
    if (!props.fetching) {
        films = props.movies.map((movie) => (
            <Film
                imageUrl={movie.poster_path}
                title={movie.title}
                select={() => props.setSelectedMovie(movie.id, movie.title)}
            />
        ));
        console.log("Fetched");
    } else {
        films = <Spinner />;
        console.log("Spinner");
    }
    return <div className="Films">{films}</div>;
};

const mapStateToProps = (state) => {
    return {
        movies: state.movies.list,
        fetching: state.movies.fetching,
        genre: state.selectedGenre.name,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchMovies: () => dispatch(actionMovies.fetchMovies()),
        setSelectedMovie: (id, title) =>
            dispatch(actionSelectedMovie.setSelectedMovie(id, title)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Films);
