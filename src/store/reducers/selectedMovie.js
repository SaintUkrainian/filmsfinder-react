const initialState = {
    id: null,
    title: null,
    info: null,
    fetching: false,
    openModal: false,
}


const selectedMovie = (state = initialState, action) => {

    switch(action.type) {
        case "set_selected_movie": return {
            ...state,
            id: action.id,
            title: action.title,
            info: action.info,
            fetching: false,
        };
        case "clear_selected_movie": return {
            ...state,
            id: null,
            title: null,
            info: null,
            openModal: false,
        }
        case "fetch_movie": return {
            ...state,
            fetching: true,
            openModal: true,
        }
        default: return state;
    }
}


export default selectedMovie;