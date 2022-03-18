import React from "react";
import { MdSearch } from "react-icons/md";

const Search = ({ handleSearchNote }) => {
  return (
    <div className="search">
      <MdSearch className="seach-icons" size="1.3em"></MdSearch>
      <input
        onChange={(props) => handleSearchNote(props.target.value)}
        type="text"
        placeholder="type pls"
      ></input>
    </div>
  );
};

export default Search;
