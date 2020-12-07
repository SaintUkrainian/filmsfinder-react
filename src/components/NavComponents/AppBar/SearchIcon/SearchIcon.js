import React from "react";

import "./SearchIcon.css";
const searchIcon = () => (
    <div className="SearchIcon" onClick={() => console.log("Searching...")}>
        <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <circle cx="13.125" cy="11.625" r="5.125" stroke="white" />
            <line
                x1="16.137"
                y1="15.4334"
                x2="22.887"
                y2="23.6834"
                stroke="white"
            />
            <circle cx="15" cy="15" r="14.5" stroke="white" />
        </svg>
    </div>
);

export default searchIcon;
