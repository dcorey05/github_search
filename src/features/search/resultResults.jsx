import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectSearchResults,
  selectSearchIncompleteResults,
  selectSearchStatus,
  selectSearchTotalCount,
} from "./searchSlice";
// import styles from './Counter.module.css';

const SearchResults = () => {
  const results = useSelector(selectSearchResults);
  const incomplete = useSelector(selectSearchIncompleteResults);
  const status = useSelector(selectSearchStatus);
  const totalCount = useSelector(selectSearchTotalCount);
  const dispatch = useDispatch();

  return (
    <div>
      <ul>
        {results.map((item) => (
          <li key={item.id}>
            <div>{item.login}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchResults;
