import React from "react";
import { useSelector } from "react-redux";
import { selectCurrentPage, selectSearchResults } from "./searchSlice";

const SearchResults = () => {
  const results = useSelector(selectSearchResults);
  const page = useSelector(selectCurrentPage);

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
