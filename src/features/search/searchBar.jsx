import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { executeUserSearch } from "./searchSlice";
// import styles from './Counter.module.css';

const SearchBar = () => {
  // const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");

  // const incrementValue = Number(incrementAmount) || 0;

  return (
    <div>
      <div>
        <input type="text" onChange={(e) => setSearchQuery(e.target.value)} />
        <button
          type="button"
          onClick={() => {
            console.log("click! query: " + searchQuery);
            dispatch(executeUserSearch(searchQuery));
          }}
        >
          search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
