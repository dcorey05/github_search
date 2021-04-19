import React from "react";
import SearchBar from "./features/search/searchBar";
import SearchResults from "./features/search/resultResults";
import Pagination from "./features/search/pagination";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SearchBar />
        <SearchResults />
        <Pagination />
      </header>
    </div>
  );
}

export default App;
