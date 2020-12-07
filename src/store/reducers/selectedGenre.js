const initialState = {
    id: null,
    name: null,
}


const selectedGenre = (state = initialState, action) => {

    switch(action.type) {
        case "set_genre": return {
            id: action.id,
            name: action.name,
        };
        default: return state;
    }
}


export default selectedGenre;