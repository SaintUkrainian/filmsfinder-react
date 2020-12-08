import React, { useState } from "react";
import "./Search.css";
import SearchIcon from "../NavComponents/AppBar/SearchIcon/SearchIcon";

const Search = (props) => {
    const [input, setInput] = useState("");
    return (
        <React.Fragment>
            <input
                className="Search"
                type="text"
                placeholder="Find a movie..."
                value={input}
                onChange={(event) => setInput(event.target.value)}
            />
            <SearchIcon inputFilm={input}/>
        </React.Fragment>
    );
};

export default Search;
