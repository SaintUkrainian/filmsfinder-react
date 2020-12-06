import React, { useState, useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";
import Spinner from "../../UI/Spinner/Spinner";
import "./Genres.css"

const Genres = (props) => {

    console.log(props.genres);
    return (
        <div className="Genres">
            {!props.genres ? <Spinner /> : <h1>Fetched!</h1>}
        </div>
    );
};

const mapStateToProps = state => {
    return {
        genres: state.genres.genres,
    }
}

export default connect(mapStateToProps)(Genres);
