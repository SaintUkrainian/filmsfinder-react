

export const setGenre = (genre) => {
    return {
        type: "set_genre",
        id: genre.id,
        name: genre.name,
    };
};
