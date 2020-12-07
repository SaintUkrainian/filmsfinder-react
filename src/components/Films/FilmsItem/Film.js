import React from "react";
import "./Film.css";

const film = (props) => {
    return (
        <div className="Film" onClick={props.select}>
                <img src={"https://image.tmdb.org/t/p/w500/" + props.imageUrl} alt="film-logo"></img>
        </div>
    );
};

export default film;
