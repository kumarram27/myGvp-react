// src/components/SearchPDFs.jsx
import React from "react";

function SearchPDFs() {
  const handleSearch = () => {
    const searchInput = document.getElementById("searchInput").value;
    // Add logic to search and display PDFs based on the search query
    console.log("Searching for:", searchInput);
  };

  return (
    <div>
      <input type="text" id="searchInput" placeholder="Search PDFs" />
      <button type="button" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
}

export default SearchPDFs;
