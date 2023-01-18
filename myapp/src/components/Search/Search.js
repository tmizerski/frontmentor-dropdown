import React from "react";
import "./Search.css";

const Search = (props) => {
    return (
        <div className={"search-container"}>
            <input
                className={"search"}
                placeholder={"Wyszukaj..."}
                onChange={(e)=>props.filterSearch(e.target.value)}
            />
        </div>
    )
}

export default Search;