const initialState = {
    id: null,
    name: null,
}


const selectedMovie = (state = initialState, action) => {

    switch(action.type) {
        case "": return {
            id: action.id,
            name: action.name,
        };
        default: return state;
    }
}


export default selectedMovie;