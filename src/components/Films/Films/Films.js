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
        fetchMovies();
    }, [fetchMovies]);

    if (!props.fetching) {
        if (!props.error) {
            if (props.movies.length > 0) {
                films = props.movies.map((movie) => (
                    <Film
                        key={movie.id}
                        imageUrl={movie.poster_path}
                        title={movie.title}
                        select={() =>
                            props.setSelectedMovie(movie.id, movie.title)
                        }
                    />
                ));
            } else {
                films = (
                    <h1 style={{ color: "white" }}>
                        Sorry, nothing was found by{" "}
                        <strong>{props.genre}</strong>
                    </h1>
                );
            }
        } else {
            films = (
                <h1 style={{ color: "white", textDecoration: "underline" }}>
                    An Error occurred!
                </h1>
            );
        }
    } else {
        films = <Spinner />;
    }
    return <div className="Films">{films}</div>;
};

const mapStateToProps = (state) => {
    return {
        movies: state.movies.list,
        fetching: state.movies.fetching,
        genre: state.selectedGenre.name,
        error: state.movies.error,
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
