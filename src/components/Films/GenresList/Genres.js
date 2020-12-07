import React from "react";
import { connect } from "react-redux";
import Spinner from "../../UI/Spinner/Spinner";
import "./Genres.css";
import * as actions from "../../../store/actions/movies";
import {setGenre} from "../../../store/actions/selectedGenre";

const Genres = (props) => {
    console.log(props.genres);
    let listOfGenres;
    if (props.genres) {
        listOfGenres = props.genres.map((item) => (
            <button key={item.id} className="Genre" onClick={() => props.setGenre(item)}>
                {item.name}
            </button>
        ));
    } else {
        listOfGenres = <Spinner />;
    }
    return <div className="Genres">
        <h3 style={{textDecoration: "underline", color: "white", margin: 0}}>Search by genres:</h3>
        {listOfGenres}
        </div>;
};

const mapStateToProps = (state) => {
    return {
        genres: state.genres.genres,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setGenre: (genre) =>
            dispatch(actions.fetchByGenre(genre)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Genres);
