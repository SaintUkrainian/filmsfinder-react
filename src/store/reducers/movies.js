const initialState = {
    list: null,
    fetching: true,
};

const movies = (state = initialState, action) => {
    switch (action.type) {
        case "set_movies":
            return {
                list: action.movies,
                fetching: false,
            };
        case "start_fetching": return {
            ...state,
            fetching: true,
        }
        default:
            return state;
    }
};

export default movies;
