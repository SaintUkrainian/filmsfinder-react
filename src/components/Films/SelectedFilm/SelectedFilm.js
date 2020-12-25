import React from "react";
import { connect } from "react-redux";
import CSSTransition from "react-transition-group/CSSTransition";

import * as actions from "../../../store/actions/selectedMovie";
import "./SelectedFilm.css";
import Spinner from "../../UI/Spinner/Spinner";
import notFoundImage from "../../../assets/images/get-image.jfif";

const SelectedFilm = (props) => {
    let filmDesc = null;
    if(props.fetchingMovie) {
        filmDesc = <Spinner />;
    } else {
        if (props.id) {
            filmDesc = (
                <React.Fragment>
                    <img
                        src={
                            props.filmInfo.poster_path
                                ? "https://image.tmdb.org/t/p/w500/" +
                                  props.filmInfo.poster_path
                                : notFoundImage
                        }
                        alt="poster"
                    ></img>
                    <div className="description">
                        <h1>{props.filmInfo.title}</h1>
                        <p>
                            <strong>Release date: </strong>
                            {props.filmInfo.release_date}
                        </p>
                        <p>
                            <strong>Budget: </strong>$
                            {props.filmInfo.budget === 0
                                ? "ecret"
                                : props.filmInfo.budget}
                        </p>
                        <p>
                            <strong>Minutes long: </strong>
                            {props.filmInfo.runtime}
                        </p>
                        <p>
                            <strong>Genres: </strong>
                            {props.filmInfo.genres
                                .map((obj) => obj.name)
                                .join(", ")}
                        </p>
                        <p>
                            <strong>Description:</strong> {props.filmInfo.overview}
                        </p>
                        {props.filmInfo.homepage ? (
                            <a
                                href={props.filmInfo.homepage}
                                style={{
                                    color: "white",
                                    marginBottom: 3,
                                    marginLeft: 2,
                                }}
                            >
                                Visit its official homepage!
                            </a>
                        ) : null}
                    </div>
                </React.Fragment>
            );
        } else {
            filmDesc = <h1>:(</h1>
        }
    }
    return (
        <CSSTransition
            in={props.openModal}
            unmountOnExit
            mountOnEnter
            classNames="film"
            timeout={300}
        >
            <div className="SelectedFilm" onClick={props.clearSelection}>
                <div className="container">{filmDesc}</div>
            </div>
        </CSSTransition>
    );
};

const mapStateToProps = (state) => {
    return {
        id: state.selectedMovie.id,
        filmInfo: state.selectedMovie.info,
        fetchingMovie: state.selectedMovie.fetching,
        openModal: state.selectedMovie.openModal,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        clearSelection: () => dispatch(actions.clearSelection()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectedFilm);
