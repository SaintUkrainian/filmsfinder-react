const initialState = {
    list: null,
    fetching: true,
    error: null,
};

const movies = (state = initialState, action) => {
    switch (action.type) {
        case "set_movies":
            return {
                list: action.movies,
                fetching: false,
            };
        case "start_fetching":
            return {
                ...state,
                fetching: true,
            };
        case "set_error": return {
            ...state,
            error: action.error,
            fetching: false,
        }
        default:
            return state;
    }
};

export default movies;
