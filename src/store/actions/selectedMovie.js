import axios from "axios";

const setMovie = (id, title, info) => {
    return {
        type: "set_selected_movie",
        id: id,
        title: title,
        info: info,
    };
};

const startFetching = () => {
    return {
        type: "fetch_movie",
    };
};

export const setSelectedMovie = (id, title) => {

    return (dispatch) => {
        dispatch(startFetching());
        axios
            .get(
                "https://api.themoviedb.org/3/movie/" +
                    id +
                    "?api_key=58af3dc3b19432c261816f7a48688477&language=en-US"
            )
            .then((response) => {
                dispatch(setMovie(id, title, response.data));
            });
    };
};

export const clearSelection = () => {
    return {
        type: "clear_selected_movie",
    };
};
