const initialState = {
    id: null,
    title: null,
    info: null,
    fetching: false,
    close: true,
}


const selectedMovie = (state = initialState, action) => {

    switch(action.type) {
        case "set_selected_movie": return {
            id: action.id,
            title: action.title,
            info: action.info,
            fetchin: false,
            close: false,
        };
        case "clear_selected_movie": return {
            ...state,
            id: null,
            title: null,
            info: null,
            close: true,
        }
        case "fetch_movie": return {
            ...state,
            fetching: true,
        }
        default: return state;
    }
}


export default selectedMovie;