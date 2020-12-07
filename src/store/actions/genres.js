import axios from "axios";


const setGenres = (genres) => {

    return {
        type: "set_genres",
        genres: genres,
    }
}

export const fetchGenres = () => {
    return dispatch => {
        axios
        .get(
            "https://api.themoviedb.org/3/genre/movie/list?api_key=58af3dc3b19432c261816f7a48688477&language=en-US"
        )
        .then((response) => {
            console.log(response);
            dispatch(setGenres(response.data.genres));
        });
    }
}