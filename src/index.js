import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { Provider } from "react-redux";
import { createStore, compose, combineReducers, applyMiddleware } from "redux";
import selectedMovie from "./store/reducers/selectedMovie";
import genres from "./store/reducers/genres";
import thunk from "redux-thunk";
import selectedGenre from "./store/reducers/selectedGenre";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    selectedMovie: selectedMovie,
    genres: genres,
    selectedGenre: selectedGenre,
});

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);

const app = (
    <Provider store={store}>
        <App />
    </Provider>
);

ReactDOM.render(app, document.getElementById("root"));
registerServiceWorker();
