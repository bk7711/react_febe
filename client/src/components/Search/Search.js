import React, { useState } from "react";
import "./Search.css";

const Search = () => {
  const [showSearch, setShowSearch] = useState(false);
  console.log(showSearch);

  function searchBar() {
    setShowSearch(true);
    console.log(showSearch);
  }

  return (
    <form>
      <label>
        <input
          type="text"
          name="search"
          style={{ display: showSearch ? "block" : "none" }}
        />
      </label>

      <input
        type="submit"
        value="Search"
        className="btn search-btn"
        onClick={searchBar}
      />
    </form>
  );
};

export default Search;
