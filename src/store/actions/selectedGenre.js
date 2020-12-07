

export const setGenre = (genre) => {
    console.log(genre);
    return {
        type: "set_genre",
        id: genre.id,
        name: genre.name,
    };
};
