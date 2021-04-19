import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  executeUserSearch,
  selectCurrentPage,
  selectPageSize,
  selectQuery,
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
  const page = useSelector(selectCurrentPage);
  const pageSize = useSelector(selectPageSize);
  const query = useSelector(selectQuery);

  const dispatch = useDispatch();

  // const start = pageSize * (currentPage - 1);
  // const end = start + pageSize;
  // const pageResults = results.slice(start, end);
  const pageResults = results[page];

  return (
    <div>
      <ul>
        {pageResults &&
          pageResults.map((item) => (
            <li key={item.id}>
              <a href={item.html_url}>{item.login}</a>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default SearchResults;
