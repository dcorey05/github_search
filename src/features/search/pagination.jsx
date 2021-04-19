import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  executeUserSearch,
  selectCurrentPage,
  selectPageSize,
  selectQuery,
  selectSearchResults,
  selectSearchTotalCount,
  setPage,
} from "./searchSlice";

const Pagination = () => {
  const results = useSelector(selectSearchResults);
  const totalCount = useSelector(selectSearchTotalCount);
  const currentPage = useSelector(selectCurrentPage);
  const pageSize = useSelector(selectPageSize);
  const query = useSelector(selectQuery);
  const dispatch = useDispatch();

  const pages = Math.ceil(totalCount / pageSize);

  const changePage = (page) => {
    dispatch(setPage(page));
    if (!results[page]) {
      dispatch(executeUserSearch({ query, page, pageSize }));
    }
  };

  let paginationContent = [];
  for (let i = 1; i <= pages; i++) {
    paginationContent.push(
      <button
        onClick={() => changePage(i)}
        disabled={currentPage === i}
        key={`page${i}`}
        type="button"
        style={{ marginRight: "10px" }}
      >
        {i}
      </button>
    );
  }

  return (
    <div>
      <div>
        <button
          onClick={() => changePage(currentPage - 1)}
          disabled={currentPage === 1}
          key={"pageprev"}
          type="button"
          style={{ marginRight: "10px" }}
        >
          prev
        </button>
        {paginationContent}
        <button
          onClick={() => changePage(currentPage + 1)}
          disabled={currentPage === pages || pages === 0}
          key={"pagenext"}
          type="button"
          style={{ marginRight: "10px" }}
        >
          next
        </button>
      </div>
      <div>{totalCount} total results</div>
      {/* <div>Incomplete result? {incomplete ? "yes" : "no"}</div> */}
    </div>
  );
};

export default Pagination;
