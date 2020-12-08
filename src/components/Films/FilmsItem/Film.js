import React from "react";
import "./Film.css";
import notFoundImage from "../../../assets/images/get-image.jfif";

const film = (props) => {
    return (
        <div className="Film" onClick={props.select}>
            <img
                src={
                    props.imageUrl
                        ? "https://image.tmdb.org/t/p/w500/" + props.imageUrl
                        : notFoundImage
                }
                alt="film-logo"
            ></img>
        </div>
    );
};

export default film;
