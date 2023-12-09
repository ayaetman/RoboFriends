import React from "react";

function SearchBox({ searchChange, searchFeild }) {
  return (
    <div className="pa2 tc">
      <input
        className="pa3 ba b--green bg-lightest-blue"
        type="search"
        placeholder="search robots"
        onChange={searchChange}
      ></input>
    </div>
  );
}

export default SearchBox;
