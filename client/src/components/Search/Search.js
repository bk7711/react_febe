import React, { useState } from "react";
import "./Search.css";
// import { FaSearch } from "react-icons/fa";

const Search = () => {
  const [showSearch, setShowSearch] = useState(false);
  console.log(showSearch);

  function searchBar() {
    setShowSearch(true);

    console.log(showSearch);
  }

  return (
    <form className="search">
      <label>
        <input
          type="text"
          name="search"
          style={{ display: showSearch ? "block" : "none" }}
        />
      </label>

      <input
        type="button"
        value="search"
        style={{
          backgroundColor: showSearch ? "var(--light)" : "var(--medium)",
        }}
        className="btn search-btn"
        onClick={searchBar}
      />
    </form>
  );
};

export default Search;
