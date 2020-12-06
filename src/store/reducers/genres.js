const initialState = {
    genres: null,
};

const genres = (state = initialState, action) => {

    switch (action.type) {
        case "set_genres": return {
            genres: action.genres,
        }
        default: return state;
    }
};

export default genres;
