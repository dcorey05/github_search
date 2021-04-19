import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  executeUserSearch,
  resetResults,
  selectPageSize,
  selectQuery,
  setQuery,
} from "./searchSlice";
// import styles from './Counter.module.css';

const SearchBar = () => {
  // const query = useSelector(selectQuery);
  const pageSize = useSelector(selectPageSize);
  const dispatch = useDispatch();
  const [query, setSearchQuery] = useState("");

  // const incrementValue = Number(incrementAmount) || 0;

  return (
    <div>
      <div>
        <input type="text" onChange={(e) => setSearchQuery(e.target.value)} />
        <button
          type="button"
          onClick={() => {
            // console.log("click! query: " + searchQuery);
            dispatch(resetResults());
            dispatch(setQuery(query));
            dispatch(executeUserSearch({ query, page: 1, pageSize }));
          }}
        >
          search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
