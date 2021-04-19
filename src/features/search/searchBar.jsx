import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  executeUserSearch,
  resetResults,
  selectPageSize,
  setQuery,
} from "./searchSlice";

const SearchBar = () => {
  const pageSize = useSelector(selectPageSize);
  const dispatch = useDispatch();
  const [query, setSearchQuery] = useState("");

  return (
    <div>
      <div>
        <input type="text" onChange={(e) => setSearchQuery(e.target.value)} />
        <button
          type="button"
          onClick={() => {
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
