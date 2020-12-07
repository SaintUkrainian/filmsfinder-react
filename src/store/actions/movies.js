import axios from "axios";
import {setGenre} from "./selectedGenre";

const setMovies = (movies) => {
    return {
        type: "set_movies",
        movies: movies,
    };
};

const startFetching = () => {
    return {
        type: "start_fetching",
    }
}

export const fetchMovies = () => {
    return (dispatch) => {
        dispatch(startFetching());
        axios.get(
            "https://api.themoviedb.org/3/movie/popular?api_key=58af3dc3b19432c261816f7a48688477&language=en-US&page=1"
        ).then(response => {
            console.log(response.data.results);
            dispatch(setMovies(response.data.results));
        });
    };
};

export const fetchByGenre = (genre) => {
    return (dispatch) => {
        dispatch(startFetching());
        dispatch(setGenre(genre));
        axios
            .get(
                "https://api.themoviedb.org/3/discover/movie?api_key=58af3dc3b19432c261816f7a48688477&with_genres=" +
                    genre.id
            )
            .then((response) => {
                console.log(response);
                dispatch(setMovies(response.data.results));
            });
    };
};